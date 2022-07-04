import React from 'react'
import backLogo from '../Images/dwnldImg.png';
import { Link } from 'react-router-dom';

const Spin = () => {
    return (
        <>
            <div className='createContainer'>
                <div className='dwnldBoxes'>
                    <div className='dwnldBox1'>
                        <img className='img backLogo' src={backLogo} alt="Voo-Doo" />
                        <div className='dwnldContent'>
                            <h3 className='dwnldHead'>Download Template</h3>
                            <br />
                            <button className='dwnldBtn upload' type='button' >Download</button>
                        </div>
                    </div>
                    <div className='dwnldBox2'>
                        <img className='img backLogo' src={backLogo} alt="Voo-Doo" />
                        <div className='dwnldContent'>
                            <h3 className='dwnldHead'>Upload Template</h3>
                            <input className='dwnldInput' type="file" id="myfile" name="myfile"></input>
                            <br />
                            <button className='dwnldBtn upload' type='button' >Upload</button>
                        </div>
                    </div>
                </div>
                <div className='btnBar'>
                <div className='btn-btnBar'>
                <Link to="/"  ><button className='sbmtBtn btn1' type='button' >Back</button></Link>
                </div>
                <div className='btn-btnBar'>
                <Link to="/Play" ><button className='sbmtBtn btn2' type='button' >Play Game</button></Link>
                </div>
                </div>
            </div>
        </>
    )
}

export default Spin