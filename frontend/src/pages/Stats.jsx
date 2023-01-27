import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import Nav from "@components/dashboard/admin/Nav.admin";

function Stats() {
  const [assMat, setAssMat] = useState([]);
  const [creche, setCreche] = useState([]);
  const [famille, setFamille] = useState([]);

  const getAssMat = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_PATH}/admin/assmat`);
      setAssMat(res.data);
    } catch (err) {
      toast.error(err.message);
    }
  };

  const getCreche = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_PATH}/admin/creche`);
      setCreche(res.data);
    } catch (err) {
      toast.error(err.message);
    }
  };

  const getFamille = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_PATH}/admin/famille`);
      setFamille(res.data);
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    getAssMat();
    getCreche();
    getFamille();
  }, []);

  return (
    <main className="stats">
      <Nav />
      <section className="statsNumbers">
        <h2>Nombre d'utilisateurs</h2>
        <ul>
          <li>
            <span>{assMat.length}</span>
            Assistantes
            <br /> Maternelles
          </li>
          <li>
            <span>{creche.length}</span>
            Crèches
          </li>
          <li>
            <span>{famille.length}</span>
            Familles
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Stats;
