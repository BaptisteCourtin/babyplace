import React from "react";
import PropTypes from "prop-types";
import Calendar from "react-calendar";

function DashCalendar({ calendar, dayDate, setClickedDay, clickedDay }) {
  const value = new Date();

  const dayStatus = ({ date, view }) => {
    view === 'month' && calendar.filter(c => c.date === dayDate).map(fc => fc.nbPlaces == -1 ? "notWorked" : "notFull")
  }

  return (
    <Calendar
      locale="fr"
      showNeighboringMonth={false}
      value={clickedDay}
      minDetail="month"
      maxDetail="month"
      minDate={value}
      onClickDay={(e) => setClickedDay(e)}
      tileClassName={(e) => dayStatus(e)}
    />
  );
}

export default DashCalendar;

DashCalendar.propTypes = {
  clickedDay: PropTypes.string.isRequired,
  setClickedDay: PropTypes.func.isRequired,
};
