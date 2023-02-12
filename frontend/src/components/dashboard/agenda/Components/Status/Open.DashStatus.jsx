import React from "react";
import PropTypes from "prop-types";

function OpenDashStatus({
  fc,
  maxPlaces,
  places,
  setPlaces,
  setCalendarIndex,
  updatePlaces,
}) {
  return (
    <>
      <div className="agendaPlacesLeft">
        <p>
          Il vous reste
          <b> {fc.nbPlaces} </b>
          {fc.nbPlaces == 1 ? "place" : "places"} sur
          <b> {maxPlaces} </b>
        </p>
      </div>
      <div className="agendaCalendarBtn">
        <input
          type="number"
          value={places}
          min={1}
          max={maxPlaces}
          placeholder={`1 à ${maxPlaces}`}
          onChange={(e) => {
            setPlaces(e.target.value);
            setCalendarIndex(fc.calendrierId);
          }}
        />
        <button
          type="button"
          onClick={() => {
            updatePlaces(places);
          }}
        >
          Modifier
        </button>
      </div>
    </>
  );
}

OpenDashStatus.propTypes = {
  fc: PropTypes.object.isRequired,
  maxPlaces: PropTypes.number.isRequired,
  places: PropTypes.number.isRequired,
  setPlaces: PropTypes.func.isRequired,
  setCalendarIndex: PropTypes.func.isRequired,
  updatePlaces: PropTypes.func.isRequired,
};

export default OpenDashStatus;
