/* eslint-disable jsx-a11y/anchor-is-valid */
import './Footer.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../asset/img/logo-ALTA-v2.png'
import fbLogo from '../../asset/img/ic_fb@2x.png'
import twitterLogo from '../../asset/img/ic-twitter@2x.png'
import igLogo from '../../asset/img/ic-instagram@2x.png'
import linkLogo from '../../asset/img/ic-linkedin@2x.png'

const Header = () => {
    let history = useNavigate();
    return(
        <div className="pt-5 pb-5 grid grid-cols-12 gap-4 bg-blue-900">
            <img className="w-32 col-start-3 col-span-3" src={logo} alt="alterra" onClick={()=>history('/')}/>
            <div className="col-start-6 col-span-3">
                <p className="text-white">Social Media:</p>
                <div className='flex flex-row'>
                    <a href="https://www.facebook.com/AlterraAcademy"><img className="logo-sosmed" src={fbLogo} alt=""/></a>                            
                    <a href="https://twitter.com/"><img className="logo-sosmed"src={twitterLogo} alt=""/></a>            
                    <a href="https://www.instagram.com/alterra.academy/"><img className="logo-sosmed" src={igLogo} alt=""/></a>            
                    <a href="https://id.linkedin.com/"><img className="logo-sosmed" src={linkLogo} alt=""/></a>
                </div>
            </div>
            <p className="col-start-9 col-span-3 text-white">Copyleft © 2019 - Unjelas Team:</p>           
        </div>
    )
}

export default Header
