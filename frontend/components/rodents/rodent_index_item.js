import React from 'react';

const RodentIndexItem = props => {
    return (
    <li>ID: {props.rodent.id} Species: {props.rodent.species}</li>
    );
}

export default RodentIndexItem;