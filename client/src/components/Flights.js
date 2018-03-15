import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



class Flights extends Component {
    render() {
        return (
            <div>
                <div className="UserContainer">
                    <div className="firstNameContainer">
                        <div>{this.props.FlightDestination}</div>
                        <Link to={`./Flight/${this.props.id}`}>Update</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Flights
