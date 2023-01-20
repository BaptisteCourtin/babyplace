import React from 'react'

function InfoDashReservations({ r, tarifHeure }) {
    return (
        <>
            <div className="reserInfo1">
                <p>{r.prenomEnfant} <br /> {r.nomEnfant}</p>
                <p>{r.ageEnfant} mois</p>
            </div>
            <div className="reserInfo2">
                <p>{r.prenomParent} <br /> {r.nomParent}</p>
                <p>Profil {r.pourcentProfil} %</p>
            </div>
            <div className="reserInfo3">
                <p>
                    <span>Dates</span>
                    <br />
                    {r.dateArrivee} / {r.dateDepart}
                </p>
                <p>
                    <span>Horaires</span>
                    <br />
                    {r.heureArrivee} / {r.heureDepart}
                </p>
            </div>
            <div className="reserInfo4">
                <p>
                    {r.heureDepart.replace(':00', '') - r.heureArrivee.replace(':00', '')}H
                </p>
                <p>
                    {(r.heureDepart.replace(':00', '') - r.heureArrivee.replace(':00', '')) * tarifHeure}€
                </p>
            </div>
        </>
    )
}

export default InfoDashReservations