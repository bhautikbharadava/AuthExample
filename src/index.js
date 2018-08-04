import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import HomePage from "./Home";
import LoginPage from "./Login";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
            {
              //alert.message && (
              //   <div className={`alert ${alert.type}`}>{alert.message}</div>
              // )
            }
            <Router>
              <Switch>
                {<Route exact path="/" component={HomePage} />}
                {<Route path="/login" component={LoginPage} />}
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
