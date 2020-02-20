import React from 'react';

const TourIndexItem = props => {
   
    return (
        <>
            <li className="tour-index-container">
                <img src={props.users[props.tour.user_id].img_url} id="profile-pic" alt=""/>
                <div id="tour-intro-container">
                    <h3><span>{props.users[props.tour.user_id].first_name} {props.users[props.tour.user_id].last_name}</span> created the tour <span>{props.tour.name}</span></h3>
                    <p>{props.tour.description}</p>
                </div>
                <div id="tour-details-container">
                    <div id="rodent-count">
                        <section>
                            <h4>Rodents</h4>
                            <p className="rodent-stats">{props.tour.rodents.length}</p>
                            <div id="rodent-holder">
                                {
                                    props.tour.rodents.map( (rodent,i) => {
                                        if (i > 9){
                                            return null;
                                        } else if (rodent["species"] === "rat") {
                                            return <img className="rodentPic" key={"rat" + i.toString()} src={window.ratMarkerURL} alt="Sourced from Flaticon.com" />
                                        } else if (rodent["species"] === "mouse") {
                                            return <img className="rodentPic" key={"mouse" + i.toString()} src={window.mouseMarkerURL} alt="Sourced from Flaticon.com" />
                                        } else if (rodent["species"] === "other") {
                                            return <img className="rodentPic" key={"other" + i.toString()} src={window.otherMarkerURL} alt="Sourced from Flaticon.com" />
                                        } else if (rodent["species"] === "rabbit") {
                                            return <img className="rodentPic" key={"rabbit" + i.toString()} src={window.rabbitMarkerURL} alt="Sourced from Flaticon.com" />
                                        } else if (rodent["species"] === "squirrel") {
                                            return <img className="rodentPic" key={"squirrel" + i.toString()} src={window.squirrelMarkerURL} alt="Sourced from Flaticon.com" />
                                        } else if (rodent["species"] === "raccoon") {
                                            return <img className="rodentPic" key={"raccoon" + i.toString()} src={window.raccoonMarkerURL} alt="Sourced from Flaticon.com" />
                                        }
                                    })
                                }
                            </div>
                        </section>
                    </div>
                    <div id="distance">
                        <section>
                            <h4>Distance</h4>
                            <p className="distance-stats">{props.tour.distance}<span> mi</span></p>
                        </section>
                    </div>
                    <div id="map-image">
                         <img id="map-image-file" src={props.tour.map_img_url} alt="" />
                    </div>
                </div>
            </li>
        </>
    );
}

export default TourIndexItem;