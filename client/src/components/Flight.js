import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import axios from 'axios'



const Edit = styled.button`
width: 58px;
height: 33px;
background-color:gold;
`

const Delete = styled.button`
background-color: red;
width: 58px;
height: 33px;
`
class Flight extends Component {
    state= {
        flight: {}
    }
    componentDidMount() {
        const flightId = this.props.match.params.flightId
        axios.get(`/api/flights/${flightId}`).then(res => {
            const flight = res.data
            this.setState({flight: flight})
        }).catch(err => {
            console.log(err)
        })
        
        }

    render() {
        return (
            <UserWrapper>
                <div className="picWrapper">
                    <Name>{this.state.flight.number}</Name>
                    <Name>{this.state.flight.destination}</Name>
                    <Name>{this.state.flight.arrival}</Name>
                    <Name>{this.state.flight.departure}</Name>
                    {/* {console.log(this.state.flight.users)} */}
                    { this.state.flight.users

                     ?(this.state.flight.users.map((user, i) => {
                            return (
                                
                                <div key={i}>
                                    <Name>{user.first_name}</Name> 



                     </div>   
                     )})) 
                      : null} 
                </div>
                            
            </UserWrapper>
        )
    }
}

export default Flight


const UserWrapper = styled.div`
display:flex;
flex-direction:row;
font-size:15px;
align-items:center;
img {
  height:200px;
  width:190px;
  border:solid 1px black;
}
`
const InfoWrapper = styled.div`
border:solid 1px black;
height:200px;
`
const LinkWrapper = styled.div`
 display:flex;
 align-items:center;
 justify-content:center;
 flex-direction: row;
 margins: 2px 0 0 2px;
 
  a {
  margin: 2px 3px 4px 5px;
}
 `

const Name = styled.div`
 height:15px;
 width:25px;
 background-color:green;
 cursor:pointer;
 &:hover{
background-color:gold;
 }
 `
