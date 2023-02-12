import React from "react";
import PropTypes from "prop-types";
import DaysDashAgenda from "./Agenda/Days.DashAgenda";
import HoursDashAgenda from "./Agenda/Hours.DashAgenda";
import DayOffDashAgenda from "./Agenda/DayOff.DashAgenda";

function Agenda({
  updateHours,
  updateDay,
  horaires,
  toggleDay,
  setToggleDay,
  selected,
  setSelected,
  dayId,
  setDayId,
  setHorairesId,
}) {
  return (
    <section className="agendaSection">
      <h2>Horaires</h2>
      <div className="dashPlacesRange">
        <DaysDashAgenda
          horaires={horaires}
          selected={selected}
          setSelected={setSelected}
          setToggleDay={setToggleDay}
          setDayId={setDayId}
          setHorairesId={setHorairesId}
        />
        {toggleDay ? (
          <HoursDashAgenda
            horaires={horaires}
            dayId={dayId}
            updateHours={updateHours}
            updateDay={updateDay}
          />
        ) : toggleDay === 0 ? (
          <DayOffDashAgenda updateDay={updateDay} />
        ) : (
          toggleDay === null && (
            <p className="dashPlacesSelect">Choisissez un jour</p>
          )
        )}
      </div>
    </section>
  );
}

Agenda.propTypes = {
  updateHours: PropTypes.func.isRequired,
  updateDay: PropTypes.func.isRequired,
  horaires: PropTypes.array.isRequired,
  toggleDay: PropTypes.bool,
  setToggleDay: PropTypes.func.isRequired,
  selected: PropTypes.string,
  setSelected: PropTypes.func.isRequired,
  dayId: PropTypes.number.isRequired,
  setDayId: PropTypes.func.isRequired,
  setHorairesId: PropTypes.func.isRequired,
};

export default Agenda;
