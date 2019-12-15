import React from "react";
import "./NavigationBar.scss";

import { firebase_app, provider, db } from "../../firebase/firebase";

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sideNavWidth: 0
    };
  }
  login() {
    firebase_app
      .auth()
      .signInWithPopup(provider)
      .then((user) => {
        console.log("User: ", user);
        this.props.authHandler(true);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }

  logout() {
    firebase_app
      .auth()
      .signOut()
      .then((user) => {
        console.log("User: ", user);
        this.setState({ sideNavWidth: 0 });
        this.props.authHandler(false);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }

  toggleSideNav() {
    this.setState({
      sideNavWidth: this.state.sideNavWidth === 0 ? 400 : 0
    });
  }

  render() {
    const user = this.props.user;

    db.collection('users').doc('Q8DHNa5AdN6rX3PZGZJ2').get().then(doc => {
      console.log("doc", doc.data());
    })

    return (
      <div className="nav">
        <a>TravelMap</a>
        {!this.props.user ? (
          <a onClick={() => this.login()}>Log in</a>
        ) : (
          <a
            className="profilePic"
            style={{
              backgroundImage: user
                ? `url(${user.photoURL})`
                : `url("../../static/default-profile.png"`
            }}
            onClick={() => this.toggleSideNav()}
          ></a>
        )}

        <div className="sideNav" style={{ width: this.state.sideNavWidth }}>
          <div className="title">
            <h1>{user ? user.displayName : ""}</h1>
            <div className="logout"><a onClick={() => this.logout()}>Log out</a></div>
          </div>

          <div className="friends">
            <h2>Friends</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default NavigationBar;
