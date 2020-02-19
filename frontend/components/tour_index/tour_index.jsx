import React from "react"
import TourIndexItem from "./tour_index_item"

class TourIndex extends React.Component {
    componentDidMount() {
        return this.props.fetchTours();
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

    render() {
        return (
            <>
                <ul className="tours-container">
                    <li>{this.getCurrentDate()}</li>
                    {
                        this.props.tours.map(tour => (<TourIndexItem tour={tour} users={this.props.users} key={tour.id} />))
                    }
                </ul>
            </>
        )
    }
}

export default TourIndex;