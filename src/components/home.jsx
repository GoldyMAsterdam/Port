import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

export default function Home() {
    return (
        <>
        <title>Goldy - Home</title>
        
        <div className="bg-grid min-h-screen flex flex-col relative">
            <nav className="bg-transparent text-gray-100 p-4 fixed w-full top-0 z-10">
                <ul className="flex flex-wrap justify-center space-x-4 md:space-x-8">
                    <li><Link to="/" className="text-teal-400">Home</Link></li>
                    <li><Link to="/about" className="hover:text-teal-400">About</Link></li>
                    <li><Link to="/projects" className="hover:text-teal-400">Projects</Link></li>
                    <li><Link to="/contact" className="hover:text-teal-400">Contact</Link></li>
                </ul>
            </nav>
            
            <div className="bg-grid min-h-screen flex flex-col relative">
                <div className="h-screen flex flex-col items-center justify-center px-4">
                    <h1 className="text-teal-400 text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-wider hover:scale-105 duration-300">Goldy</h1>
                    <h2 className="text-gray-100 text-lg sm:text-xl mt-4 tracking-wide">Junior Web Developer</h2>
                    
                    <div className="mt-6">
                      <svg className="hover:cursor-pointer hover:stroke-teal-400 duration-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                          <path d="M9 18c-4.51 2-5-2-7-2"/>
                      </svg>
                    </div>
                </div>
                
                <div className="flex items-center justify-center mt-8 sm:mt-16 md:mt-20 lg:mt-24 px-4">
                    {/* Grid Parent */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 w-full -translate-y-44 max-w-xl mx-auto">

                        <div className="relative text-center overflow-hidden rounded-xl backdrop-blur-xl group hover:scale-105 duration-300 hover:shadow-lg hover:shadow-teal-400/20 transition-all">
                            {/* Glass look */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-black/60 border border-white/20 rounded-xl"></div>
                            {/* Glow  */}
                            <div className="absolute inset-0 rounded-xl bg-teal-400/10 group-hover:bg-teal-400/15 transition-all duration-300"></div>
                            {/* Content */}
                            <div className="relative px-4 py-6 md:px-6 md:py-8 bg-gray-900/40 h-full z-10">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-400/70 to-transparent group-hover:via-teal-400 transition-all duration-300"></div>
                                <h3 className="text-teal-400 text-lg md:text-xl font-medium mb-2 md:mb-4 group-hover:text-teal-300 transition-colors duration-300">Backend</h3>
                                <p className="text-gray-100 text-center group-hover:text-white transition-colors duration-300">PHP</p>
                            </div>
                        </div>
                        
                        <div className="relative text-center overflow-hidden rounded-xl backdrop-blur-xl group hover:scale-105 duration-300 hover:shadow-lg hover:shadow-teal-400/20 transition-all">
                            {/* Glass look */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-black/60 border border-white/20 rounded-xl"></div>
                            {/* Glow */}
                            <div className="absolute inset-0 rounded-xl bg-teal-400/10 group-hover:bg-teal-400/15 transition-all duration-300"></div>
                            {/* Content */}
                            <div className="relative px-4 py-6 md:px-6 md:py-8 bg-gray-900/40 h-full z-10">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-400/70 to-transparent group-hover:via-teal-400 transition-all duration-300"></div>
                                <h3 className="text-teal-400 text-lg md:text-xl font-medium mb-2 md:mb-4 group-hover:text-teal-300 transition-colors duration-300">Frontend</h3>
                                <p className="text-gray-100 text-center group-hover:text-white transition-colors duration-300">React</p>
                                <p className="text-gray-100 text-center group-hover:text-white transition-colors duration-300">Tailwind</p>
                            </div>
                        </div>

                        <div className="relative text-center overflow-hidden rounded-xl backdrop-blur-xl group hover:scale-105 duration-300 hover:shadow-lg hover:shadow-teal-400/20 transition-all sm:col-span-2 md:col-span-1">
                            {/* Glass look */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-black/60 border border-white/20 rounded-xl"></div>
                            {/* Glow */}
                            <div className="absolute inset-0 rounded-xl bg-teal-400/10 group-hover:bg-teal-400/15 transition-all duration-300"></div>
                            {/* Content */}
                            <div className="relative px-4 py-6 md:px-6 md:py-8 bg-gray-900/40 h-full z-10">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-400/70 to-transparent group-hover:via-teal-400 transition-all duration-300"></div>
                                <h3 className="text-teal-400 text-lg md:text-xl font-medium mb-2 md:mb-4 group-hover:text-teal-300 transition-colors duration-300">Tools</h3>
                                <p className="text-gray-100 text-center group-hover:text-white transition-colors duration-300">GIT</p>
                                <p className="text-gray-100 text-center group-hover:text-white transition-colors duration-300">VS Code</p>
                                <p className="text-gray-100 text-center group-hover:text-white transition-colors duration-300">Figma</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
