import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import open from "@assets/dashboard/open-sign.svg";
import close from "@assets/dashboard/closed-sign.svg";
import DashCalendar from "../../agenda/calendar/DashCalendar";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useEffect } from 'react';

function Agenda({
  title,
  updateDay,
  horaires,
  toggleDay,
  setToggleDay,
  selected,
  setSelected,
  dayId,
}) {
  const [toggleType, setToggleType] = useState(0);
  const [clickedDay, setClickedDay] = useState(new Date());

function Agenda({ structureId, getHoraires, horaires, toggleDay, setToggleDay, selected, setSelected, dayId, setDayId }) {

    const [toggleType, setToggleType] = useState(0);
    const [clickedDay, setClickedDay] = useState(new Date());
    const [hoursOpen, setHoursOpen] = useState(null);
    const [hoursClose, setHoursClose] = useState(null);

    const updateHours = async (value, type, state) => {
        try {
            type(value)
            await axios.put(`${import.meta.env.VITE_PATH}/dashboard/hours/${structureId}`, {
                id: structureId,
                value: value,
                state: state,
                jourId: dayId,
            })
            toast.success("Vos horaires ont bien été modifiés", {
                id: 'horaires',
                duration: 2000
            })
        } catch (err) {
            console.error(err.message)
        }
    };

    const updateDay = async (value) => {
        setToggleDay(!toggleDay)
        try {
            await axios.put(`${import.meta.env.VITE_PATH}/horaires/day/${dayId}`, {
                id: dayId,
                structureId: structureId,
                value: value
            });
            toast.success("Vos préférences ont bien été modifiées")
            getHoraires()
        } catch (err) {
            console.error(err.message)
        }
    };

    useEffect(() => {
        getHoraires()
    }, [hoursOpen, hoursClose])

    const onDayChange = (jour, status, id) => {
        setSelected(jour)
        setToggleDay(status)
        setDayId(id - 1)
    }

    return (
        <section className="agendaSection">
            <h2>Agenda</h2>
            <div className="dashPlacesType">
                <button
                    type="button"
                    onClick={() => setToggleType(0)}
                    className={toggleType === 0 ? "selected" : ""}
                >
                    Récurrent
                </button>
                <button
                    type="button"
                    onClick={() => setToggleType(1)}
                    className={toggleType === 1 ? "selected" : ""}
                >
                    Occasionnel
                </button>
            </div>
            {toggleType === 0 ? (
                <div className="dashPlacesRange">
                    <ul className="dashPlacesDays">
                        {horaires.map((h) => (
                            <li>
                                <input
                                    type="radio"
                                    name="days"
                                    id={h.jourSemaine}
                                    value={h.jourSemaine}
                                    onChange={() => {
                                        onDayChange(h.jourSemaine, h.ouvert, h.jourId)
                                    }}
                                />
                                <label
                                    htmlFor={h.jourSemaine}
                                    className={selected === h.jourSemaine ? "selected" : ""}
                                >
                                    {h.jourSemaine.slice(0, 1)}
                                </label>
                            </li>
                        ))}
                    </ul>
                    {toggleDay ? (
                        <>
                            <div className='dashRangeInput'>
                                <input
                                    type="time"
                                    value={horaires[dayId].heureMin}
                                    step="300"
                                    onChange={(e) => updateHours(e.target.value, setHoursOpen, 'heureMin')} />
                                <span> - </span>
                                <input
                                    type="time"
                                    value={horaires[dayId].heureMax}
                                    step="300"
                                    onChange={(e) => updateHours(e.target.value, setHoursClose, 'heureMax')} />
                            </div>
                            <div className="dashRangeValues">
                                <p>
                                    <img src={open} alt="" /> Ouverture : {horaires[dayId].heureMin}
                                    H
                                </p>
                                <p>
                                    <img src={close} alt="" /> Fermeture : {horaires[dayId].heureMax}H
                                </p>
                            </div>
                            <button
                                type="button"
                                className="dashPlacesSubmit"
                                onClick={() => {
                                    updateDay(0);
                                }}
                            >
                                Repos
                            </button>
                        </>
                    ) : (
                        <button
                            type="button"
                            className="dashNotWorking"
                            onClick={() => {
                                updateDay(1);
                            }}
                        >
                            Envie de travailler ?
                        </button>
                    )}
                </div>
            ) : (
                <DashCalendar clickedDay={clickedDay} setClickedDay={setClickedDay} />
            )}
        </section>
    )
}

export default Agenda;
