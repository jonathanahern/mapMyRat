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
            class: "loading"
        };

        this.markersArray = [];
        this.startMarker = null;
        this.map = null;
        this.geocoder = new google.maps.Geocoder();

        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getLocation = this.getLocation.bind(this);
        this.showPosition = this.showPosition.bind(this);
        this.loadMap = this.loadMap.bind(this);
        this.codeAddress = this.codeAddress.bind(this);
        this.geocoder.geocode = this.geocoder.geocode.bind(this);
        this.callback = this.callback.bind(this);
        
    }

    componentDidMount() {
        this.getLocation();
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
                west: this.center['lng'] - .5,
                east: this.center['lng'] + .5,
                south: this.center['lat'] - .5,
                north: this.center['lat'] + .5
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
            debugger
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
        const tour = Object.assign({}, this.state);
        if (this.markersArray.length > 1){
            this.props.createTour(tour);
        }
    }

    handleClick(coords) {
        console.log(coords)
        this.markersArray.push(coords);
         if (this.markersArray.length > 1){
             if (this.startMarker !== null){
                 this.startMarker.setMap(null);
            }
            this.calculateAndDisplayRoute();
         } else {
            this.startMarker = new google.maps.Marker({ position: coords, map: this.map });
            this.startMarker.setMap(this.map);
         };
    }

    calculateAndDisplayRoute() {
        const wayPoints = this.markersArray.slice(1, this.markersArray.length - 1).map(locale => ({
            location: locale
        }));

        const directionsRequestParams = {
            origin: this.markersArray[0],
            destination: this.markersArray[this.markersArray.length-1],
            waypoints: wayPoints,
            travelMode: 'WALKING',
            unitSystem: google.maps.UnitSystem.IMPERIAL
        }
 
        var directionsService = new google.maps.DirectionsService();
        var directionsRenderer = new google.maps.DirectionsRenderer();

        directionsRenderer.setMap(this.map);
        directionsService.route(directionsRequestParams, function (result, status) {
            if (status == 'OK') {
                directionsRenderer.setDirections(result);
            }
        });
    }

    render() {
        
        return (
            <div id="create-container">
                <div id="create-sidebar">
                    <div className="map-location">
                        <h4>Choose Map Location</h4>
                            <div>
                            <form onSubmit={this.codeAddress}>
                                <input type="text" placeholder="Select location" id="searchVal"/>
                                    <input id="selectLocationButton" type="submit" value="SEARCH" />
                                </form>
                            </div>
                    </div>
                    
                    <hr/>

                    <form onSubmit={this.handleSubmit}>
                        <h4>Route Details</h4>
                        <ul id="route-input">
                            <li><input type="text" placeholder="Tour Name" value={this.state.name} onChange={this.update("name")}/> <span>*</span> </li>
                            <li><textarea rows="5" cols="33" placeholder="Description" value={this.state.description} onChange={this.update("description")}/></li>
                            <li><input id="saveTourButton" type="submit" value="SAVE TOUR" /></li>
                        </ul>
                    </form>
                </div>
                <div id='map-container' className={this.state.class}>
                </div>

            </div>
        );
    }
}

export default TourMap;
