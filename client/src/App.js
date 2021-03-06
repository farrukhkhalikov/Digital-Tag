import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import './App.css';
import Home from './components/Home'
import NewFlight from './components/NewFlight'
import User from './components/User'
import Flight from './components/Flight'
import FlightList from './components/FlightList'
import NavBar from './components/NavBar'
import Bag from './components/Bag'
class App extends Component {

  state = {
    users: [],
    flights: [],
    userID: []
  }

  componentDidMount() {
    // this.userDatabase()
    this.flightDatabase()
  }

  userDatabase = () => {
    axios
      .get('/api/users')
      .then(response => {
        const users = response.data
        this.setState({ users: users })
      })
  }


  flightDatabase = () => {
    axios
      .get('/api/flights')
      .then(response => {
        const flights = response.data
        this.setState({ flights: flights })
      })
  }


  // //To edit a user




  createFlight = async (Flight) => {
    console.log(Flight)
    const response = await axios.post(`/api/Flights`, Flight)

    const newFlight = response.data

    const Flights = [...this.state.Flights]
    Flights.push(newFlight)
    this.setState({ Flights })
  }

  render() {


    // const DataOfFlights = () => (<FlightList MyFlights={this.state.Flights} />)

    const AllFlights = () => (<FlightList MyFlights={this.state.Flights} userID={this.state.userID} />)

    const makeNewFlight = () => (<NewFlight createFlight={this.createFlight} Flights={this.state.Flights} />)
    const allFlights = () => (<Home flights={this.state.flights} />)
    const flightId = (props) => (<Flight flights={this.state.flights} {...props} flightDatabase={this.flightDatabase} />)


    return (
      <Router>
        <div>
          <NavBar />

          <Switch>

            <Route exact path="/" render={allFlights} />
            <Route exact path="/flight/:flightId" render={flightId} />
            <Route exact path="/new" render={makeNewFlight} />
            <Route exact path="/flight/:flightId/user/:userId/bag" component={Bag} />

          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;

