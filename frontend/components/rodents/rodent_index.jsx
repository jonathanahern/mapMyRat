import React from "react"
import RodentIndexItem from "./rodent_index_item"

class RodentIndex extends React.Component {
    componentDidMount() {
        return this.props.fetchRodents();
    }

    render() {
        
        return (
            <>
                <ul>
                    {
                        this.props.rodents.map(rodent => (<RodentIndexItem rodent={rodent} key={rodent.id} />))
                    }
                </ul>
            </>
        )
    }

}

export default RodentIndex;