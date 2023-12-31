import React from 'react';
import cyberpunk from '../assets/cyberpunk_block.png';
import {RiArrowRightSFill} from 'react-icons/ri';



const Home = ()=>{
    return(
        <div name ="home" className= 'h-screen w-full bg-gradient-to-b from-black via-black to-gray-900'>
            <div className = "max-w-screen-lg mx-auto flex flex-xol items-center justify-center h-full px-4 md:flex-row">
                <div className = 'flex flex-col justify-center h-full'>
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">I am a Full Stack Developer</h2>
                    <p className='text-gray-300 py-4 max-w-md'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    <div>
                        <button className = " group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-fuchsia-600 to-purple-800">
                            Portfolio
                            <span className ="group-hover:rotate-90 duration-300">
                                <RiArrowRightSFill size={25} className = "ml-1"/>
                            </span>
                        </button>
                    </div>
                </div>
                <div>
                    <img className = "rounded-2xl mx-auto w-2/3 md:w-full" src ={cyberpunk} alt = 'my profile'/>
                </div>
            </div>
        </div>
          
    
    )
}

export default Home
