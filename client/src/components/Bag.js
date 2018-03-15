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
                <Name>{this.props.bag[0].color}</Name>
                <Name>{this.props.bag[0].weight}</Name>
                <Name>{this.props.bag[0].tagNumber}</Name>
                <Name>{this.props.bag[0].destination}</Name>
            </div>
        );
    }
}

export default Bag;

const Name = styled.div`
 height:15px;
 width:25px;
 background-color:green;
 cursor:pointer;
 &:hover{
background-color:gold;
 }
 `