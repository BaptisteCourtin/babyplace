import React, { useState } from "react";
import { Link } from "react-router-dom";

import Passer from "@components/appli/buttons/Passer";
import Suivant from "@components/appli/buttons/Suivant";
import Page0 from "../components/appli/pagesAppli/page0";
import Page1 from "../components/appli/pagesAppli/page1";

function Appli() {
  const [pageAppli, setPageAppli] = useState(true);

  return (
    <div className="applituto">
      {pageAppli ? <Page0 /> : <Page1 />}

      <div className="button">
        <Passer />

        {pageAppli ? (
          <Suivant setPageAppli={setPageAppli} />
        ) : (
          <Link to="/appli/home">
            <Suivant setPageAppli={setPageAppli} />
          </Link>
        )}
      </div>
    </div>
  );
}

export default Appli;
