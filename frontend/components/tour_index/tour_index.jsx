import React from "react"
import TourIndexItem from "./tour_index_item"
import Footer from "../footer"

class TourIndex extends React.Component {
    
    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchTours();
    }

    getCurrentDate(separator = '') {
        let dayArr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        let monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        let newDate = new Date();
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        let day = newDate.getDay();

        return `${dayArr[day - 1].toUpperCase()}, ${monthArr[month - 1].toUpperCase()} ${date}, ${year}`
    }

    render(){
        let tourArr;
        if (this.props.tours.length > 0 && Object.values(this.props.users).length > 1) {
            tourArr = this.props.tours.map( (tour,index) => (<TourIndexItem tour={tour} count={index} users={this.props.users} key={tour.id} />))
        } else {
            tourArr = [];
        }
        return (
            <>
                <ul className="tours-container">
                    <li>{this.getCurrentDate()}</li>
                    {
                        tourArr
                    }
                </ul>
                <Footer />
            </>
        )
    }
}

export default TourIndex;