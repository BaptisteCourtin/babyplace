import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Agenda from "./Components/Agenda.DashHours";
import { useGetHours } from "./Hooks/useGetHours";
import { usePutHours } from "./Hooks/usePutHours";
import PricesDashHours from "./Components/Prices.DashHours";
import OptionsDashHours from "./Components/Options.DashHours";
import ActivitiesDashHours from "./Components/Activities.DashHours";

function DashHours({ userType, structureId }) {
  const [dayId, setDayId] = useState(1);
  const [horairesId, setHorairesId] = useState(null);

  const {
    toggleDay,
    setToggleDay,
    selected,
    setSelected,
    data,
    horaires,
    hour1,
    setHour1,
    hour2,
    setHour2,
    hour3,
    setHour3,
    indemn1,
    setIndemn1,
    indemn2,
    setIndemn2,
    indemn3,
    setIndemn3,
    switch1,
    setSwitch1,
    switch2,
    setSwitch2,
    switch3,
    setSwitch3,
    getData,
    getHoraires,
    setValues
  } = useGetHours(structureId, userType);

  const { updateIndemn, updateOptions, updateTarif, updateDay, updateHours } =
    usePutHours(
      structureId,
      userType,
      getData,
      getHoraires,
      horairesId,
      toggleDay,
      setToggleDay
    );

  useEffect(() => {
    getData();
    getHoraires();
    // setValues();
  }, [dayId]);

  return (
    <div className="dashPlaces">
      <Agenda
        structureId={structureId}
        horaires={horaires}
        getHoraires={getHoraires}
        updateDay={updateDay}
        updateHours={updateHours}
        toggleDay={toggleDay}
        setToggleDay={setToggleDay}
        selected={selected}
        setSelected={setSelected}
        dayId={dayId}
        setDayId={setDayId}
        setHorairesId={setHorairesId}
      />
      <section className="dashPlacesParams">
        <PricesDashHours
          userType={userType}
          updateTarif={updateTarif}
          hour1={hour1}
          setHour1={setHour1}
          hour2={hour2}
          setHour2={setHour2}
          hour3={hour3}
          setHour3={setHour3}
        />
        <OptionsDashHours
          userType={userType}
          updateIndemn={updateIndemn}
          indemn1={indemn1}
          setIndemn1={setIndemn1}
          indemn2={indemn2}
          setIndemn2={setIndemn2}
          indemn3={indemn3}
          setIndemn3={setIndemn3}
          switch1={switch1}
          setSwitch1={setSwitch1}
          switch2={switch2}
          setSwitch2={setSwitch2}
          switch3={switch3}
          setSwitch3={setSwitch3}
        />
        <ActivitiesDashHours data={data} updateOptions={updateOptions} />
      </section>
    </div>
  );
}

export default DashHours;

DashHours.propTypes = {
  title: PropTypes.string.isRequired,
  userType: PropTypes.string.isRequired,
  structureId: PropTypes.number.isRequired,
  indemnRepas: PropTypes.number.isRequired,
  Tarif_heure: PropTypes.number.isRequired,
  Tarif_horaire_spec: PropTypes.number.isRequired,
};
