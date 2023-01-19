import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import Nav from "@components/dashboard/admin/Nav.admin";

function Admin() {
  const [data, setData] = useState([]);
  const [userType, setUserType] = useState(null);

  const getStructure = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/admin`);
      setData(res.data);
    } catch (err) {
      toast.error(err.message);
    }
  };

  const setVerified = async (structureId) => {
    try {
      await axios.put(`http://localhost:5000/admin/verified/${structureId}`, {
        id: structureId,
      });
      toast.success("L'utilisateur a bien été approuvé"), getStructure();
    } catch (err) {
      console.error(err.message);
    }
  };

  const setRefused = async (structureId) => {
    try {
      await axios.delete(
        `http://localhost:5000/admin/refused/${structureId}?type=${userType}`,
        {
          id: structureId,
          type: userType,
        }
      );
      toast.error("L'utilisateur a bien été supprimé"), getStructure();
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getStructure();
  }, []);

  return (
    <main className="admin">
      <Nav />
      <section className="adminSection">
        <h2>Profils à approuver</h2>
        <ul>
          {data.map((d) => (
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
                    setVerified(d.structureId);
                  }}
                >
                  Approuver
                </button>
                <button
                  className="btnRefused"
                  onClick={() => {
                    setRefused(d.structureId);
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
