import React from "react";
import PropTypes from "prop-types";
import Calendar from "react-calendar";

function CalendarDashAgenda({ setClickedDay, clickedDay, setPlaces, horaires, calendar, dateNow, structureId }) {
  const value = new Date();

  const tileDisable = ({ date }) => {
    if (
      (date.getDay() === 1 && !horaires?.[0].ouvert) ||
      (date.getDay() === 2 && !horaires?.[1].ouvert) ||
      (date.getDay() === 3 && !horaires?.[2].ouvert) ||
      (date.getDay() === 4 && !horaires?.[3].ouvert) ||
      (date.getDay() === 5 && !horaires?.[4].ouvert) ||
      (date.getDay() === 6 && !horaires?.[5].ouvert) ||
      (date.getDay() === 0 && !horaires?.[6].ouvert)
    ) {
      return "select";
    }
    if (!(calendar.every(c => c.structureId === structureId && c.date !== dateNow))) {
      console.log('first')
      return "";
    }
  };

  return (
    <Calendar
      locale="fr"
      showNeighboringMonth={false}
      value={clickedDay}
      minDetail="month"
      maxDetail="month"
      minDate={value}
      onClickDay={(e) => {
        setClickedDay(e);
        setPlaces("");
      }}
      tileClassName={(e) => tileDisable(e)}
    />
  );
}

export default CalendarDashAgenda;

CalendarDashAgenda.propTypes = {
  clickedDay: PropTypes.string.isRequired,
  setClickedDay: PropTypes.func.isRequired,
};
