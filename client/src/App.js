import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import './App.css';
import Home from './components/Home'
import User from './components/User'
import BagList from './components/BagList'
import NewUser from './components/NewUser'
import NewBag from './components/NewBag'
import UserEditDelete from './components/UserEditDelete'


class App extends Component {

  state = {
    users: [],
    userID: []
  }

  userDatabase = () => {
    axios
      .get('/api/users')
      .then(response => {
        const users = response.data
        this.setState({ users: users })
      })
  }

  bagDatabase = () => {
    axios
      .get('/api/bags')
      .then(response => {
        const bags = response.data
        this.setState({ bags: bags})
      })
  }

  createUser = async (user) => {
    // send the user to the database
    const response = await axios.post(`/api/users`, user)

    // grab the new user we just created in the database
    const newUser = response.data

    // put that new user into our list of users on the `state`
    const users = [...this.state.users]
    users.push(newUser)
    this.setState({ users })
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

  componentWillMount() {
    this.userDatabase()
    this.bagDatabase()
  }

  createBag = async (bag) => {
    // send the user to the database
    const response = await axios.post(`/api/bags`, bag)

    // grab the new user we just created in the database
    const newBag = response.data

    // put that new user into our list of users on the `state`
    const bags = [...this.state.bags]
    bags.push(newBag)
    this.setState({ bags })
  }

  render() {
    ////the function to grab all the users
    const DataOfUsers = () => (<User MyUsers={this.state.users} />)

    const makeNewUser = () => (<NewUser createUser={this.createUser} users={this.state.users} />)
    const editUser = (props) => (<UserEditDelete updateUser={this.updateUser} UserDataBase={this.userDatabase}  deleteUser={this.deleteUser} users={this.state.users} {...props} />)

    // const DataOfGifts = () => (<GiftList MyGifts={this.state.gifts} />)

    const AllBags = () => (<BagList MyBags={this.state.bags} userID={this.state.userID} />)

    const makeNewBag = () => (<NewBag createBag={this.createBag} bags={this.state.bags} />)



    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={DataOfUsers} />
          <Route exact path="/new" component={makeNewUser} />
          <Route exact path="/user" component={User} />
          <Route exact path="/user/:userId" component={editUser} />
          <Route exact path="*" render={() => (<h4>Page not found!</h4>)} />
        </Switch>
      </Router>
    )
  }
}

export default App;

