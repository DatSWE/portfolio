import React from "react";
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import reactImage from "../assets/react.png"
import Django from "../assets/Django.png"  // Django
import graphql from "../assets/graphql.png"  // FastAPI
import github from "../assets/github.png"  //Docker
import tailwind from "../assets/tailwind.png"  //need to add bootstrap
import Docker from "../assets/Docker.png"
import Python from "../assets/Python.png"
import FastAPI from "../assets/Fastapi.svg"
import Bootstrap from "../assets/Bootstrap.png"
import Postgres from "../assets/Postgres.png"

// import more as needed


const Experience =() =>{

    const techs =[
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:javascript,
            title:'JAVASCRIPT',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:reactImage,
            title:'REACT',
            style:'shadow-blue-600'
        },
        {
            id:5,
            src:tailwind,
            title:'TAILWIND',
            style:'shadow-sky-400'
        },
        {
            id:6,
            src:Django,
            title:'DJANGO',
            style:'shadow-green-800'
        },
        {
            id:7,
            src:Python,
            title:'PYTHON',
            style:'shadow-yellow-500'
        },
        {
            id:8,
            src:github,
            title:'GITHUB',
            style:'shadow-gray-300'
        },
        {
            id:9,
            src:Docker,
            title:'DOCKER',
            style:'shadow-blue-600'
        },
        {
            id:10,
            src:FastAPI,
            title:'FASTAPI',
            style:'shadow-teal-500'
        },
        {
            id:11,
            src:Bootstrap,
            title:'BOOTSTRAP',
            style:'shadow-purple-600'
        },
        {
            id:12,
            src:Postgres,
            title:'POSTGRES',
            style:'shadow-white'
        }

    ]
    return (
        <div name= "experience" className = "bg-gradient-to-b from-gray-900 to-black w-full h-screen">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
                    <p className ="py-6">Technologies I have worked with</p>
                </div>
                
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {techs.map(({id,src,title,style})=>(
                         <div key ={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                         <img src ={src} alt ="" className="w-20 mx-auto" width={80} height={80}/>
                         <p className="mt-4">{title}</p>
                     </div>

                    ))}
                </div>
            </div>
        </div>

    )
};

export default Experience
