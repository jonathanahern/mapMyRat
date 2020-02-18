/* global google:false */

class MarkerManager {
    constructor(map, handleClick) {
        this.map = map;
        // this.handleClick = handleClick;
        this.markers = {};
    }

    updateMarkers(rodents) {
        console.log("time to update");
        // const rodentsObj = {};
        // rodents.forEach(rodent => rodentsObj[rodent.id] = rodent);

        // rodents
        //     .filter(rodent => !this.markers[rodent.id])
        //     .forEach(newRodent => this.createMarkerFromRodent(newRodent, this.handleClick))

        // Object.keys(this.markers)
        //     .filter(rodentId => !rodentsObj[rodentId])
        //     .forEach((rodentId) => this.removeMarker(this.markers[rodentId]))
    }

    createMarkerFromRodent(rodent) {
        // const position = new google.maps.LatLng(rodent.lat, rodent.lng);
        // const marker = new google.maps.Marker({
        //     position,
        //     map: this.map,
        //     rodentId: rodent.id
        // });

        // marker.addListener('click', () => this.handleClick(rodent));
        // this.markers[marker.rodentId] = marker;
    }

    removeMarker(marker) {
        // this.markers[marker.rodentId].setMap(null);
        // delete this.markers[marker.rodentId];
    }
}

export default MarkerManager;
