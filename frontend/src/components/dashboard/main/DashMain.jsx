import React from "react";
import { AiFillStar, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

function DashMain({ pageShown, toggle, data, userType }) {
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

  return (
    <main className="dashboardSection">
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
            {userType === "creche" ? (
              <h1>{data.nom}</h1>
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
              {data.telephone}
            </p>
            <p>
              <AiOutlineMail />
              {data.email}
            </p>
            <p />
          </div>
        </div>
      )}
    </main>
  );
}

export default DashMain;
