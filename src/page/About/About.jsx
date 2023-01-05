import React from 'react'
import profilImage from '../../asset/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg'

export default function about() {
  return (
    <div className='pb-10'>
        <div className="w-auto h-40 bg-indigo-50 grid grid-cols-6 content-center">
            <p className="col-start-2 text-5xl font-bold text-indigo-700">About Me</p>
        </div>
        <div className="pl-80 mt-10 grid grid-cols-2 justify-items-center">
            <div className=''>
                <p>
                    Hello! I’m Anne Sullivan, a full-stack engineer based in Malang, IDN who enjoys building things that live on the internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends. <br/><br/>
                    Shortly after graduating from Alterra Academy, I joined the engineering team at Alterra where I work on a wide variety of interesting and meaningful projects on a daily basis. <br/><br/>
                    Here’s few technologies I’ve been working with recently :
                </p>
                <table className="mt-5 border-collapse table-auto">
                    <tbody>
                        <tr>
                            <td className="p-3 border border-black">HTML & CSS</td>
                            <td className="p-3 border border-black">Serverless</td>
                            <td className="p-3 border border-black">Scrum</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-black">Programming</td>
                            <td className="p-3 border border-black">Restful API</td>
                            <td className="p-3 border border-black">Test-Driven Dev</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-black">Database</td>
                            <td className="p-3 border border-black">Javascript</td>
                            <td className="p-3 border border-black">Software Testing</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-black">Git & Github</td>
                            <td className="p-3 border border-black">Sigle Page App</td>
                            <td className="p-3 border border-black">UX/UI Designer</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="pr-80">
                <img className="w-80 h-80 rounded-2xl" src={profilImage} alt="profile img"></img>
            </div>
        </div>
    </div>
  )
}
