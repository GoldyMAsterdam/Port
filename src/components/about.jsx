import React, { useState, useEffect } from 'react';
import '../index.css';

export default function About() {
    const [animateSkills, setAnimateSkills] = useState(false);
    
    const skills = [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 80 },
        { name: "JavaScript", level: 15 },
        { name: "React", level: 10 },
        { name: "Tailwind CSS", level: 40 }
    ];
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimateSkills(true);
        }, 500);
        
        return () => clearTimeout(timer);
    }, []);

    const NavLink = ({ to, active, children }) => (
        <a 
            href={to} 
            className={`${active ? "text-[#2AC7A9]" : "hover:text-[#2AC7A9] transition duration-300"}`}
        >
            {children}
        </a>
    );

    return (
        <>
            <title>Goldy - About</title>
            
            <div className="bg-grid scroll-smooth min-h-screen flex flex-col relative">
                <nav className="bg-transparent backdrop-blur-sm text-[#F9FAFB] p-4 fixed w-full top-0 z-10">
                    <ul className="flex text-lg justify-center space-x-8">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/Port/about" active>About</NavLink></li>
                        <li><NavLink to="/Port/projects">Projects</NavLink></li>
                        <li><NavLink to="/Port/contact">Contact</NavLink></li>
                    </ul>
                </nav>
                
                <div className="pt-24 px-8 md:px-16 flex flex-col items-center">
                    <h1 className="text-[#4ECCA3] text-center text-5xl md:text-6xl font-medium mb-6">About Me</h1>
                    <div className="w-20 h-1 mb-8 bg-[#2AC7A9] rounded-lg"></div>
                    
                    {/* Profile
                    <div className="max-w-4xl mx-auto mb-16 flex flex-col lg:flex-row gap-12 items-center">
                        <div className="w-64 h-64 relative">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#2AC7A9] to-[#4ECCA3]"></div>
                            <div className="absolute inset-1 rounded-full bg-[#1E2A3A] flex items-center justify-center text-[#2AC7A9] text-6xl font-bold">
                                
                            </div>
                        </div> */}
                        
                        <div className="max-w-2xl">
                            <p className="text-[#F9FAFB] text-lg mb-6 leading-relaxed">
                                Hi there! I'm <span className="text-[#2AC7A9] font-semibold">Goldy</span>, a passionate web developer with a creative eye for designing elegant, user-friendly digital experiences. I blend technical skills with artistic vision to build websites that not only function flawlessly but also captivate visitors.
                            </p>
                            <p className="text-[#F9FAFB] text-lg mb-6 leading-relaxed">
                                Currently specializing in front-end development with React and Tailwind CSS, I'm on a continuous journey of learning and growth. My approach combines clean code with thoughtful design principles to create responsive interfaces that users love to interact with.
                            </p>
                        </div>
                    </div>
                    
                    {/* Journey */}
                    <div className="max-w-4xl w-full mx-auto mb-16">
                        <h2 className="text-[#2AC7A9] text-3xl font-medium mb-6">My Journey</h2>
                        <div className="bg-[#1E2A3A] p-8 rounded-lg">
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="flex-1">
                                    <h3 className="text-[#2AC7A9] text-xl mb-4">Education</h3>
                                    <div className="border-l-2 border-[#2AC7A9] pl-6 py-2">
                                        <p className="text-[#F9FAFB] font-medium">Software Development</p>
                                        <p className="text-[#F9FAFB] text-sm mb-2">2025 - Present</p>
                                        <p className="hover:text-[#2AC7A9] transition duration-300">
                                            <a href="https://www.ma-web.nl/" target="_blank" rel="noopener noreferrer" className="text-[#F9FAFB] hover:text-[#2AC7A9]">
                                                @ Media College
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex-1">
                                    <h3 className="text-[#2AC7A9] text-xl mb-4">Experience</h3>
                                    <div className="border-l-2 border-[#2AC7A9] pl-6 py-2">
                                        <p className="text-[#F9FAFB] font-medium">Web Developer</p>
                                        <p className="text-[#F9FAFB] text-sm mb-2">2025 - Present</p>
                                        <p className="text-[#F9FAFB]">Building websites for projects and personal portfolios</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Skills */}
                    <div className="max-w-4xl w-full mx-auto mb-16">
                        <h2 className="text-[#2AC7A9] text-3xl font-medium mb-6">My Skills</h2>
                        <div className="bg-[#1E2A3A] p-8 rounded-lg">
                            <div className="grid gap-8">
                                {skills.map((skill, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-[#F9FAFB]">{skill.name}</span>
                                            <span className="text-[#2AC7A9]">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-[#111827] rounded-full h-2.5">
                                            <div 
                                                className="bg-gradient-to-r from-[#2AC7A9] to-[#4ECCA3] h-2.5 rounded-full transition-all duration-1000 ease-out"
                                                style={{ 
                                                    width: animateSkills ? `${skill.level}%` : '0%'
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    {/* Interests */}
                    <div className="max-w-4xl w-full mx-auto mb-16">
                        <h2 className="text-[#2AC7A9] text-3xl font-medium mb-6">My Interests</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-[#1E2A3A] p-6 rounded-lg hover:scale-105 duration-300 text-center">
                                <div className="text-[#2AC7A9] text-3xl mb-4">🎨</div>
                                <h3 className="text-[#2AC7A9] text-xl mb-2">UI Design</h3>
                                <p className="text-[#F9FAFB]">Creating beautiful websites</p>
                            </div>
                            
                            <div className="bg-[#1E2A3A] p-6 rounded-lg hover:scale-105 duration-300 text-center">
                                <div className="text-[#2AC7A9] text-3xl mb-4">🚀</div>
                                <h3 className="text-[#2AC7A9] text-xl mb-2">New Technologies</h3>
                                <p className="text-[#F9FAFB]">Staying up to date with the latest Technologies</p>
                            </div>
                            
                            <div className="bg-[#1E2A3A] p-6 rounded-lg hover:scale-105 duration-300 text-center">
                                <div className="text-[#2AC7A9] text-3xl mb-4">🎮</div>
                                <h3 className="text-[#2AC7A9] text-xl mb-2">Gaming</h3>
                                <p className="text-[#F9FAFB] mt-2 text-sm">Favorites: Minecraft, Warframe, R6</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="max-w-4xl w-full mx-auto mb-16 text-center">
                        <p className="text-[#F9FAFB] text-lg mb-6">Want to know more? Interested in a website?</p>
                        <a href="/contact" className="inline-block bg-gradient-to-r from-[#2AC7A9] to-[#4ECCA3] text-[#1E2A3A] font-bold py-3 px-8 rounded-lg hover:opacity-90 transition duration-300">
                            Get In Touch
                        </a>
                    </div>
                </div>
            {/* </div> */}
        </>
    );
}
