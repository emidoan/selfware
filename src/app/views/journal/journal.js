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
    localStorage.setItem("user",this.state.value);
    alert(localStorage.getItem("user"))
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <textarea rows = {1} style={journalStyle.textArea} placeholder="Type in today's date"/> 
          <br></br>
          <br></br>
          <textarea value={this.state.value} onChange={this.handleChange} rows = {20} style={journalStyle.textArea} placeholder="How are you feeling?"/>
        </label>
        <br></br>
        <br></br>
        <input type="submit" value="Save" className="submit-button" />
      </form>
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

const journalStyle = {
    textArea: {
        border: 0,
        resize: 'none',
        width: 500,
    }
}

export default Journal;