import "./NavBar.css";
import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signOut, signIn } from "../../actions";
import { logoutDoc } from "../../actions/auth";

// Material Ui
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import logo from "../../logo/logo4.png";

// Custorm component import
import NavItem from "./NavItem";

class NavBar extends React.Component {
  onClickLogout = () => {
    this.props.logoutDoc();
    <Redirect to="/" />;
  };
  renderAuthButton = () => {
    if (localStorage.getItem("token") !== null) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
    if (!this.props.isSignedIn) {
      return (
        <React.Fragment>
          <NavItem name="Login" route="/login/doctor" />
          <NavItem name="Register" route="/register/doctor" />
        </React.Fragment>
      );
    } else if (this.props.isSignedIn) {
      return (
        <React.Fragment>
          <NavItem name="Home" route="/" />
          <NavItem name="Profile" route="/profile" />
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button onClick={this.onClickLogout} className="white">
              Logout
            </Button>
          </Link>
        </React.Fragment>
      );
    } else {
      return <div></div>;
    }
  };

  render() {
    return (
      <div>
        <AppBar
          position="static"
          style={{ background: "#343a40", flexGrow: 1 }}
        >
          <Toolbar className="navc">
            <Typography variant="h4" style={{ flexGrow: 1 }}>
              <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                <img src={logo} alt="Logo" />
              </Link>
            </Typography>
            {this.renderAuthButton()}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signOut, signIn, logoutDoc })(NavBar);
