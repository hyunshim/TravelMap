import React from 'react';
import './NavigationBar.scss';

import { firebase_app, provider } from '../../firebase/Firebase';

class NavigationBar extends React.Component {
    login() {
        firebase_app.auth().signInWithPopup(provider)
            .then((user) => {
                console.log("User: ", user);
                this.props.authHandler(true);
            })
            .catch((error) => {
                console.log("Error: ", error);
            });
    }

    logout() {
        firebase_app.auth().signOut()
            .then((user) => {
                console.log("User: ", user);
                this.props.authHandler(false);
            })
            .catch((error) => {
                console.log("Error: ", error);
            });
    }

    render() {
        return (
            <div className="nav">
                <a>TravelMap</a>
                <a>Profile</a>
                {this.props.user ? <a onClick={() => this.logout()}>Log out</a> : <a onClick={() => this.login()}>Log in</a>}
            </div>
        )
    }
}

export default NavigationBar;