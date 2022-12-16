import React from "react";
import PropTypes from "prop-types";

function BlocJour({ dataHorairesId }) {
  // changer pour que lundi prenne Lundi et pas [0]
  const tabJour = [
    { jour: "Lun", check: dataHorairesId[0].ouvert },
    { jour: "Mar", check: dataHorairesId[1].ouvert },
    { jour: "Mer", check: dataHorairesId[2].ouvert },
    { jour: "Jeu", check: dataHorairesId[3].ouvert },
    { jour: "Ven", check: dataHorairesId[4].ouvert },
    { jour: "Sam", check: dataHorairesId[5].ouvert },
    { jour: "Dim", check: dataHorairesId[6].ouvert },
  ];

  return (
    <>
      {tabJour.map((each) => (
        <div className={each.check ? "daygreen" : "daygray"}>
          <p className="each-jour">{each.jour}</p>
        </div>
      ))}
    </>
  );
}

BlocJour.propTypes = {
  dataHorairesId: PropTypes.string.isRequired,
};

export default BlocJour;
