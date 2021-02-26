import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const ReturnToDashboard = () => {
  return (
    <Link to={"/"} className="return-dashboard">
      <FontAwesomeIcon icon={faArrowLeft} /> Return to Dashboard
    </Link>
  )
}