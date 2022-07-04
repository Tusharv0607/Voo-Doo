import React from 'react'
import hLogo from '../Images/Home/hLogo.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className='homeContainer'>
                <div className='box1'>
                    <img className='img hLogo' src={hLogo} alt="Voo-Doo" />
                </div>
                <div className='box2'>
                    <div className='subBox'>
                        <Link to='/Spin' className='tile1 tile'><h3 className='tileText tileText1'>Spin</h3> </Link>
                       <Link to='/' className='tile2 tile'><h3 className='tileText tileText2'>Alchemy</h3></Link>
                    </div>
                    <div className='subBox'>
                        <Link to='/About' className='tile3 tile'><h3 className='tileText tileText3'>About</h3> </Link>
                        <Link to='/Help' className='tile4 tile'> <h3 className='tileText tileText4'>Help</h3></Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home