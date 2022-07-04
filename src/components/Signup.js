import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <>
            <div className='container authContainer'>

                <div className='signupBox1'>
                    <h2 className='formHead'>Signup</h2>
                    <form className='authForm'>
                        <div className="formContainer">
                            <label className='form-content' htmlFor="uName">Name</label><br />
                            <input className='form-content' type="text" placeholder="Enter Name" name="uName" required /><br />
                            <label className='form-content' htmlFor="email">Email</label><br />
                            <input className='form-content' type="text" placeholder="Enter Email" name="email" required /><br />
                            <label className='form-content' htmlFor="psw">Password</label><br />
                            <input className='form-content' type="password" placeholder="Enter Password" name="psw" required /><br />
                            <label className='form-content' htmlFor="cPsw">Confirm Password</label><br />
                            <input className='form-content' type="password" placeholder="Re-Enter Password" name="cPsw" required /><br />
                            <button className='form-content formBtn' type="submit">Signup</button><br />
                            <p className='form-content'>Already have an account! <Link to="/Login">Login</Link></p>
                        </div>
                    </form>
                </div>
                <div className='signupBreak'>or</div>
                <div className='signupBox2'>
                    <div className="signupContainer">
                        <button className='form-content signupBtn' type="submit">Continue with Google <i className="fa-brands fa-google"></i> </button><br />
                        <button className='form-content signupBtn' type="submit">Continue with Microsoft <i className="fa-brands fa-microsoft"></i></button><br />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Signup