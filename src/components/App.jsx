import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import NavBar from "./NavBar/NavBar";
import HomePage from "./home/Home";
import Profile from "./profile/Profile";
import LoginDoctor from "./auth/LoginDoctor";
import RegisterDoctor from "./auth/RegisterDoctor";
import Alerts from "./layout/Alerts";
import history from "../history";
import myTheme from "./theme";

function App() {
  return (
    <div>
      <ThemeProvider theme={myTheme}>
        {/* <div> */}
        <Router history={history}>
          {/* <div> */}
          <NavBar />
          <div className="container">
            <Alerts />
          </div>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login/doctor" exact component={LoginDoctor} />
            <Route path="/register/doctor" exact component={RegisterDoctor} />
            <Route path="/profile" exact component={Profile} />
          </Switch>
          {/* </div> */}
        </Router>
        {/* </div> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
