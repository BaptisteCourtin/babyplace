import React, { useState, useEffect } from "react";
import Proptypes, { bool, number, oneOfType } from "prop-types";
import Calendar from "react-calendar";
import Axios from "axios";

function Structure11({
  lundiOuvert,
  mardiOuvert,
  mercrediOuvert,
  jeudiOuvert,
  vendrediOuvert,
  samediOuvert,
  dimancheOuvert,
  closedDays,
  setClosedDays,
  structureId,
  setData
}) {
  const getCalendrier = () => {
    Axios.get(`${import.meta.env.VITE_PATH}/calendrierExist?id=${structureId}`, { structureId })
      .then((result) => {
        let indispo = [];
        if (result.data.length > 0) {
          for (let i = 0; i < result.data.length; i++) {
            indispo.push(result.data[i].date)
          }
        }
        setClosedDays(indispo);
        setData((prev) => {
          return {
            ...prev, indispo: indispo
          }
        });
      })
      .catch((err) => {
        console.error(err);
      })
  }
  const isOpenDay = (e) => {
    const clickedDayFormated = `${e.getFullYear()}-${e.getMonth() + 1
      }-${e.getDate()}`;
    if (closedDays.length > 0) {
      const indexOfDay = closedDays.indexOf(clickedDayFormated);
      if (indexOfDay !== -1) {
        const tempArray = [...closedDays];
        tempArray.splice(indexOfDay, 1);
        setClosedDays(tempArray);
      } else {
        setClosedDays([...closedDays, clickedDayFormated]);
      }
    } else {
      setClosedDays([...closedDays, clickedDayFormated]);
    }
  };

  const tileDisable = ({ date, view }) => {
    if (
      (date.getDay() === 1 && !lundiOuvert) ||
      (date.getDay() === 2 && !mardiOuvert) ||
      (date.getDay() === 3 && !mercrediOuvert) ||
      (date.getDay() === 4 && !jeudiOuvert) ||
      (date.getDay() === 5 && !vendrediOuvert) ||
      (date.getDay() === 6 && !samediOuvert) ||
      (date.getDay() === 0 && !dimancheOuvert)
    ) {
      return "select";
    }
    if (closedDays.length > 0 && view === "month") {
      const formatedDate = `${date.getFullYear()}-${date.getMonth() + 1
        }-${date.getDate()}`;
      if (closedDays.includes(formatedDate)) {
        return "select";
      }
      return "";
    }
  };
  useEffect(() => {
    getCalendrier()
  }, [])
  return (
    <div className="structure11 page-left">
      <h4>Calendrier de vos indisponibilités</h4>

      <div className="agendaSection">
        <Calendar
          showNeighboringMonth={false}
          minDate={new Date()}
          minDetail="month"
          maxDetail="month"
          onClickDay={(e) => {
            isOpenDay(e);
          }}
          tileClassName={(e) => tileDisable(e)}
        />
      </div>
    </div>
  );
}
Structure11.propTypes = {
  lundiOuvert: oneOfType([
    bool,
    number
  ]),
  mardiOuvert: oneOfType([
    bool,
    number
  ]),
  mercrediOuvert: oneOfType([
    bool,
    number
  ]),
  jeudiOuvert: oneOfType([
    bool,
    number
  ]),
  vendrediOuvert: oneOfType([
    bool,
    number
  ]),
  samediOuvert: oneOfType([
    bool,
    number
  ]),
  dimancheOuvert: oneOfType([
    bool,
    number
  ]),
};
export default Structure11;
