import React, { useState, useEffect } from "react";
import "./entryList.scss";

import axios from "axios"

import { EntryCard } from "app/components";
import { JournalEntry } from "app/views";

function EntryList() {

  // List of users from the database
  const [users, setUsers] = useState(null);

  // Get the list of users from the database upon page load
  useEffect(() => {
    getUserList();
  }, []);

  // Get the list of users through a GET request to the backend API
  async function getUserList() {
    let users = await axios.get("https://zothacks-2020-workshop.herokuapp.com/user");
    
    // If we get a valid response, set the state object, or print an error.
    if (users.status === 200) {
      setUsers(users.data.data);
    } else {
      console.log("Error retrieving users");
    }
  }

  return (
    <div className="entry-list">
      {(users || []).map(function (user) {
        return <EntryCard user={user}/>;
      })}
    </div>
  );
}

export default EntryList;
