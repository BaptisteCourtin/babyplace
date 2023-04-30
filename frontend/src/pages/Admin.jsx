import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import Nav from "@components/dashboard/admin/Nav.admin";
import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [userType, setUserType] = useState(null);

  const [newGet, setNewGet] = useState(true);

  // --- get not verify OU signalé ---
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

  useEffect(() => {
    // if (
    //   window.localStorage.getItem("mail") !== import.meta.env.VITE_ADMIN_EMAIL
    // ) {
    //   toast.error("Vous n'avez pas l'autorisation d'accéder à cette page");
    //   navigate("/");
    // }
    const source = axios.CancelToken.source();
    getStructure(source);
    return () => {
      source.cancel();
    };
  }, [newGet]);

  // --- update en vérifié et non signalé ---
  const setVerified = async (structureId, email) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_PATH}/admin/verified/${structureId}`,
        {
          id: structureId,
        }
      );
      toast.success("L'utilisateur a bien été approuvé"),
        sendEmailVerified(email),
        setNewGet(!newGet);
    } catch (err) {
      console.error(err.message);
    }
  };

  // --- delete la structure ---
  const setRefused = async (structureId, email) => {
    try {
      await axios.delete(
        `${
          import.meta.env.VITE_PATH
        }/admin/refused/${structureId}?type=${userType}`,
        {
          id: structureId,
          type: userType,
        }
      );
      toast.error("L'utilisateur a bien été supprimé"),
        sendEmailRefused(email),
        setNewGet(!newGet);
    } catch (err) {
      console.error(err.message);
    }
  };

  // --- envoie accepation par email ---
  const sendEmailVerified = async (email) => {
    try {
      await axios.post(`${import.meta.env.VITE_PATH}/contact/messages/accept`, {
        email,
      });
      toast.success("Email de confirmation a bien été envoyé");
    } catch (err) {
      console.error(err.message);
    }
  };

  // --- envoie refus par email ---
  const sendEmailRefused = async (email) => {
    try {
      await axios.post(`${import.meta.env.VITE_PATH}/contact/messages/refuse`, {
        email,
      });
      toast.error("Email de refus a bien été envoyé");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <main className="admin">
      <Nav />
      <section className="adminSection">
        <h2>Profils à approuver</h2>
        <ul>
          {data
            .filter((el) => el.isSignaled == 0)
            .map((d, index) => (
              <li key={index}>
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
