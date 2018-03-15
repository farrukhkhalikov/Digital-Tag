import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom'
import axios from 'axios'
import Bag from './Bag';



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
                    <Name>{this.state.flight.number}</Name>
                    <Name>{this.state.flight.destination}</Name>
                    <Name>{this.state.flight.arrival}</Name>
                    <Name>{this.state.flight.departure}</Name>

                    {/* {this.state.flight.users.first_name} */}
                    {/* {console.log(this.state.flight.users)} */}
                   {this.state.flight.users.first_name}

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
