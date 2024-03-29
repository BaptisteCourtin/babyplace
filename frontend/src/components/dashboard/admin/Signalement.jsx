import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import Nav from "@components/dashboard/admin/Nav.admin";
import { AiFillWarning } from "react-icons/ai";
import { BiMailSend } from "react-icons/bi";

function Signalement() {
  const [data, setData] = useState([]);
  const [userType, setUserType] = useState(null);

  const [newGet, setNewGet] = useState(true);

  const getStructure = async (source) => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_PATH}/admin`, {
        cancelToken: source.token,
      });
      setData(res.data);
    } catch (err) {
      if (err.code === "ERR_CANCELED") {
        console.warn("cancel request");
      } else {
        console.error(err);
      }
    }
  };

  const setUnsignaled = (structureId, email) => {
    axios.put(`${import.meta.env.VITE_PATH}/admin/unsignaled/${structureId}`);
    toast.success("L'utilisateur a bien été ré-approuvé");
    setNewGet(!newGet);
  };

  const setSupprim = async (structureId, email) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_PATH}/admin/refused/${structureId}`,
        {
          id: structureId,
        }
      );
      toast.error("L'utilisateur a bien été supprimé"),
        sendEmailSupprimer(email),
        setNewGet(!newGet);
    } catch (err) {
      console.error(err.message);
    }
  };

  const sendEmailVerifiedAgain = async (email) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_PATH}/contact/messages/reaccept`,
        { email }
      );
      toast.success("Email de confirmation a bien été envoyé");
    } catch (err) {
      console.error(err.message);
    }
  };

  const sendEmailSupprimer = async (email) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_PATH}/contact/messages/supprimer`,
        { email }
      );
      toast.error("Email de refus a bien été envoyé");
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    const source = axios.CancelToken.source();
    getStructure(source);
    return () => {
      source.cancel();
    };
  }, [newGet]);

  return (
    <main className="signalement">
      <Nav />
      <section className="signalementSection">
        <h2>Profils à controller</h2>
        <ul>
          {data
            .filter((el) => el.isSignaled == 1)
            .map((d) => (
              <li>
                <div className="signalementSectionImg">
                  <img src={d?.photoProfil} />
                  {d.isCreche ? (
                    <p>{d.nom}</p>
                  ) : (
                    <p>
                      {d.prenom} {d.nomUsage}
                    </p>
                  )}
                  <span>
                    <AiFillWarning id="warning" />
                  </span>
                </div>
                <div className="signalementSectionInfos">
                  <p>
                    <span>Email</span> {d.email}
                  </p>
                  <p>
                    <span>Adresse</span> {d.adresse}
                  </p>
                </div>
                <div className="signalementSectionBtn">
                  <button
                    type="button"
                    className="btnApprovedAgain"
                    onClick={() => {
                      setUnsignaled(d.structureId, d.email);
                    }}
                  >
                    Enlever Signalement
                  </button>
                  <button
                    type="button"
                    className="btnMail"
                    onClick={() => {
                      sendEmailVerifiedAgain(d.email);
                    }}
                  >
                    Contacter <BiMailSend id="iconMail" />
                  </button>
                  <button
                    type="button"
                    className="btnCancel"
                    onClick={() => {
                      setSupprim(d.structureId, d.email);
                    }}
                  >
                    Supprimer Profil
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </section>
    </main>
  );
}

export default Signalement;
