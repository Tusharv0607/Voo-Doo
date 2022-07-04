import React from 'react';
import logo from '../Images/Logo.png';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <>
            <div className='container authContainer'>

                <div className='authBox1'>
                    <img className='img boxLogo' src={logo} alt="Voo-Doo" />
                </div>

                <div className='authBox2'>
                    <h2 className='formHead'>Login</h2>
                    <form className='authForm'>
                        <div className="formContainer">
                            <label className='form-content' htmlFor="email">Email</label><br />
                            <input className='form-content' type="text" placeholder="Enter Email" name="email" required /><br />
                            <label className='form-content' htmlFor="psw">Password</label><br />
                            <input className='form-content' type="password" placeholder="Enter Password" name="psw" required /><br />
                            <button className='form-content formBtn' type="submit">Login</button><br />
                            <p className='form-content'>don't have an account! <Link to="/Signup">Signup</Link></p>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Login