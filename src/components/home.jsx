import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

export default function Home() {
    return (
        <>
            <title>Goldy - Home</title>
        
            <div className="bg-grid scroll-smooth min-h-screen flex flex-col relative">
                <nav className="bg-transparent backdrop-blur-sm text-gray-100 py-4 px-2 sm:px-4 fixed w-full top-0 z-10 border-b border-white/5">
                    <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                        <li><Link to="/" className="text-teal-400 text-sm sm:text-base hover:scale-105 transition-all">Home</Link></li>
                        <li><Link to="/about" className="hover:text-teal-400 transition-colors text-sm sm:text-base hover:scale-105 ">About</Link></li>
                        <li><Link to="/projects" className="hover:text-teal-400 transition-colors text-sm sm:text-base hover:scale-105">Projects</Link></li>
                        <li><Link to="/contact" className="hover:text-teal-400 transition-colors text-sm sm:text-base hover:scale-105">Contact</Link></li>
                    </ul>
                </nav>
                
                <div className="bg-grid min-h-screen flex flex-col relative">

                    <div className="h-screen flex flex-col items-center justify-center px-4">
                        <h1 className="text-teal-400 text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-wider hover:scale-105 duration-300">Goldy</h1>
                        <h2 className="text-gray-100 text-base sm:text-lg md:text-xl mt-2 sm:mt-4 tracking-wide">Junior Web Developer</h2>
                        
                        <div className="mt-4 sm:mt-6">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                                <svg className="hover:cursor-pointer hover:stroke-teal-400 duration-300 transform hover:scale-110 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                                    <path d="M9 18c-4.51 2-5-2-7-2"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                    {/* Skills */}
                    <div className="flex items-center justify-center px-4 pb-16 w-full">
                        {/* Grid Parent */}
                        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 w-full 
                            max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto 
                            -translate-y-5 xs:-translate-y-24 sm:-translate-y-12 md:-translate-y-10 lg:-translate-y-20">

                            {/* Backend */}
                            <div className="relative text-center overflow-hidden rounded-lg md:rounded-xl backdrop-blur-xl group 
                                hover:scale-105 duration-300 hover:shadow-lg hover:shadow-teal-400/30 transition-all border border-white/10">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-black/70 rounded-lg md:rounded-xl"></div>
                                
                                <div className="absolute inset-0 rounded-lg md:rounded-xl bg-teal-400/10 group-hover:bg-teal-400/20 transition-all duration-300"></div>
                                
                                {/* Content */}
                                <div className="relative px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 h-full z-10">
                                    {/* Top Border */}
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-70 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300"></div>
                                
                                    <h3 className="text-teal-400 text-lg sm:text-xl md:text-xl font-medium mb-2 sm:mb-3 md:mb-4 group-hover:text-teal-300 transition-colors duration-300">Backend</h3>
                                    <div className="flex justify-center">
                                        <span className="px-3 sm:px-4 py-1 bg-gray-800/80 rounded-full text-gray-100 text-sm group-hover:bg-teal-900/50 transition-all duration-300">PHP</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Frontend */}
                            <div className="relative text-center overflow-hidden rounded-lg md:rounded-xl backdrop-blur-xl group 
                                hover:scale-105 duration-300 hover:shadow-lg hover:shadow-teal-400/30 transition-all border border-white/10">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-black/70 rounded-lg md:rounded-xl"></div>
                                
                                <div className="absolute inset-0 rounded-lg md:rounded-xl bg-teal-400/10 group-hover:bg-teal-400/20 transition-all duration-300"></div>
                                
                                {/* Content */}
                                <div className="relative px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 h-full z-10">
                                    {/* Top Border */}
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-70 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300"></div>
                                    
                                    <h3 className="text-teal-400 text-lg sm:text-xl md:text-xl font-medium mb-2 sm:mb-3 md:mb-4 group-hover:text-teal-300 transition-colors duration-300">Frontend</h3>
                                    <div className="flex flex-col items-center space-y-2">
                                        <span className="px-3 sm:px-4 py-1 bg-gray-800/80 rounded-full text-gray-100 text-sm group-hover:bg-teal-900/50 transition-all duration-300">React</span>
                                        <span className="px-3 sm:px-4 py-1 bg-gray-800/80 rounded-full text-gray-100 text-sm group-hover:bg-teal-900/50 transition-all duration-300">Tailwind</span>
                                    </div>
                                </div>
                            </div>

                            {/* Tools */}
                            <div className="relative text-center overflow-hidden rounded-lg md:rounded-xl backdrop-blur-xl group 
                                hover:scale-105 duration-300 hover:shadow-lg hover:shadow-teal-400/30 transition-all 
                                col-span-1 xs:col-span-1 sm:col-span-2 md:col-span-1 border border-white/10">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-black/70 rounded-lg md:rounded-xl"></div>
                                
                                <div className="absolute inset-0 rounded-lg md:rounded-xl bg-teal-400/10 group-hover:bg-teal-400/20 transition-all duration-300"></div>
                                
                                {/* Content */}
                                <div className="relative px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 h-full z-10">
                                    {/* Top Border */}
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-70 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300"></div>
                                    
                                    <h3 className="text-teal-400 text-lg sm:text-xl md:text-xl font-medium mb-2 sm:mb-3 md:mb-4 group-hover:text-teal-300 transition-colors duration-300">Tools</h3>
                                    <div className="flex flex-col items-center space-y-2">
                                        <span className="px-3 sm:px-4 py-1 bg-gray-800/80 rounded-full text-gray-100 text-sm group-hover:bg-teal-900/50 transition-all duration-300">GIT</span>
                                        <span className="px-3 sm:px-4 py-1 bg-gray-800/80 rounded-full text-gray-100 text-sm group-hover:bg-teal-900/50 transition-all duration-300">VS Code</span>
                                        <span className="px-3 sm:px-4 py-1 bg-gray-800/80 rounded-full text-gray-100 text-sm group-hover:bg-teal-900/50 transition-all duration-300">Figma</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
