import React from 'react';
import './App.scss';

import { firebase_app } from './firebase/Firebase';
import NavigationBar from './components/navigation/NavigationBar';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: ''
    }

    this.authListener = this.authListener.bind(this);
    this.authHandler = this.authHandler.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebase_app.auth().onAuthStateChanged((user) => {
      console.log("user:", user);
      this.setState({ user: user ? user : null });
    });
  }

  authHandler(user) {
    console.log(user);
    this.setState({user: user});
  }

  render() {
    return (
      <div className="app">
        <NavigationBar authHandler = {this.authHandler} user = {this.state.user}></NavigationBar>
        <div>{this.state.user ? "Logged In" : "Logged Out"}</div>
      </div>
    );
  }
}

export default App;
