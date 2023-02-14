import React from "react";
import PropTypes from "prop-types";

function DaysDashAgenda({
  horaires,
  selected,
  setSelected,
  setToggleDay,
  setDayId,
  setHorairesId,
}) {
  const onDayChange = (jour, status, id, heureId) => {
    setSelected(jour);
    setToggleDay(status);
    setDayId(id - 1);
    setHorairesId(heureId);
  };

  return (
    <ul className="dashPlacesDays">
      {horaires.map((h, index) => (
        <li key={index}>
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
  );
}

DaysDashAgenda.propTypes = {
  horaires: PropTypes.array.isRequired,
  selected: PropTypes.string,
  setSelected: PropTypes.func.isRequired,
  setToggleDay: PropTypes.func.isRequired,
  setDayId: PropTypes.func.isRequired,
  setHorairesId: PropTypes.func.isRequired,
};

export default DaysDashAgenda;
