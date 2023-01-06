import React, { useState } from 'react';
import MultiRangeSlider from "multi-range-slider-react";
import open from "@assets/dashboard/open-sign.svg";
import close from "@assets/dashboard/closed-sign.svg";
import DashCalendar from "../../agenda/calendar/DashCalendar";


function Agenda({ title, updateDay, horaires, toggleDay, setToggleDay, selected, setSelected, dayId }) {

    const [toggleType, setToggleType] = useState(0);
    const [clickedDay, setClickedDay] = useState(new Date());

    return (
        <section className="agendaSection">
            <h2>{title}</h2>
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
                                        setSelected(h.jourSemaine);
                                        setToggleDay(h.ouvert);
                                        setDayId(h.jourId);
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
                            <MultiRangeSlider
                                min={0}
                                max={23}
                                minValue={horaires[dayId].heureMin.split(":", 1)[0]}
                                maxValue={horaires[dayId].heureMax.split(":", 1)[0]}
                                step={1}
                            // onChange={(e) => {
                            //   handleInput(e);
                            //   updateHours();
                            // }}
                            />
                            <div className="dashRangeValues">
                                <p>
                                    <img src={open} alt="" /> Ouverture : {horaires[dayId].heureMin}
                                    H
                                </p>
                                <p>
                                    <img src={close} alt="" /> Fermeture :{" "}
                                    {horaires[dayId].heureMax}H
                                </p>
                            </div>
                            <button
                                type="button"
                                className="dashPlacesSubmit"
                                onClick={() => {
                                    setToggleDay(!toggleDay);
                                    updateDay();
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
                                setToggleDay(!toggleDay);
                                updateDay();
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

export default Agenda