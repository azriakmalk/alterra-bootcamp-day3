import React from 'react'
import { useNavigate } from 'react-router-dom'
import bgImage from  '../../asset/img/bg-img.png'
import profilImage from '../../asset/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg'

export default function Home() {
  const history = useNavigate();
  return (
    <div className="pl-80 pr-80 w-auto h-screen bg-no-repeat" style={{backgroundImage: `url(${bgImage})`, backgroundSize: '100%'}}>
      <div className='pt-32 grid grid-cols-2'>
        <img className="rounded-full w-80 h-80" src={profilImage} alt="profile img"></img>
        <div>
          <p className="text-2xl font-bold text-indigo-700">Hi, my name is</p>
          <p className="mt-5 text-8xl font-bold text-indigo-700">Anne Sullivan</p>
          <p className="mt-5 text-3xl font-bold text-indigo-700">I build things for the web</p>
          <p className="mt-10 pr-5 pl-5 pt-3 pb-4 w-40 text-center text-white bg-amber-500 rounded-full cursor-pointer" onClick={()=>history("/about")}>Get In Touch</p>
        </div>
      </div>
    </div>
  )
}
