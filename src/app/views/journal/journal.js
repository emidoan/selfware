import React, { useState, useEffect } from "react";
import "./journal.scss";
import { Link } from "react-router-dom";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { JournalEntry } from "app/views";
import  { EntryList } from "app/views";

import axios from "axios"

class Journal extends React.Component {
    constructor(props) {
        super(props)
        this.state = { items: [] }
      }
      addItem(item) {
        // getting input value from child component --> adding it to state items array
        alert(item.value)
        this.setState({
          items: this.state.items.concat(item)
        })
      }
      componentWillMount() {
        // load items array from localStorage, set in state
        let itemsList = localStorage.getItem('items')
        if (itemsList) {
          this.setState({
            items: JSON.parse(localStorage.getItem('items'))
          })
        }
      }
      componentDidUpdate() {
        // on each update, sync our state with localStorage
        localStorage.setItem('items', JSON.stringify(this.state.items))
      }

    render () {
        return (
            <div>
                <Switch>
                    <Route exact 
                        path={"/journal"}
                        component={Lol}
                        items={this.state.items}
                        >     
                    </Route>
                    <Route exact 
                        path={"/journal/journal-entry"}
                        component={JournalEntry}
                        addItem={this.addItem.bind(this)}
                        >
                    </Route>
                </Switch>
            </div>
         );
    }


}

export default Journal;

function Lol(items) {
    return (
        <div>
            <Route exact
                path={"/journal"}
                component={EntryList}
                items={items}/>
            <Link to ="/journal/journal-entry">
                <button type="button" class="newButton">
                    +
                </button>
            </Link> 
        </div>

    );
}
