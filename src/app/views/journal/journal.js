import React, { useState, useEffect } from "react";
import "./journal.scss";
import { Link } from "react-router-dom";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { JournalEntry } from "app/views";
import  { EntryList } from "app/views";

import axios from "axios"

function Journal() {

    return (
        <div>
            <Switch>
                <Route exact path={"/journal"}component={Lol}>     
                </Route>
                <Route exact path={"/journal/journal-entry"} component={JournalEntry}>
                </Route>
            </Switch>


        </div>


    );
}

export default Journal;

function Lol() {
    return (
        <div>
            <Route exact path={"/journal"}component={EntryList}/>
            <Link to ="/journal/journal-entry">
                <button type="button" class="newButton">
                    +
                </button>
            </Link> 
        </div>

    );
}
