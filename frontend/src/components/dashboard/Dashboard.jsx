import React, { useState } from 'react';
import DashNavbar from './nav/DashNavbar';

import { FiBell } from 'react-icons/fi';
import DashSettings from './settings/DashSettings';
import DashReservations from './reservations/DashReservations';
import DashAgenda from './agenda/DashAgenda';
import DashPlaces from './places/DashPlaces';

function Dashboard() {

    const [toggle, setToggle] = useState(0);
    const pageShown = () => {
        if (toggle === 1) {
            return <DashReservations />
        } else if (toggle === 2) {
            return <DashAgenda />
        } else if (toggle === 3) {
            return <DashPlaces />
        } else if (toggle === 4) {
            return <DashSettings />
        }
    }

    return (
        <div className='dashboard'>
            <nav>
                <button><FiBell /></button>
                <button>Kévin</button>
            </nav>
            <main>
                <DashNavbar toggle={toggle} setToggle={setToggle} />
                <section className='dashboardSection'>
                    {pageShown()}
                </section>
            </main>
            <footer>
                <p>2022 © Babyplace</p>
                <p>Crée avec <span>♥</span> Wild Code School x Babyplace</p>
            </footer>
        </div>
    )
}

export default Dashboard