import React from "react";
import "./entryCard.scss";

import { Link } from "react-router-dom";
import { motion } from "framer-motion"

function EntryCard({ user }) {
  return (
      <div className="entry-card">     
            <h2>
                {user.date}
            </h2>
            <h3>{user.value}</h3>
      </div>
 
  );
}

export default EntryCard;
