import React, { useState, useEffect } from "react";
import "./journal.scss";

import axios from "axios"

// import { UserCard } from "app/components";
class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
        <div className='journal-entry'>
            <form onSubmit={this.handleSubmit}>
                <label>
                Journal Entry:
                <textarea value={this.state.value} onChange={this.handleChange} rows = {20} />
                </label>
                <input type="submit" value="Save" />
            </form>
        </div>

    );
  }
}

function Journal() {


  return (
    <div className="journal">
      <h1>Journal</h1>
      <EssayForm/>
    </div>
  );
}



export default Journal;
