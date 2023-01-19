import React, { useState, useEffect, lazy, Suspense } from "react";
import { FiBell } from "react-icons/fi";
import { AiFillStar, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import ReactModal from "react-modal";

import DashNavbar from "./nav/DashNavbar";
import DashReservations from "./reservations/DashReservations";
import DashAgenda from "./agenda/DashAgenda.jsx";
import DashPlaces from "./places/DashPlaces";
import Messages from "../messages/Messages";
import DashParams from "./parameters/DashParams";

function Dashboard() {
  const { state } = useLocation();
  const { token } = state;
  const [donnees, setDonnees] = useState({});
  const [details, setDetails] = useState([]);
  const [userType, setUserType] = useState(null);

  const getData = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_PATH}/structure`, {
        headers: {
          "x-token": token,
        },
      })
      setDonnees(res.data[0]);
      if (res.data[0].isCreche === 0) {
        axios.get(`${import.meta.env.VITE_PATH}/structure/details?type=assMat&id=${res.data[0].structureId}`, {
          id: res.data[0].structureId,
        })
          .then(res => {
            setDetails(res.data[0])
            setUserType('assMat')
          })
      } else {
        axios.get(`${import.meta.env.VITE_PATH}/structure/details?type=creche&id=${res.data[0].structureId}`, {
          id: res.data[0].structureId,
        })
          .then(res => {
            setDetails(res.data[0])
            setUserType('creche')
          })
      }
    }
    catch (err) {
      toast.error(err.message)
    }
  };

  const data = Object.assign(donnees, details)

  const [toggleNotif, setToggleNotif] = useState(false)

  const [toggle, setToggle] = useState(0);
  const pageShown = () => {
    if (toggle === 1) {
      return (
        <DashReservations {...data} />
      );
    }
    if (toggle === 2) {
      return (
        <DashAgenda structureId={data.structureId} maxPlaces={data.maxPlaces} />
      );
    }
    if (toggle === 3) {
      return (
        <DashPlaces userType={userType} structureId={data.structureId} />
      );
    }
    if (toggle === 4) {
      return (
        <Messages {...data} />
      );
    }

    if (toggle === 5) {
      return (
        <DashParams {...data} userType={userType} getData={getData} />
      );
    }
  };

  const [notif, setNotif] = useState([])

  const getNotifications = async () => {
    try {
      const res = await axios
        .get(`${import.meta.env.VITE_PATH}/notifications/${data.structureId}`, {
          id: data.structureId
        })
      setNotif(res.data)
    } catch (err) {
      toast.error(err.message)
    }
  }

  const deleteNotification = async (id) => {
    try {
      await axios
        .delete(`${import.meta.env.VITE_PATH}/notifications/${id}`, {
          id
        })
      getNotifications()
    } catch (err) {
      toast.error("Could not delete the notification")
    }
  }

  const deleteDates = async () => {
    await axios
      .delete(`${import.meta.env.VITE_PATH}/calendrier`)
  }

  useEffect(() => {
    getData();
    deleteDates();
    getNotifications();
  }, []);

  const reviews =
    Math.round(
      ((data.avisCom +
        data.avisHoraires +
        data.avisEveil +
        data.avisProprete +
        data.avisSecurite) /
        5) *
        10
    ) / 10;

  const notifContent = (type) => {
    if (type === "waiting") {
      return "Vous avez une demande en attente"
    }
  }

  const openModal = () => {
    setToggleNotif(true)
  }

  const closeModal = () => {
    setToggleNotif(false)
  }

  const telephone = (data.telephone)
  // .toString().match(/.{1,2}/g).join(" ")

  return (
    <div className="dashboard">
      <nav>
        <button type="button" onClick={() => setToggleNotif(!toggleNotif)}>
          <FiBell />
        </button>
        <button
          type="button"
          onClick={() => {
            setToggle(0);
            setDashPage(0);
          }}
        >
          <img src={data.photoProfil} />
          {data.nom || data.prenom}
        </button>
      </nav>
      <main>
        <DashNavbar {...data} toggle={toggle} setToggle={setToggle} />
        <section className="dashboardSection">
          {pageShown()}
          {toggle === 0 && (
            <div className="dashboardWelcome">
              <div className="dashboardProfile">
                <img
                  className="dashboardProfilePic"
                  src={data.photoProfil}
                  alt=""
                  width={70}
                  height={70}
                  loading="lazy"
                />
                <h2>
                  {data.nom}
                  <span>
                    {reviews}
                    <AiFillStar />({data.nbNotes})
                  </span>
                </h2>
                {userType === 'creche' ? (
                  <h1>
                    {data.nom}
                  </h1>
                ) : (
                  <h1>
                    {data.prenom} {data.nomUsage ?? data.nomNaissance}
                  </h1>
                )}
              </div>
              <p className="dashboardProfilePres">{data.description}</p>
              <ul className="dashboardProfilePicList">
                <li>
                  <img src={data?.photoStructure1} alt="" loading="lazy" />
                </li>
                <li>
                  <img src={data?.photoStructure2} alt="" loading="lazy" />
                </li>
                <li>
                  <img src={data?.photoStructure3} alt="" loading="lazy" />
                </li>
              </ul>
              <div className="dashboardProfileContact">
                <p>
                  <AiOutlinePhone />
                  {telephone}
                </p>
                <p>
                  <AiOutlineMail />
                  {data.email}
                </p>
                <p />
              </div>
            </div>
          )}
        </section>
      </main>
      <footer>
        <p>2022 © Babyplace</p>
        <p>
          Crée avec <span>♥</span> Wild Code School x Babyplace
        </p>
      </footer>
      {toggleNotif && (
        <ReactModal
          isOpen={openModal}
          onRequestClose={closeModal}
          className="notifContainer"
        >
          <>
            <div className="notifInner">
              <h2>Notifications</h2>
              <button onClick={() => setToggleNotif(false)}>X</button>
            </div>
            <hr />
            <ul>
              {notif.length ? (
                notif.map(n => (
                  <li
                    onClick={() => {
                      if (n.type === "waiting") {
                        setToggle(1)
                      }
                    }}
                  >
                    <p>{notifContent(n.type)}</p>
                    <button onClick={() => deleteNotification(n.notifId)}>X</button>
                  </li>
                ))
              ) : (
                <li
                  style={{
                    opacity: '0.7'
                  }}
                >
                  Pas de notifications
                </li>
              )}
            </ul>
          </>
        </ReactModal>
      )}
    </div >
  );
}

export default Dashboard;
