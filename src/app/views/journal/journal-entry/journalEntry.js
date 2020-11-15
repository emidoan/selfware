import React, { useState, useEffect } from "react";
import "./journalEntry.scss";

import axios from "axios"

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
      localStorage.setItem(this.state.date, this.state.value)
      alert('An essay was submitted: ' + this.state.value);
      alert('date: ' + this.state.date);
      //localStorage.setItem(this.state.date, this.state.value);
      let item = {date: this.state.date, value: this.state.value};
      this.props.addItem(item);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
              <textarea value = {this.state.date} rows = {1} style={journalStyle.textArea} onChange = {this.handleDateChange} placeholder="Type in today's date"/>
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
  
  function JournalEntry() {
  
  
    return (
      <div className="journal">
        <h1>Self Reflection Journal</h1>
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

export default JournalEntry