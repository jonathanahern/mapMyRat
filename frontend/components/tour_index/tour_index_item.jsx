import React from 'react';

const TourIndexItem = props => {

    return (
    <li className="tour-index-container">
        <img src={props.users[props.tour.user_id].img_url} id="profile-pic" alt=""/>
        <div id="tour-intro-container">
                <h3><span>{props.users[props.tour.user_id].first_name} {props.users[props.tour.user_id].last_name}</span> created the tour <span>{props.tour.name}</span></h3>
            <p>{props.tour.description}</p>
        </div>
        <div id="tour-details-container">
            <div id="rodent-count"><span>Rodent Count</span></div>
            <div id="distance"><span>Distance</span></div>
            <div id="map-image"><span>Map Image</span></div>
        </div>
    </li>
    
    );
}

export default TourIndexItem;