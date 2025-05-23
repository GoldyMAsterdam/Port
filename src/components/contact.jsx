import React from 'react'
import { Link } from 'react-router-dom';
import '../index.css'

export default function Contact() {
    return (
        <>
            <title>Goldy - Contact</title>

        <div className="bg-grid scroll-smooth min-h-screen flex flex-col relative">
            <nav className="bg-transparent text-[#F9FAFB] p-4 fixed w-full top-0 z-10">
                <ul className="flex text-lg justify-center space-x-8">
                    <li><Link to="/" className="hover:text-[#2AC7A9]">Home</Link></li>
                    <li><Link to="/about" className="hover:text-[#2AC7A9]">About</Link></li>
                    <li><Link to="/projects" className="hover:text-[#2AC7A9]">Projects</Link></li>
                    <li><Link to="/contact" className="text-[#2AC7A9]">Contact</Link></li>
                </ul>
            </nav>
            </div>
        </>
    );
}
