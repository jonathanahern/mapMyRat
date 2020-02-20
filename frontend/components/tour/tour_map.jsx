import React from 'react';
import ReactDOM from 'react-dom';

const getPosObj = latLng => ({
    lat: latLng.lat(),
    lng: latLng.lng()
});

class TourMap extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            description: "",
            class: "loading",
            currentRodent: "RAT",
            distance: 0

        };

        this.markersArray = [];
        this.coordsArray = [];
        this.startMarker = null;
        this.distanceArray = []
        this.map = null;
        this.geocoder = new google.maps.Geocoder();
        this.currentRodent = "rat";
        this.selectedIconElement = null;
        this.selectedIconImage = null;
        this.directionsRendererTemp = null;
        this.directionsDisplay = null;
        this.dancing = false;

        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getLocation = this.getLocation.bind(this);
        this.showPosition = this.showPosition.bind(this);
        this.loadMap = this.loadMap.bind(this);
        this.codeAddress = this.codeAddress.bind(this);
        this.geocoder.geocode = this.geocoder.geocode.bind(this);
        this.callback = this.callback.bind(this);
        this.handleRodent = this.handleRodent.bind(this);
        this.placeMarkerRoute = this.placeMarkerRoute.bind(this);
        this.toolUndo = this.toolUndo.bind(this);
        this.toolClear = this.toolClear.bind(this);
        this.toolReturn = this.toolReturn.bind(this);
        this.toolDance = this.toolDance.bind(this);
        this.getDistance = this.getDistance.bind(this);
        this.distanceReturn = this.distanceReturn.bind(this);
        
    }

    componentDidMount() {
        this.getLocation();
        this.selectedIconElement = document.getElementById("selectedIcon");
        this.directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true, preserveViewport: true });
        if (this.selectedIconImage === null){
            this.selectedIconImage = window.ratMarkerURL;
        }
    }

    getLocation() {
        this.setState({ class: "map" })
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
        } else {
            this.center = { lng: -98.5795, lat: 39.8283 }
            this.zoom = 4
            this.loadMap();
        }
    }

    showPosition(position) {
        this.center = { lat: position.coords.latitude, lng: position.coords.longitude };
        this.zoom = 16;
        this.loadMap();
    }

    loadMap(){
        // return null;
        const mapOptions = {
            center: this.center,
            zoom: this.zoom
        };
        this.map = new google.maps.Map(document.getElementById("map-container"), mapOptions);

        google.maps.event.addListener(this.map, 'click', (event) => {
            const pos = getPosObj(event.latLng);
            this.handleClick(pos);
        });

    }

    codeAddress(e) {
        e.preventDefault();
        const address = document.getElementById('searchVal').value;
        if (address.length < 1) {
            return null;
        }

        let data = {
            bounds: {
                west: this.center['lng'] - .2,
                east: this.center['lng'] + .2,
                south: this.center['lat'] - .2,
                north: this.center['lat'] + .2
            }
        };
        let bounds = new google.maps.LatLngBounds(
            new google.maps.LatLng(data.bounds.south, data.bounds.west),
            new google.maps.LatLng(data.bounds.north, data.bounds.east));
        this.geocoder.geocode({ 'address': address, 'bounds': bounds }, this.callback);
    }

    callback(results, status){
        if (status == 'OK') {
            this.center = { "lat": results[0].geometry.location.lat(), "lng": results[0].geometry.location.lng() };
            this.zoom = 17;
            const mapOptions = {
                center: this.center,
                zoom: this.zoom
            };
            let myLatLng = new google.maps.LatLng({ lat: this.center['lat'], lng: this.center['lng'] });
            this.map.panTo(myLatLng);
            // this.map = new google.maps.Map(document.getElementById("map-container"), mapOptions);
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    }



    update(field) {
        return e =>
            this.setState({
                [field]: e.currentTarget.value
            });
    }

    handleSubmit(e) {
        e.preventDefault();
        const rodents = {rodents: this.coordsArray}
        const tour = Object.assign({}, this.state, rodents);
        if (this.state.name.length < 1){
            let error = document.getElementById("tour-name-error");
            error.className = "error show"
        }
        if (this.markersArray.length > 1 && this.state.name.length > 0){
            this.props.createTour(tour);
            this.props.history.push('/tours');
        }
    }

    handleClick(coords) {
        coords["species"] = this.currentRodent.toLowerCase();
        this.coordsArray.push(coords);
        let image = {
            url: this.selectedIconImage,
            anchor: new google.maps.Point(16, 26),
            scaledSize: new google.maps.Size(40, 40)
        };
        this.startMarker = new google.maps.Marker({ position: coords, map: this.map, icon: image, animation: google.maps.Animation.DROP });
        this.markersArray.push(this.startMarker);
        this.startMarker.setMap(this.map);
        if (this.dancing) {
            this.startMarker.setAnimation(google.maps.Animation.BOUNCE)
        }
        if (this.markersArray.length > 1) {
            this.getDistance();
            this.calculateAndDisplayRoute();
        }  
    }

    handleRodent(e) {
        e.preventDefault();
        this.selectedIconElement.className = 'rodentIcons';
        this.selectedIconElement = e.currentTarget;
        e.currentTarget.className = 'rodentIcons selectedIcon';
        let val = e.currentTarget.attributes.value.value;
        this.setState({ currentRodent: val.toUpperCase() })
        this.currentRodent = val;
        if (val === "rat") {
            this.selectedIconImage = window.ratMarkerURL;
        } else if (val === "rabbit") {
            this.selectedIconImage = window.rabbitMarkerURL;
        } else if (val === "mouse") {
            this.selectedIconImage = window.mouseMarkerURL;
        } else if (val === "squirrel") {
            this.selectedIconImage = window.squirrelMarkerURL;
        } else if (val === "raccoon") {
            this.selectedIconImage = window.raccoonMarkerURL;
        } else if (val === "other") {
            this.selectedIconImage = window.otherMarkerURL;
        }

    }

    calculateAndDisplayRoute() {

        const wayPoints = this.coordsArray.slice(1, this.coordsArray.length - 1).map(locale => ({
            location: locale
        }));
        const newOrigin = { lat: this.coordsArray[0]["lat"], lng: this.coordsArray[0]["lng"]};
        const newDest = { lat: this.coordsArray[this.coordsArray.length - 1]["lat"], lng: this.coordsArray[this.coordsArray.length - 1]["lng"] };
        const directionsRequestParams = {
            origin: newOrigin,
            destination: newDest,
            waypoints: wayPoints,
            travelMode: 'WALKING',
            unitSystem: google.maps.UnitSystem.IMPERIAL
        }
 
        var directionsService = new google.maps.DirectionsService();
        // var directionsRenderer = new google.maps.DirectionsRenderer({suppressMarkers: true});
        this.directionsDisplay.setMap(this.map);
        this.directionsRendererTemp = this.directionsDisplay;
        directionsService.route(directionsRequestParams, this.placeMarkerRoute);
    }


    placeMarkerRoute(result, status){
        if (status == 'OK') {
            this.directionsRendererTemp.setDirections(result);
        }
    }

    toolUndo(e){
        e.preventDefault();
        if (this.coordsArray.length < 1){
            return null;
        }
        this.coordsArray.pop();
        let badMarker = this.markersArray.pop();
        badMarker.setMap(null);
        this.directionsDisplay.setMap(null);
        this.calculateAndDisplayRoute();

        this.distanceArray.pop();
        let fullDist = this.distanceArray.reduce((a, b) => a + b, 0);
        fullDist = fullDist * 0.62137;
        fullDist = (Math.round(fullDist * 10) / 10).toFixed(1)
        if (fullDist < .5){
            fullDist = 0;
        }
        this.setState({ distance: fullDist })

    }

    toolClear(e){
        e.preventDefault();
        this.coordsArray = [];
        for (let i = 0; i < this.markersArray.length; i++) {
            const badMarker = this.markersArray[i];
            badMarker.setMap(null);
        }
        this.markersArray = [];
        this.directionsDisplay.setMap(null);
        this.directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true, preserveViewport: true });
        this.distanceArray = [];
        this.setState({ distance: 0 })

    }

    toolReturn(e){
        e.preventDefault();
        if (this.markersArray.length < 2) {
            return null;
        }  
        let firstCoord = this.coordsArray[0];
        firstCoord["species"] = (this.currentRodent.toLowerCase());
        this.coordsArray.push(firstCoord);
        let image = {
            url: this.selectedIconImage,
            anchor: new google.maps.Point(16, 26),
            scaledSize: new google.maps.Size(40, 40)
        };
        this.startMarker = new google.maps.Marker({ position: firstCoord, map: this.map, icon: image });

        this.markersArray.push(this.startMarker);
        this.startMarker.setMap(this.map);
        if (this.dancing) {
            this.startMarker.setAnimation(google.maps.Animation.BOUNCE)
        }
        this.calculateAndDisplayRoute();
        this.getDistance();
    }

    toolDance(e){
        e.preventDefault();
        if (this.dancing) {
            this.dancing = false;

            for (let i = 0; i < this.markersArray.length; i++) {
                const marker = this.markersArray[i];
                marker.setAnimation(null)
            }

            document.getElementById("mapToolsId").className ="mapTools"
            document.getElementById("map-container").className = "map"
            document.getElementById("cool-possum").className = ""


        } else {

            document.getElementById("mapToolsId").className = "mapTools danceTools"
            document.getElementById("map-container").className = "map dance"
            document.getElementById("cool-possum").className = "show"

            this.dancing = true;
            for (let i = 0; i < this.markersArray.length; i++) {
                const marker = this.markersArray[i];
                marker.setAnimation(google.maps.Animation.BOUNCE)
            }
        }
    }

    getDistance(){
        let last = this.coordsArray[this.coordsArray.length-1];
        let secondLast = this.coordsArray[this.coordsArray.length - 2];
        var origin = new google.maps.LatLng(secondLast["lat"], secondLast["lng"]);
        var destination = new google.maps.LatLng(last["lat"], last["lng"]);

        var service = new google.maps.DistanceMatrixService();
        service.getDistanceMatrix(
            {
                origins: [origin],
                destinations: [destination],
                travelMode: 'WALKING'
            }, this.distanceReturn);

    }

    distanceReturn(response, status) {
        if (status == 'OK') {
            let dist = response.rows[0].elements[0].distance.text;
            dist = dist = dist.replace(/\,/g, '');
            dist = parseFloat(dist);
            this.distanceArray.push(dist)
            let fullDist = this.distanceArray.reduce((a, b) => a + b, 0);
            fullDist = fullDist * 0.62137;
            fullDist = (Math.round(fullDist * 10) / 10).toFixed(1)
            this.setState({ distance: fullDist })
        }
    }

    render() {
        
        return (
            <>
            <div id="create-container">
                <div id="create-sidebar">
                    <div className="map-location">
                        <h4>Choose Map Location</h4>
                            <div>
                            <form onSubmit={this.codeAddress}>
                                <input type="text" placeholder="Select location" id="searchVal"/>
                                    <input id="selectLocationButton" className="buttonClick" type="submit" value="SEARCH" />
                                </form>
                            </div>
                    </div>
                    
                    <hr/>

                    <form onSubmit={this.handleSubmit}>
                        <h4>Route Details</h4>
                        <ul id="route-input">
                            <li><input type="text" placeholder="Tour Name" value={this.state.name} onChange={this.update("name")}/> <span>*</span> </li>
                            <li id="tour-name-error" className="error hidden">A tour name is required</li>
                            <li><textarea rows="5" cols="33" placeholder="Description" value={this.state.description} onChange={this.update("description")}/></li>
                            <li><input id="saveTourButton" className="buttonClick" type="submit" value="SAVE TOUR" /></li>
                        </ul>
                    </form>
                </div>
                    <div id='map-container' className={this.state.class}>
                        <div id="loadScreen">
                            <img src={window.ratMarkerURL} alt="Sourced from Flaticon.com" alt=""/>
                            <br/>
                            <h3>LOADING</h3>
                        </div>
                    </div>
                    <div id="mapToolsId" className="mapTools">
                        <div id="distance-div">
                            <h2>DISTANCE</h2>
                            <h3>{this.state.distance} MI</h3> 
                        </div>
                        <ul className="toolButtonHolder">
                            <li><button onClick={this.toolUndo}><img src={window.undoURL} alt="Sourced from Flaticon.com" />UNDO</button></li>
                            <li><button onClick={this.toolClear}><img src={window.clearURL} alt="Sourced from Flaticon.com" />CLEAR</button></li>
                            <li><button onClick={this.toolReturn}><img src={window.returnURL} alt="Sourced from Flaticon.com" />RETURN</button></li>
                            <li><button onClick={this.toolDance}><img src={window.danceURL} alt="Sourced from Flaticon.com" />DANCE</button></li>
                        </ul>

                        <h3>SELECT RODENT</h3>
                        <h5>{this.state.currentRodent}</h5>
                        <ul>
                            <li><img id="selectedIcon" className="rodentIcons selectedIcon" value="rat" src={window.ratMarkerURL} alt="Sourced from Flaticon.com" onClick={this.handleRodent}/></li>
                            <li><img className="rodentIcons" value="rabbit" src={window.rabbitMarkerURL} alt="Sourced from Flaticon.com" onClick={this.handleRodent}/></li>
                            <li><img className="rodentIcons" value="squirrel" src={window.squirrelMarkerURL} alt="Sourced from Flaticon.com" onClick={this.handleRodent}/></li>
                            <li><img className="rodentIcons" value="mouse" src={window.mouseMarkerURL} alt="Sourced from Flaticon.com" onClick={this.handleRodent}/></li>
                            <li><img className="rodentIcons" value="raccoon" src={window.raccoonMarkerURL} alt="Sourced from Flaticon.com" onClick={this.handleRodent}/></li>
                            <li><img className="rodentIcons" value="other" src={window.otherMarkerURL} alt="Sourced from Flaticon.com" onClick={this.handleRodent}/></li>
                        </ul>
                    </div>
                
            </div>
                <marquee id="cool-possum" behavior="" direction=""><img src={window.coolPossumURL} alt="" /></marquee>
            </>
        );
    }
}

export default TourMap;
