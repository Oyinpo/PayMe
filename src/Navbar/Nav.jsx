import React, {useState} from 'react';
import '../Styles/Nav.css'
import logo from '../assets/Payme.png'
import { Link } from 'react-router-dom';
import '../styles/Nav.css'
import {GoThreeBars} from 'react-icons/go'
import {FaRegTimesCircle} from 'react-icons/fa'



const Nav = () =>{
    const [mobile, setMobile]= useState(false)
    const handleMobile=()=>{
        setMobile(!mobile)
    }
    const handleClose=()=>{
        setMobile(false)
    }
 
    return(
    <div className='nav'>
        <div className='logo-nav'>
            <div>
                <img src={logo}/>
            </div>
            <div className= {mobile? "MobileLink":'link'}>
                <div className='link-in'>
                    <Link to="/" onClick={handleClose}>Home</Link>
                    <Link to="/*" onClick={handleClose}>About</Link>
                    <Link to="/*" onClick={handleClose}>Testimonials</Link>
                    <Link to="/*" onClick={handleClose}>Contact</Link>
                </div>
                <div className='sign'>
                    <div className='in'>
                        <Link  to="/*" onClick={handleClose}> <button>Sign in</button></Link>
                    </div>
                    <div className='up'>
                        <Link  to="/*" onClick={handleClose}> <button>Sign up</button></Link>
                    </div>
                </div>
            </div>
        </div>
      
        <div className='menu-bars'>
                {mobile? <FaRegTimesCircle className='times' onClick={handleMobile}/>
                :
                <GoThreeBars className='bars' onClick={handleMobile}/>
                }
            </div>
    </div>

    )
}

export default Nav