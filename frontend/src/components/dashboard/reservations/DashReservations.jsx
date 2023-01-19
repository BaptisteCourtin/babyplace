import React, { useEffect, useLayoutEffect, useState } from "react";
import { MdOutlineCancel, MdCheckCircleOutline } from "react-icons/md";
import { GoFile } from "react-icons/go";
import axios from "axios";
import { toast } from "react-hot-toast";

function DashReservations({ tarifHeure }) {

  const [statusToggle, setStatusToggle] = useState(0);
  const [filteredReser, setFilteredReser] = useState([]);

  const [reser, setReser] = useState([])
  const getReser = async () => {
    try {
      const res = await axios
        .get(`${import.meta.env.VITE_PATH}/reservation`)
      setReser(res.data)
    } catch (err) {
      toast.error(err.message)
    }
  };

  const updateStatus = async (status, reserId) => {
    try {
      await axios
        .put(`${import.meta.env.VITE_PATH}/reservation/status`, {
          status: status,
          id: reserId
        })
      if (status === 'approved') {
        toast.success("Vous avez accepté cette demande")
      } else if (status === 'refused') {
        toast.success("Vous avez refusé cette demande")
      }
      getReser()
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    getReser();
  }, [statusToggle]);

  return (
    <div className="dashReservations">
      <div className="dashReserFilters">
        <h2>Vos réservations</h2>
        <div className="reserBtn">
          <button
            type="button"
            onClick={() => setStatusToggle(0)}
            className={statusToggle === 0 ? "selected" : ""}
          >
            Toutes
          </button>
          <button
            type="button"
            onClick={() => setStatusToggle(1)}
            className={statusToggle === 1 ? "selected" : ""}
          >
            Accepté
          </button>
          <button
            type="button"
            onClick={() => setStatusToggle(2)}
            className={statusToggle === 2 ? "selected" : ""}
          >
            En attente
          </button>
          <button
            type="button"
            onClick={() => setStatusToggle(3)}
            className={statusToggle === 3 ? "selected" : ""}
          >
            Refusé
          </button>
          <button
            type="button"
            onClick={() => setStatusToggle(4)}
            className={statusToggle === 4 ? "selected" : ""}
          >
            Annulé
          </button>
        </div>
      </div>
      <ul className="reserList">
        {reser
          .filter((r) => {
            if (statusToggle === 0) return r;
            else if (statusToggle === 1) return r.status.includes("approved");
            else if (statusToggle === 2) return r.status.includes("waiting");
            else if (statusToggle === 3) return r.status.includes("refused");
            else if (statusToggle === 4) return r.status.includes("canceled");
          })
          .map((r) => (
            <li
              style={{
                border: (() => {
                  if (r.status === "approved") {
                    return "1px solid #2dcd7a";
                  }
                  if (r.status === "waiting") {
                    return "1px solid #FFA84C";
                  }
                  if (r.status === "refused") {
                    return "1px solid #EF3672";
                  }
                  if (r.status === "canceled") {
                    return "1px solid #4b5d68";
                  }
                })(),
                opacity: (() => {
                  if (r.status === "canceled" || r.status === "refused") {
                    return "0.4";
                  }
                  return "1";
                })(),
              }}
            >
              <p
                className="reserStatusColor"
                style={{
                  backgroundColor: (() => {
                    if (r.status === "approved") {
                      return "#2dcd7a";
                    }
                    if (r.status === "waiting") {
                      return "#FFA84C";
                    }
                    if (r.status === "refused") {
                      return "#EF3672";
                    }
                    if (r.status === "canceled") {
                      return "#4b5d68";
                    }
                  })(),
                }}
              />
              <div className="reserInfo1">
                <p>{r.prenomEnfant} <br /> {r.nomEnfant}</p>
                <p>{r.ageEnfant} mois</p>
              </div>
              <div className="reserInfo2">
                <p>{r.prenomParent} <br /> {r.nomParent}</p>
                <p>Profil {r.pourcentProfil} %</p>
              </div>
              <div className="reserInfo3">
                <p>
                  <span>Dates</span>
                  <br />
                  {r.dateArrivee} / {r.dateDepart}
                </p>
                <p>
                  <span>Horaires</span>
                  <br />
                  {r.heureArrivee} / {r.heureDepart}
                </p>
              </div>
              <div className="reserInfo4">
                <p>
                  {r.heureDepart.replace(':00', '') - r.heureArrivee.replace(':00', '')}H
                </p>
                <p>
                  {(r.heureDepart.replace(':00', '') - r.heureArrivee.replace(':00', '')) * tarifHeure}€
                </p>
              </div>
              {r.status === "waiting" ? (
                <div className="reserChoice">
                  <button type="button" onClick={() => updateStatus('approved', r.id)}>
                    <MdCheckCircleOutline />
                    Accepter
                  </button>
                  <button type="button" onClick={() => updateStatus('refused', r.id)}>
                    <MdOutlineCancel /> Refuser
                  </button>
                </div>
              ) : (
                <div className="reserModif">
                  <button type="button" onClick={() => updateStatus('waiting', r.id)}>
                    <GoFile />
                    Modifier
                  </button>
                </div>
              )}
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default DashReservations;
