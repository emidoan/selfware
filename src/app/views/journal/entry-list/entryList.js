import React, { useState, useEffect } from "react";
import "./entryList.scss";

import axios from "axios"

import { EntryCard } from "app/components";

function EntryList(props) {

  return (
    <div className="entry-list">
      {(props.users || []).map(function (user) {
        return <EntryCard user={user}/>;
      })}
    </div>
  );
}

export default EntryList;
