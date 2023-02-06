import React from "react";

function OpenDashStatus({
  fc,
  maxPlaces,
  places,
  setPlaces,
  setCalendarIndex,
  updatePlaces,
}) {

  console.log(places)

  return (
    <>
      <div className="agendaPlacesLeft">
        <p>
          Il vous reste
          <b> {fc.nbPlaces} </b>
          {fc.nbPlaces == 1 ? 'place' : 'places'} sur
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

export default OpenDashStatus;
