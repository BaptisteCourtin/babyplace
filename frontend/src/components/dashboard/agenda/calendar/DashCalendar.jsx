import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Calendar from "react-calendar";
import axios from "axios";

function DashCalendar({
  setClickedDay,
  clickedDay
}) {

  const value = new Date();

  return (
    <Calendar
      locale="fr"
      showNeighboringMonth={false}
      value={clickedDay}
      minDetail="month"
      maxDetail="month"
      minDate={value}
      onClickDay={(e) => setClickedDay(e)}
    />
  );
}

export default DashCalendar;

DashCalendar.propTypes = {
  clickedDay: PropTypes.string.isRequired,
  setClickedDay: PropTypes.func.isRequired,
};
