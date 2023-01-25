import React, { useState } from "react";
import DashCalendar from "../../agenda/Components/Calendar.DashAgenda";
import DaysDashAgenda from "./Agenda/Days.DashAgenda";
import HoursDashAgenda from "./Agenda/Hours.DashAgenda";
import ChoiceDashAgenda from "./Agenda/Choice.DashAgenda";
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
  const [toggleType, setToggleType] = useState(0);
  const [clickedDay, setClickedDay] = useState(new Date());
  const [hoursOpen, setHoursOpen] = useState(null);
  const [hoursClose, setHoursClose] = useState(null);

  return (
    <section className="agendaSection">
      <h2>Agenda</h2>
      <ChoiceDashAgenda toggleType={toggleType} setToggleType={setToggleType} />
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
            <DayOffDashAgenda updateDay={updateDay} />
          )}
        </div>
      ) : (
        <DashCalendar clickedDay={clickedDay} setClickedDay={setClickedDay} />
      )}
    </section>
  );
}

export default Agenda;
