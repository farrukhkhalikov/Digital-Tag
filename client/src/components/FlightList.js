import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Flights from './Flights'




class FlightList extends Component {

    render() {
        const FlightList = this.props.MyFlights.map((Flight, index) => {
            return (
                <Flights
                    key={index}
                    FlightName={Flight.FlightName}
                    id={Flight._id} />)

        })

        return (
            <FlightContainer >
                <div className="NavButtons">
                    <Link to="/">Home</Link>
                    <Link to="./new-Flight">Create Flight</Link>
                    <h1>Flights List</h1>
                </div>
                <div>
                    <div>{FlightList}</div>
                </div>
            </FlightContainer>
        )
    }
}
export default FlightList

const FormContainer = styled.div`


`

const FlightContainer = styled.div`
display:flex;
flex-direction:column;
flex-wrap:wrap;
justify-content:center;
height: 100vh;
background: rgb(105, 155, 200);
    background: -moz - radial - gradient(top left, ellipse cover, rgba(105, 155, 200, 1) 0 %, rgba(181, 197, 216, 1) 57 %);
    background: -webkit - gradient(radial, top left, 0px, top left, 100 %, color - stop(0 %, rgba(105, 155, 200, 1)), color - stop(57 %, rgba(181, 197, 216, 1)));
    background: -webkit - radial - gradient(top left, ellipse cover, rgba(105, 155, 200, 1) 0 %, rgba(181, 197, 216, 1) 57 %);
    background: -o - radial - gradient(top left, ellipse cover, rgba(105, 155, 200, 1) 0 %, rgba(181, 197, 216, 1) 57 %);
    background: -ms - radial - gradient(top left, ellipse cover, rgba(105, 155, 200, 1) 0 %, rgba(181, 197, 216, 1) 57 %);
    background: radial - gradient(ellipse at top left, rgba(105, 155, 200, 1) 0 %, rgba(181, 197, 216, 1) 57 %);
    filter: progid: DXImageTransform.Microsoft.gradient(startColorstr = '#699bc8', endColorstr = '#b5c5d8', GradientType = 1);
h1 {
    font-family: 'Special Elite', cursive, bold;
    padding-top: 50px;
    color:Black bold;
    font-size: 50px;
    display:flex;
    justify-content: center;
}  
.NavButtons {
display:block;
  a{
    font-family: 'Lato', sans-serif;
    font-family: 'Playfair Display', serif;
    font-weight: 300;
  text-decoration: none;
    color: black;
    font-size: 20px;
    padding: 30px;
    z-index: auto;
    &:hover {
    text-shadow: none;
    text-shadow:2px 2px 2px silver;
  
}}
`