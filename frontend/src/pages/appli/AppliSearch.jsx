import React, { useState, useEffect } from "react";
import axios from "axios";

import NavbarApp from "@components/appli/navbar/NavbarApp";
import BaseCard from "@components/appli/recherche/BaseCard";
import BaseMap from "@components/appli/recherche/BaseMap";

function AppliSearch() {
  const [compo, setCompo] = useState(0);

  const [tri, setTri] = useState("Recent");
  const [structure, setStructure] = useState([]);

  const Token =
    "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
  const getStructure = () => {
    axios
      .get("http://localhost:5000/structure/allapp", {
        headers: {
          "x-token": Token,
        },
      })
      .then((res) => {
        setStructure(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getStructure();
  }, []);

  const choixComposant = () => {
    if (compo === 1) {
      return (
        <BaseMap
          setCompo={setCompo}
          setTri={setTri}
          tri={tri}
          Allstructure={structure}
        />
      );
    }
    return (
      <BaseCard
        setCompo={setCompo}
        setTri={setTri}
        tri={tri}
        Allstructure={structure}
      />
    );
  };

  return (
    <div className="applisearch">
      {choixComposant()}

      <NavbarApp />
    </div>
  );
}

export default AppliSearch;
