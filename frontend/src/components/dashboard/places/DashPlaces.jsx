import React, { useState } from 'react'
import DashCalendar from '../agenda/calendar/DashCalendar'

function DashPlaces() {

    const [toggleType, setToggleType] = useState(0);

    return (
        <div className='dashPlaces'>
            <section className="agendaSection">
                <h2>Ajouter une place</h2>
                <div className='dashPlacesType'>
                    <button onClick={() => setToggleType(0)} className={toggleType === 0 ? 'selected' : ''}>Occasionnel</button>
                    <button onClick={() => setToggleType(1)} className={toggleType === 1 ? 'selected' : ''}>Récurrent</button>
                </div>
                {toggleType === 0 ? (
                    <ul className='dashPlacesDays'>
                        <li>
                            <span>Lundi</span>
                        </li>
                        <li><span>Mardi</span></li>
                        <li><span>Mercredi</span></li>
                        <li><span>Jeudi</span></li>
                        <li><span>Vendredi</span></li>
                        <li><span>Samedi</span></li>
                        <li><span>Dimanche</span></li>
                    </ul>
                ) : (
                    <DashCalendar />
                )}
            </section>
        </div>
    )
}

export default DashPlaces