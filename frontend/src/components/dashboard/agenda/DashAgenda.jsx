import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from 'axios';
import toast from 'react-hot-toast';
import DashAgendaCalendar from "./Components/Calendar.DashAgenda";
import { useGetAgenda } from "./Hooks/useGetAgenda";
import { usePutData } from "./Hooks/usePutAgenda";
import { usePostData } from "./Hooks/usePostAgenda";
import { useDeleteData } from "./Hooks/useDeleteAgenda";
import { useFormatDay } from "./Hooks/useFormatDay";
import UnavailableDashAgenda from "./Components/Unavailable.DashAgenda";
import AvailableDashAgenda from "./Components/Available.DashAgenda";
import StatusDashAgenda from "./Components/Status.DashAgenda";
import ReactModal from "react-modal";

function DashAgenda({ structureId, maxPlaces }) {
  const [places, setPlaces] = useState(null);
  const [calendarIndex, setCalendarIndex] = useState(null);
  const [workCheck, setWorkCheck] = useState(0);
  const [modal, setModal] = useState(false);
  const [hourStart, setHourStart] = useState(null);
  const [hourEnd, setHourEnd] = useState(null);
  const [dayId, setDayId] = useState(null);

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

  const handleSubmitHours = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`${import.meta.env.VITE_PATH}/horaires/open/${dayId.horairesId}`, {
        id: dayId.horairesId,
        heureMin: hourStart,
        heureMax: hourEnd
      })
      toast.success("Vos horaires ont été modifiées")
      getHoraires()
      closeModal()
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getCalendar();
    getHoraires();
    if (clickedDay.getDay() !== 0) {
      setWorkCheck(clickedDay.getDay() - 1)
    } else {
      setWorkCheck(6)
    }
  }, [clickedDay]);

  useEffect(() => {
    setDayId(horaires.find(h => h.jourSemaine.toLowerCase() === day))
  }, [clickedDay])

  const openModal = () => {
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
  }

  return (
    <div className="dashAgenda">
      <section className="agendaDashSection">
        <h2>Agenda</h2>
        {horaires.length > 0 &&
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
                onClick={() => openModal()}
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
      {modal &&
        <ReactModal
          isOpen={openModal}
          onRequestClose={closeModal}
          className="hoursChoiceContainer"
        >
          <form className="hoursChoiceInner" onSubmit={(e) => handleSubmitHours(e)}>
            <h2>Choisir un horaires</h2>
            <div className="hoursInputContainer">
              <label htmlFor="timeOpen">Heure d'ouverture</label>
              <input
                type="time"
                name="timeOpen"
                id="timeOpen"
                step="300"
                onChange={(e) => setHourStart(e.target.value)}
                required
              />
            </div>
            <div className="hoursInputContainer">
              <label htmlFor="timeClose">Heure de fermerture</label>
              <input
                type="time"
                name="timeClose"
                id="timeClose"
                step="300"
                onChange={(e) => setHourEnd(e.target.value)}
                required
              />
            </div>
            <button type="submit">Envoyer</button>
          </form>
        </ReactModal>
      }
    </div >
  );
}

export default DashAgenda;

DashAgenda.propTypes = {
  structureId: PropTypes.number.isRequired,
  maxPlaces: PropTypes.number.isRequired,
};
