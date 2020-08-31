import React from 'react'

const ServicesCard = (props) => (
    <React.Fragment>
        <h1>${props.service.price}/mo.</h1>
        <h2>{props.service.name}</h2>
        <p>{props.service.description}</p>
    </React.Fragment>
)

export default ServicesCard