import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

export default function About() {
    return (
        <>
            <title>Goldy - About</title>
        
        <div className="bg-grid scroll-smooth min-h-screen flex flex-col relative">
            <nav className="bg-transparent text-[#F9FAFB] p-4 fixed w-full top-0 z-10">
                <ul className="flex text-lg justify-center space-x-8">
                    <li><Link to="/" className="hover:text-[#2AC7A9]">Home</Link></li>
                    <li><Link to="/about" className="text-[#2AC7A9]">About</Link></li>
                    <li><Link to="/projects" className="hover:text-[#2AC7A9]">Projects</Link></li>
                    <li><Link to="/contact" className="hover:text-[#2AC7A9]">Contact</Link></li>
                </ul>
            </nav>
            <div className="h-screen flex flex-col items-center justify-center px-8 md:px-16">
                <h1 className="text-[#4ECCA3] text-center text-5xl md:text-6xl font-medium mb-6">About Me</h1>
                <div className="w-20 h-1 mb-8 bg-[#2AC7A9] rounded-lg"></div>
                <div className="max-w-2xl mx-auto">
                    <p className="text-[#F9FAFB] text-lg mb-6 leading-relaxed">
                        Hi there! I'm Goldy, a beginning web developer with a love for creating beautiful, user-friendly websites and applications.
                    </p>
                    <p className="text-[#F9FAFB] text-lg mb-6 leading-relaxed">
                        I currently specialize in front-end development using modern technologies like React, Tailwind. I'm constantly learning and expanding my skills to stay current with the latest web development trends.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 mt-8">
    
                        <div className="bg-[#1E2A3A] p-6 rounded-lg hover:scale-105 duration-300">
                            <h3 className="text-[#2AC7A9] text-xl mb-2">Education</h3>
                            <p className="text-[#F9FAFB]">B.S. in Computer Science</p>
                        </div>
                        <div className="bg-[#1E2A3A] p-6 rounded-lg hover:scale-105 duration-300">
                            <h3 className="text-[#2AC7A9] text-xl mb-2">Skills</h3>
                            <p className="text-[#F9FAFB]">HTML, CSS, JavaScript, React</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
