import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom'
import axios from 'axios'
import Bag from './Bag';

const UserWrapper = styled.div`

font-size:15px;
text-align:center;

`


const Name = styled.div`
text-align: center;
 padding: 15px;
 cursor:pointer;
 &:hover{
background-color:gold;
 }
 `


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
    state = {
        BagView: false,
        flight: {
            users:{
                bags:[]
            }
        },
        redirect: false
    }

    deleteFlight = () => {
        const flightId = this.props.match.params.flightId
        this.setState({ redirect: true })
        axios.delete(`/api/flights/${flightId}`).then(res => {

        }).catch(err => {
            console.log(err)
        }).then(() => {
            this.props.flightDatabase()
        })
    }


    componentDidMount() {
        const flightId = this.props.match.params.flightId
        axios.get(`/api/flights/${flightId}`).then(res => {
            const flight = res.data
            this.setState({ flight: flight })
        }).catch(err => {
            console.log(err)
        })

    }
   
    toggleBagView = () => {
        this.setState({ BagView: !this.state.BagView })
      }

    render() {
        if (this.state.redirect === true) {
            return <Redirect to="/" />
        }
        return (
            <UserWrapper>
                <div className="picWrapper">
                    <Name>Flight #: {this.state.flight.number}</Name>
                    <Name>Destination: {this.state.flight.destination}</Name>
                    <Name>Arrival Time: {this.state.flight.arrival}</Name>
                    <Name>Departure Time: {this.state.flight.departure}</Name>

                    {/* {this.state.flight.users.first_name} */}
                    {/* {console.log(this.state.flight.users)} */}
                   <Name>Passenger: {this.state.flight.users.first_name}</Name>

                </div>

                <div>
                    <button onClick={this.deleteFlight}>Delete</button>
                </div>
                <div>
                <button onClick={this.toggleBagView}>View Luggage</button>
                    {this.state.BagView 
                    ? <Bag bag={this.state.flight.users.bags} />
                   : null
                    }
                </div>
                
            </UserWrapper>
        )
    }
}

export default Flight

// {this.state.flight.users

//     ? (this.state.flight.users.map((user, i) => {
//         //  console.log('user bag', user.bags)
//         return (

//             <div key={i}>
//                 <Name>{user.first_name}</Name>
//                 <Name>{user.last_name}</Name>
//                 <Name>{user.email}</Name>
//                 <Name>{user.flight}</Name>
//                 {/* {user.bags

//                     // ? (user.bags.map((bag, i) => {
//                     //     //  console.log('user bag', user.bags)
//                     //     return (

//                     //         <Bag key={i} bag={bag}/>
//                     //     )
//                     // }))
//                     // : null} */}





//             </div>
//         )
//     }))
//     : null}



