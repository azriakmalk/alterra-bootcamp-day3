/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../asset/img/logo-ALTA@2x.png'

const Header = () => {
    let history = useNavigate();
    return(
        <div className="ml-10 pb-5 pt-1 grid grid-cols-6 gap-4">
            <img className="w-32 col-start-2" src={logo} alt="alterra" onClick={()=>history('/')}/>
            <div className="grid grid-cols-4 col-start-4 col-span-2 content-center">
                <p className="hover:cursor-pointer" onClick={()=>{history('/')}}>HOME</p>
                <p className="hover:cursor-pointer" onClick={()=>{history('/about')}}>ABOUT</p>
                <p className="hover:cursor-pointer" onClick={()=>{history('/')}}>EXPERIENCE</p>
                <p className="hover:cursor-pointer" onClick={()=>{history('/contact')}}>CONTACT</p>
            </div>                       
        </div>
    )
}

export default Header
