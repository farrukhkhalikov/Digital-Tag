import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios'




class Bag extends Component {
   
    

// viewLuggage = () => {
//     const bagId = this.props.match.params.userId
//     this.setState({ redirect: true })
//     axios.get(`/flight/:flightId/user/:userId/bag`).then(res => {

//     }).catch(err => {
//         console.log(err)
//     }).then(() => {
//         // this.props.flightDatabase()
//     })
// }

    render() {
   
        return (
            <div>
                <Name>Color: {this.props.bag[0].color}</Name>
                <Name>Weight: {this.props.bag[0].weight}</Name>
                <Name>Tag ID: {this.props.bag[0].tagNumber}</Name>
                <Name>Destination: {this.props.bag[0].destination}</Name>
            </div>
        );
    }
}

export default Bag;

const Name = styled.div`
 padding: 10px;
 cursor:pointer;
 &:hover{
background-color:gold;
 }
 `