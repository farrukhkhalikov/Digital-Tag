import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import './App.css';
import Home from './components/Home'
import UserList from './components/UserList'
import NewUser from './components/NewUser'
import NewFlight from './components/NewFlight'
import User from './components/User'
import UserEditDelete from './components/UserEditDelete'
import Flight from './components/Flight'
import FlightList from './components/FlightList'
import NavBar from './components/NavBar'
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
        this.setState({ flights: flights})
      })
  }

  createUser = async (newUser) => {
    // send the user to the database
    const response = await axios.post(`/api/users`, {user : newUser})

    // grab the new user we just created in the database
    //const newUser = response.data

    // put that new user into our list of users on the `state`
    const users = [...this.state.users]
    users.push(newUser)
    this.setState({ users: response.data.user })
  }
  // //To edit a user

  updateUser = async (user) => {
    console.log(user._id)
    const response = await axios.patch(`/api/users/${user._id}`, user)
    const users = this.UserDatabase
  }



  deleteUser = async (user) => {
    console.log(`from the delete router`)
    await axios.delete(`/api/users/${user._id}/delete`)
  }



  createFlight = async (Flight) => {
    // send the user to the database
    const response = await axios.post(`/api/Flights`, Flight)

    // grab the new user we just created in the database
    const newFlight = response.data

    // put that new user into our list of users on the `state`
    const Flights = [...this.state.Flights]
    Flights.push(newFlight)
    this.setState({ Flights })
  }

  render() {
    ////the function to grab all the users
    const DataOfUsers = () => (<UserList MyUsers={this.state.users} />)

    const makeNewUser = () => (<NewUser createUser={this.createUser} users={this.state.users} />)
    const editUser = (props) => (<UserEditDelete updateUser={this.updateUser} UserDataBase={this.userDatabase}  deleteUser={this.deleteUser} users={this.state.users} {...props} />)

    // const DataOfFlights = () => (<FlightList MyFlights={this.state.Flights} />)

    const AllFlights = () => (<FlightList MyFlights={this.state.Flights} userID={this.state.userID} />)

    const makeNewFlight = () => (<NewFlight createFlight={this.createFlight} Flights={this.state.Flights} />)
    const allFlights = () => (<Home flights={this.state.flights}/>)
    const flightId = (props) => (<Flight flights={this.state.flights} {...props} flightDatabase = {this.flightDatabase}/>) 


    return (
      <Router>
        <div>
                <NavBar />

        <Switch>

          <Route exact path="/" render={allFlights} />
          <Route exact path="/flight/:flightId" render={flightId} />
          <Route exact path="/new" render={makeNewFlight} /> 
          {/* <Route exact path="/user" component={User} /> */}
          {/* <Route exact path="/flight/:flightId" component={flightId} /> */}
          {/* <Route exact path="/user/:userId/Flights" component={AllFlights} />
          <Route exact path="/user/:userId/Flight/:FlightId" component={Flight} />
          <Route exact path="/user/:userId/new-Flight" component={makeNewFlight} />
          <Route exact path="*" render={() => (<h4>Page not found!</h4>)} /> */}
        </Switch>
        </div>
      </Router>
    )
  }
}

export default App;

