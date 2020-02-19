import React from "react"
import TourIndexItem from "./tour_index_item"

class TourIndex extends React.Component {
    componentDidMount() {
        // return this.props.fetchTours();
    }

    render() {
        
        return (
            <>
            <h1>TOURS</h1>
                {/* <ul>
                    {
                        this.props.rodents.map(rodent => (<RodentIndexItem rodent={rodent} key={rodent.id} />))
                    }
                </ul> */}
            </>
        )
    }
}

export default TourIndex;