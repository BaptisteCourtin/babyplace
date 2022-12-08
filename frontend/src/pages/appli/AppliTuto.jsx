import React, { useState } from "react";
import { Link } from "react-router-dom";

import Passer from "@components/appli/pagesTutoAppli/Passer";
import Suivant from "@components/appli/pagesTutoAppli/Suivant";
import Page0 from "../../components/appli/pagesTutoAppli/page0";
import Page1 from "../../components/appli/pagesTutoAppli/page1";

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
          <Link to="/appli/search">
            <Suivant setPageAppli={setPageAppli} />
          </Link>
        )}
      </div>
    </div>
  );
}

export default Appli;
