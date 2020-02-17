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
            description: ""
        };

        this.markersArray = [];
        this.startMarker = null
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // set the map to show NYC
        const mapOptions = {
            center: { lat: 40.674, lng: -73.978 }, // this is Park slope
            zoom: 14
        };

        this.map = new google.maps.Map(document.getElementById("map-container"), mapOptions);

        google.maps.event.addListener(this.map, 'click', (event) => {
            const pos = getPosObj(event.latLng);
            this.handleClick(pos);
        });
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
        // mapStats["rodentCoords"]=this.markersArray;
        if (this.markersArray.length > 1){
            this.props.createTour(tour);
        }
    }

    handleClick(coords) {
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
                    <form onSubmit={this.handleSubmit}>
                        <h4>Create a Tour</h4>
                        <ul>
                            <li><input type="text" placeholder="Tour Name" value={this.state.name} onChange={this.update("name")}/></li>
                            <li><input type="text" placeholder="Description" value={this.state.description} onChange={this.update("description")}/></li>
                            <li><input id="saveTourButton" type="submit" value="SAVE TOUR" /></li>
                        </ul>
                    </form>
                </div>
                <div id='map-container'>
                </div>

            </div>
        );
    }
}

export default TourMap;
