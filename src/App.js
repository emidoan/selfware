// React and CSS Imports
import React from "react";
import "./App.scss";
import "globals/hack-styles.scss";
import '../node_modules/react-vis/dist/style.css';

// Installed dependency imports
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
<<<<<<< HEAD
import {
  Link
} from "react-router-dom";
=======
import { Link } from "react-router-dom";
>>>>>>> 67262680559e664fb91a5c6ec88b5f3c532de0fa

// Website imports for classes you made
import { UserList } from "app/views";
import { Meditation } from "app/views";
<<<<<<< HEAD

=======
import {Journal} from "app/views";
import {JournalEntry} from "app/views";
import {PastJournal} from "app/views";

import { Resources } from "app/views";
>>>>>>> 67262680559e664fb91a5c6ec88b5f3c532de0fa

function App() {
  return (
    <div className="app fill-view">
      <h1>SelfWare</h1>
      <Router>
<<<<<<< HEAD
            <Link to="/">Home</Link>
            <Link to="/Meditation">Meditation</Link>
        <Switch>
          <Route 
            exact path={"/meditation"}
            component={Meditation}
          />
=======

        <Link to ="/">Home</Link>
        <Link to ="/meditation">Meditation</Link>
        <Link to ="/journal">Journal</Link>
<<<<<<< HEAD
        <Link to ="/pastjournal">Load Past Journals</Link>
=======
        <Link to ="/resources">Resources</Link>
>>>>>>> resources

        <Switch>
          <Route exact path={'/'}component={Home}/>
          <Route exact path={"/meditation"}component={Meditation}/>
<<<<<<< HEAD
          <Route path={"/journal"}component={Journal}></Route>
          <Route path={"/pastjournal"}component={PastJournal}/>
=======
          <Route exact path={"/journal"}component={Journal}/>
          <Route exact path={"/resources"}component={Resources}/>
>>>>>>> resources
>>>>>>> 67262680559e664fb91a5c6ec88b5f3c532de0fa
        </Switch>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div>
    <h1>SelfWare</h1>
    <h2>Medidate freely.</h2>
  </div>
  );
}

export default App;
