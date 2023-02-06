import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import Nav from "@components/dashboard/admin/Nav.admin";
import { useNavigate } from "react-router-dom";
import { AiFillWarning } from 'react-icons/ai';

function Admin() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [userType, setUserType] = useState(null);

  const getStructure = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_PATH}/admin`);
      setData(res.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  const setVerified = async (structureId, email) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_PATH}/admin/verified/${structureId}`,
        {
          id: structureId,
        }
      );
      toast.success("L'utilisateur a bien été approuvé"), sendEmailVerified(email), getStructure();
    } catch (err) {
      console.error(err.message);
    }
  };

  const setRefused = async (structureId, email) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_PATH
        }/admin/refused/${structureId}?type=${userType}`,
        {
          id: structureId,
          type: userType,
        }
      );
      toast.error("L'utilisateur a bien été supprimé"), sendEmailRefused(email), getStructure();
    } catch (err) {
      console.error(err.message);
    }
  };

  const sendEmailVerified = async (email) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_PATH}/contact/messages/accept`,
        { email: email, }
      );
      toast.success("Email de confirmation a bien été envoyé");
    } catch (err) {
      console.error(err.message);
    }
  };

  const sendEmailRefused = async (email) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_PATH
        }/contact/messages/refuse`,
        { email: email, });
      toast.error("Email de refus a bien été envoyé");
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    // if (
    //   window.localStorage.getItem("mail") !== import.meta.env.VITE_ADMIN_EMAIL
    // ) {
    //   toast.error("Vous n'avez pas l'autorisation d'accéder à cette page");
    //   navigate("/");
    // }
    getStructure();
  }, []);


  return (
    <main className="admin">
      <Nav />
      <section className="adminSection">
        <h2>Profils à approuver</h2>
        <ul>
          {data.filter((el) => (el.isSignaled == 0)).map((d) => (
            <li>
              <div className="adminSectionImg">
                <img src={d?.photoProfil} />
                {d.isCreche ? (
                  <p>{d.nom}</p>
                ) : (
                  <p>
                    {d.prenom} {d.nomUsage}
                  </p>
                )}
              </div>
              <div className="adminSectionInfos">
                <p>
                  <span>Email</span> {d.email}
                </p>
                <p>
                  <span>Adresse</span> {d.adresse}
                </p>
              </div>
              <div className="adminSectionBtn">
                <button
                  className="btnApproved"
                  onClick={() => {
                    setVerified(d.structureId, d.email);
                  }}
                >
                  Approuver
                </button>
                <button
                  className="btnRefused"
                  onClick={() => {
                    setRefused(d.structureId, d.email);
                  }}
                >
                  Refuser
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Admin;
