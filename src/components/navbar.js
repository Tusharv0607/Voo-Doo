import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/navLogo.png'

const navbar = () => {
    return (
        <div className='navContainer'>
            <nav className="navbar">

                <img className='img navLogo' src={logo} alt="Voo-Doo" />

                <ul className="nav-links">
                    <input type="checkbox" id="checkbox_toggle" />
                    <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
                    <div className="menu">
                        <li><Link type='button' to="/" className='a'>Home</Link></li>
                        <li><Link type='button' to="/About" className='a'>About</Link></li>
                            <div className='navBtns'>
                                <Link to="/Login" className="checkBtn"  ><button className='Btn1' type='button' >Login</button></Link>
                                <Link to="/Signup" className="checkBtn"  ><button className='Btn1' type='button' >Signup</button></Link>
                            </div>
                    </div>
                </ul>
            </nav>
        </div>

    )
}

export default navbar