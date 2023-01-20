import React from "react";

function DaysDashAgenda({ horaires, selected, setSelected, setToggleDay, setDayId, setHorairesId }) {

  const onDayChange = (jour, status, id, heureId) => {
    setSelected(jour);
    setToggleDay(status);
    setDayId(id - 1);
    setHorairesId(heureId)
  };

  return (
    <ul className="dashPlacesDays">
      {horaires.map((h) => (
        <li>
          <input
            type="radio"
            name="days"
            id={h.jourSemaine}
            value={h.jourSemaine}
            onChange={() => {
              onDayChange(h.jourSemaine, h.ouvert, h.jourId, h.horairesId);
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
  )
}

export default DaysDashAgenda;
