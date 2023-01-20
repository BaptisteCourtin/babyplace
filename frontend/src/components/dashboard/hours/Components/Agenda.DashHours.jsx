import React, { useEffect } from "react";
import DashCalendar from "../../agenda/Components/Calendar.DashAgenda";
import DaysDashAgenda from './Agenda/Days.DashAgenda';
import HoursDashAgenda from './Agenda/Hours.DashAgenda';
import ChoiceDashAgenda from './Agenda/Choice.DashAgenda';
import DayOffDashAgenda from './Agenda/DayOff.DashAgenda';

function Agenda({ getHoraires, updateHours, updateDay, horaires, toggleDay, setToggleDay, selected, setSelected, dayId, setDayId, setHorairesId }) {

  useEffect(() => {
    getHoraires();
  }, [hoursOpen, hoursClose]);

  return (
    <section className="agendaSection">
      <h2>Agenda</h2>
      <ChoiceDashAgenda
        toggleType={toggleType}
        setToggleType={setToggleType}
      />
      {toggleType === 0 ? (
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
              setHoursOpen={setHoursOpen}
              setHoursClose={setHoursClose}
              updateHours={updateHours}
              updateDay={updateDay}
            />
          ) : (
            <DayOffDashAgenda
              updateDay={updateDay}
            />
          )}
        </div>
      ) : (
        <DashCalendar clickedDay={clickedDay} setClickedDay={setClickedDay} />
      )
      }
    </section >
  );
}

export default Agenda;
