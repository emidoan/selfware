journal.js
import React, { useState, useEffect } from "react";
import "./journal.scss";
import { Link } from "react-router-dom";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { JournalEntry } from "app/views";

import axios from "axios"

function Journal() {

    return (
        <div>
            <Router>
                <Link to ="/journal/journal-entry">
                    <button type="button" class>
                        +
                    </button>
                </Link> 
                <Switch>
                    <Route exact path={"/journal/journal-entry"}component={JournalEntry}/>
                </Switch>
            </Router>

        </div>


    );
}

export default Journal;