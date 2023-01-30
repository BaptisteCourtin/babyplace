import React from "react";
import DaysDashAgenda from './Agenda/Days.DashAgenda';
import HoursDashAgenda from './Agenda/Hours.DashAgenda';
import DayOffDashAgenda from './Agenda/DayOff.DashAgenda';

function Agenda({ updateHours, updateDay, horaires, toggleDay, setToggleDay, selected, setSelected, dayId, setDayId, setHorairesId }) {

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
        ) : (toggleDay === 0) ? (
          <DayOffDashAgenda
            updateDay={updateDay}
          />
        ) : (toggleDay === null) && (
          <p className="dashPlacesSelect">Choisissez un jour</p>
        )}
      </div>
    </section >
  );
}

export default Agenda;
