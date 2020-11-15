import React, { useState, useEffect } from "react";
import "./pastjournal.scss";

import axios from "axios"
import { EntryCard } from "./app/views";

// import { UserCard } from "app/components";
class EssayForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '',
        date: '',
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleDateChange = this.handleDateChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
    handleDateChange(event) {
        this.setState({date: event.target.value});
      }
    handleSubmit(event) {
      var pastEntry = localStorage.getItem(this.state.date);
      alert("Date: " + this.state.date + "\nEntry: \n" + pastEntry)
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
              <textarea value = {this.state.date} rows = {1} style={journalStyle.textArea} onChange = {this.handleDateChange} placeholder="Type in today's date..."/>
          </label>
          <br></br>
          <br></br>
          <input type="submit" value="Save" className="submit-button" />
        </form>
      );
    }
  }
  
  function PastJournal() {

    return (
      <div className="journal">
        <h1>View Past Journals</h1>
        <EssayForm/>
      </div>
    );
  }
  
  const journalStyle = {
      textArea: {
          border: 0,
          resize: 'none',
          width: 100,
          height: 50,
      }
  }

export default PastJournal
