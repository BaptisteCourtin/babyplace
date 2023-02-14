import React, { useEffect } from "react";
import Proptypes, { bool, number, string, oneOfType } from "prop-types";
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
  setData,
}) {
  const getCalendrier = (source) => {
    Axios.get(
      `${import.meta.env.VITE_PATH}/calendrierExist?id=${structureId}`,
      {
        structureId,
        cancelToken: source.token,
      }
    )
      .then((result) => {
        const indispo = [];
        if (result.data.length > 0) {
          for (let i = 0; i < result.data.length; i += 1) {
            indispo.push(result.data[i].date);
          }
        }
        setClosedDays(indispo);
        setData((prev) => {
          return {
            ...prev,
            indispo,
          };
        });
      })
      .catch((err) => {
        if (err.code === "ERR_CANCELED") {
          console.warn("cancel request");
        } else {
          console.error(err);
        }
      });
  };

  useEffect(() => {
    const source = Axios.CancelToken.source();
    getCalendrier(source);
    return () => {
      source.cancel();
    };
  }, []);

  const isOpenDay = (e) => {
    const clickedDayFormated = `${e.getFullYear()}-${
      e.getMonth() + 1
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
      const formatedDate = `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()}`;
      if (closedDays.includes(formatedDate)) {
        return "select";
      }
      return "";
    }
  };

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
  lundiOuvert: oneOfType([bool, number]),
  mardiOuvert: oneOfType([bool, number]),
  mercrediOuvert: oneOfType([bool, number]),
  jeudiOuvert: oneOfType([bool, number]),
  vendrediOuvert: oneOfType([bool, number]),
  samediOuvert: oneOfType([bool, number]),
  dimancheOuvert: oneOfType([bool, number]),
  closedDays: Proptypes.node,
  setClosedDays: Proptypes.func,
  structureId: oneOfType([string, number]),
  setData: Proptypes.func,
};
export default Structure11;
