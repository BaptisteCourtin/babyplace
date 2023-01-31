import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import DashAgendaCalendar from "./Components/Calendar.DashAgenda";
import { useGetAgenda } from "./Hooks/useGetAgenda";
import { usePutData } from "./Hooks/usePutAgenda";
import { usePostData } from "./Hooks/usePostAgenda";
import { useDeleteData } from "./Hooks/useDeleteAgenda";
import { useFormatDay } from "./Hooks/useFormatDay";
import UnavailableDashAgenda from "./Components/Unavailable.DashAgenda";
import AvailableDashAgenda from "./Components/Available.DashAgenda";
import StatusDashAgenda from "./Components/Status.DashAgenda";

function DashAgenda({ structureId, maxPlaces }) {
  const [places, setPlaces] = useState(null);
  const [calendarIndex, setCalendarIndex] = useState(null);
  const [workCheck, setWorkCheck] = useState(0)

  const { curDate, clickedDay, setClickedDay, date, day } = useFormatDay();
  const { calendar, getCalendar, horaires, getHoraires } = useGetAgenda(structureId);
  const { updatePlaces, updateStatusClose, updateStatusOpen } = usePutData(
    calendarIndex,
    getCalendar,
    maxPlaces,
    setPlaces
  );
  const { addSleepDate, addWorkDate } = usePostData(
    setPlaces,
    date,
    structureId,
    getCalendar
  );
  const { fullDate } = useDeleteData(getCalendar);

  useEffect(() => {
    getCalendar();
    getHoraires();
    if (clickedDay.getDay() !== 0) {
      setWorkCheck(clickedDay.getDay() - 1)
    } else {
      setWorkCheck(6)
    }
  }, [clickedDay]);

  return (
    <div className="dashAgenda">
      <section className="agendaDashSection">
        <h2>Agenda</h2>
        {horaires.length > 0 && calendar.length > 0 &&
          < DashAgendaCalendar
            clickedDay={clickedDay}
            setPlaces={setPlaces}
            setClickedDay={setClickedDay}
            horaires={horaires}
            calendar={calendar}
            dateNow={date}
            structureId={structureId}
          />
        }
      </section>
      <section className="agendaMessage">
        <div className="agendaPlaces">
          <h3>
            {day} {clickedDay.toLocaleDateString()}
          </h3>
          {horaires.length > 0 &&
            horaires?.[workCheck].ouvert || !(calendar.every(c => c.structureId === structureId && c.date !== date)) ? (
            <>
              <UnavailableDashAgenda
                calendar={calendar}
                structureId={structureId}
                date={date}
                addSleepDate={addSleepDate}
                addWorkDate={addWorkDate}
              />
              <StatusDashAgenda
                calendar={calendar}
                structureId={structureId}
                date={date}
                updateStatusOpen={updateStatusOpen}
                maxPlaces={maxPlaces}
                places={places}
                setPlaces={setPlaces}
                setCalendarIndex={setCalendarIndex}
                updatePlaces={updatePlaces}
                updateStatusClose={updateStatusClose}
                fullDate={fullDate}
              />
            </>
          ) : (
            <>
              <button
                type="button"
                className="agendaPlacesWork"
                onClick={() => addWorkDate()}
              >
                Ouvrir
              </button>
              <button
                type="button"
                className="agendaPlacesWork"
                onClick={() => addWorkDate()}
              >
                Travailler tous les <span>{day}s</span>
              </button>
            </>
          )}
        </div>
        <AvailableDashAgenda
          calendar={calendar}
          structureId={structureId}
          date={date}
          curDate={curDate}
        />
      </section >
    </div >
  );
}

export default DashAgenda;

DashAgenda.propTypes = {
  structureId: PropTypes.number.isRequired,
  maxPlaces: PropTypes.number.isRequired,
};
