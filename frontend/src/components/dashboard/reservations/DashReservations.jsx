import React, { useEffect, useState } from 'react';
import { MdOutlineCancel, MdCheckCircleOutline } from 'react-icons/md';
import { GoFile } from 'react-icons/go';
import logo from '@assets/logo5white.svg';

function DashReservations() {

    const children = [
        {
            name: 'baby1',
            age: '14 mois',
            parent: 'father',
            profile: '80%',
            day: '6 déc',
            comingHour: 7,
            leavingHour: 18,
            status: 'approved'
        },
        {
            name: 'baby2',
            age: '20 mois',
            parent: 'mother',
            profile: '100%',
            day: '8 déc',
            comingHour: 8,
            leavingHour: 18,
            status: 'waiting'
        },
        {
            name: 'baby3',
            age: '18 mois',
            parent: 'mother',
            profile: '40%',
            day: '6 déc',
            comingHour: 10,
            leavingHour: 14,
            status: 'refused'
        },
        {
            name: 'baby4',
            age: '10 mois',
            parent: 'father',
            profile: '100%',
            day: '7 déc',
            comingHour: 7,
            leavingHour: 16,
            status: 'canceled'
        },
        {
            name: 'baby5',
            age: '22 mois',
            parent: 'mother',
            profile: '90%',
            day: '9 déc',
            comingHour: 8,
            leavingHour: 20,
            status: 'approved'
        },
        {
            name: 'baby6',
            age: '10 mois',
            parent: 'father',
            profile: '100%',
            day: '12 déc',
            comingHour: 9,
            leavingHour: 17,
            status: 'waiting'
        }
    ];

    const [statusToggle, setStatusToggle] = useState(0);
    const [filteredChildren, setFilteredChildren] = useState([]);

    const [approvedModal, setApprovedModal] = useState(false);
    const [refusedModal, setRefusedModal] = useState(false);
    const handleApprovedClick = () => {
        setApprovedModal(true);
        setRefusedModal(false);
    }

    const handleRefusedClick = () => {
        setApprovedModal(false);
        setRefusedModal(true);
    }

    const totalHour = children.leavingHour - children.comingHour;

    const hourlyPrice = 5;

    useEffect(() => {
        setFilteredChildren(
            children.filter(c => {
                if (statusToggle === 0) return c
                else if (statusToggle === 1) return c.status.includes('approved')
                else if (statusToggle === 2) return c.status.includes('waiting')
                else if (statusToggle === 3) return c.status.includes('refused')
                else if (statusToggle === 4) return c.status.includes('canceled')
            })
        )
    }, [statusToggle])

    return (
        <div className='dashReservations'>
            <div className='dashReserFilters'>
                <h2>Vos réservations</h2>
                <div className='reserBtn'>
                    <button onClick={() => setStatusToggle(0)} className={statusToggle === 0 ? 'selected' : ''}>Toutes</button>
                    <button onClick={() => setStatusToggle(1)} className={statusToggle === 1 ? 'selected' : ''}>Accepté</button>
                    <button onClick={() => setStatusToggle(2)} className={statusToggle === 2 ? 'selected' : ''}>En attente</button>
                    <button onClick={() => setStatusToggle(3)} className={statusToggle === 3 ? 'selected' : ''}>Refusé</button>
                    <button onClick={() => setStatusToggle(4)} className={statusToggle === 4 ? 'selected' : ''}>Annulé</button>
                </div>
            </div>
            <ul className='reserList'>
                {filteredChildren.map(c => (
                    <li
                        style={{
                            border: (() => {
                                if (c.status === 'approved') {
                                    return "1px solid #2dcd7a";
                                }
                                if (c.status === 'waiting') {
                                    return "1px solid #FFA84C";
                                }
                                if (c.status === 'refused') {
                                    return "1px solid #EF3672";
                                }
                                if (c.status === 'canceled') {
                                    return "1px solid #4b5d68"
                                }
                            })(),
                            opacity: (() => {
                                if (c.status === 'canceled' || c.status === 'refused') {
                                    return "0.4"
                                } return "1"
                            })()
                        }}
                    >
                        <p className='reserStatusColor' style={{
                            backgroundColor: (() => {
                                if (c.status === 'approved') {
                                    return "#2dcd7a";
                                }
                                if (c.status === 'waiting') {
                                    return "#FFA84C";
                                }
                                if (c.status === 'refused') {
                                    return "#EF3672";
                                }
                                if (c.status === 'canceled') {
                                    return "#4b5d68"
                                }
                            })(),
                        }}></p>
                        <div className='reserInfo1'>
                            <p>
                                {c.name}
                            </p>
                            <p>
                                {c.age}
                            </p>
                        </div>
                        <div className='reserInfo2'>
                            <p>{c.parent}</p>
                            <p>Profil {c.profile}</p>
                        </div>
                        <div className='reserInfo3'>
                            <p>
                                <span>Date d'arrivée</span>
                                <br />
                                {c.day} / {c.comingHour}:00
                            </p>
                            <p>
                                <span>Date de départ</span>
                                <br />
                                {c.day} / {c.leavingHour}:00
                            </p>
                        </div>
                        <div className='reserInfo4'>
                            <p>{c.leavingHour - c.comingHour}H</p>
                            <p>{(c.leavingHour - c.comingHour) * hourlyPrice}€</p>
                        </div>
                        {c.status === 'waiting' ? (
                            <div className='reserChoice'>
                                <button onClick={handleApprovedClick}>
                                    <MdCheckCircleOutline />Accepter
                                </button>
                                <button onClick={handleRefusedClick}>
                                    <MdOutlineCancel /> Refuser
                                </button>
                            </div>
                        ) : (
                            <div className='reserModif'>
                                <button><GoFile />Modifier</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            {approvedModal && (
                <div className='approvedModal'>
                    <div className="approvedModalInner">
                        <div className='approvedModalImg'>
                            <img src="https://randomuser.me/api/portraits/med/men/64.jpg" alt="" />
                            <img src={logo} alt="" />
                            <img src="https://randomuser.me/api/portraits/med/women/64.jpg" alt="" />
                        </div>
                        <h2>Fantastique !</h2>
                        <p>Vous avez approuvé la demande de garde pour </p>
                        <div className='approvedModalBtn'>
                            <button>Envoyer un message</button>
                            <button onClick={() => setApprovedModal(false)}>Fermer</button>
                        </div>
                    </div>
                </div>
            )}
            {refusedModal && (
                <div className='refusedModal'>
                    <div className="refusedModalInner">
                        <div className='refusedModalImg'>
                            <img src="https://randomuser.me/api/portraits/med/men/64.jpg" alt="" />
                            <img src={logo} alt="" />
                            <img src="https://randomuser.me/api/portraits/med/women/64.jpg" alt="" />
                        </div>
                        <h2>Dommage !</h2>
                        <p>Vous avez refusé la demande de garde pour </p>
                        <button onClick={() => setRefusedModal(false)}>Fermer</button>
                    </div>
                </div>
            )}
        </div >
    )
}

export default DashReservations