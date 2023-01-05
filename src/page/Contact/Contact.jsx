import React, { useEffect, useState } from 'react'
import logo from '../../asset/img/logo-ALTA-v2@2x.png'
import bgImg from '../../asset/img/charles-rRWiVQzLm7k-unsplash.jpg'

export default function Contact() {
    const [nation, setNation] = useState([]);
    useEffect(() => {
        async function fetchData() {
            let nation = await fetch(`https://restcountries.com/v2/all`);
            nation = await nation.json();
            setNation(nation)
        };
        fetchData();
    },[]);
    
  return (
    <div className="grid grid-cols-2">
        <div className="bg-gradient-to-tl pl-80 pr-80 w-auto h-screen bg-no-repeat grid grid-cols-1 content-center" style={{backgroundImage: `url(${bgImg})`, backgroundSize: '100%'}}>
            <img className="h-40 w-auto" src={logo} alt=""/>
        </div>
        <div className=''>
        <p className="ml-10 mb-5 text-3xl font-bold">Contact Us</p>
        <form>
                <div className="flex flex-col ml-10 mb-5">
                    <label htmlFor="nama" className="required">Full Name</label>
                    <input type="text" className="border-2 p-2 border-slate-300" id="namalengkap" placeholder="Your Full Name Here..."/>
                </div>
                <div className="flex flex-col ml-10 mb-5">
                    <label htmlFor="alamatemail" className="required">Email Address</label>
                    <input type="text" className="border-2 p-2 border-slate-300" id="emailbaru" aria-describedby="emailHelp" placeholder="example@domail.com"/>
                </div>
                <div className="flex flex-col ml-10 mb-5">
                    <label htmlFor="telepon" className="required">Phone Number</label>
                    <input type="text" className="border-2 p-2 border-slate-300" id="phonenumber" aria-describedby="nomorbaru" placeholder="08573890xxxxx"/>
                </div>
                <div className="flex flex-col ml-10 mb-5">
                    <label htmlFor="kewarganegaraan">Nationality</label>
                    <select className="border-2 p-2 border-slate-300">
                        <option>Selected</option>
                        {nation.map((item, index) => {
                            return <option key={index}>{item.name}</option>
                        })}
                    </select>
                </div>
                <div className="flex flex-col ml-10 mb-5">
                    <label htmlFor="message">Message:</label>
                    <textarea className="border-2 p-2 border-slate-300" rows="5" id="message"></textarea>
                </div> 
                    <button className="ml-10 pt-2 pb-2 w-28 text-center text-white bg-amber-500 rounded-full" onClick={()=>alert('Pesan telah dikirim')}>Submit</button>
                </form>
        </div>
    </div>
  )
}
