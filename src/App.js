// React and CSS Imports
import React from "react";
import "./App.scss";
import "globals/hack-styles.scss";
import '../node_modules/react-vis/dist/style.css';

// Installed dependency imports
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import {
  Link
} from "react-router-dom";

// Website imports for classes you made
import { UserList } from "app/views";
import { Meditation } from "app/views";


function App() {
  return (
    <div className="app fill-view">
      <h1>SelfWare</h1>
      <Router>
            <Link to="/">Home</Link>
            <Link to="/Meditation">Meditation</Link>
        <Switch>
          <Route 
            exact path={"/meditation"}
            component={Meditation}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
