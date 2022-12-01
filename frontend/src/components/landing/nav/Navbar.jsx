import React from 'react';
import logo from '@assets/logo.svg';

function Navbar({ userType, setUserType }) {
    return (
        userType === 'parent' ? (
            <nav className='nav'>
                <img src={logo} />
                <button className='textBtn' onClick={() => setUserType('pro')}>Vous êtes professionnel de la petite enfance ?</button>
                <div className='navRight'>
                    <button className='textBtn'>Besoin d'aide ?</button>
                    <button className='connect'>
                        <div>
                            <span>Se connecter</span>
                            <br />
                            <span>Gérer mes rdv</span>
                        </div>
                        <span className='arrow'>➜</span>
                    </button>
                </div>
            </nav>
        ) : (
            <nav className='nav'>
                <p>Logo</p>
                <ul>
                    <li>
                        <button>About</button>
                    </li>
                    <li>
                        <button>Help</button>
                    </li>
                    <li>
                        <button>Features</button>
                    </li>
                    <li>
                        <button>Signup</button>
                    </li>
                </ul>
            </nav>
        )
    )
}

export default Navbar