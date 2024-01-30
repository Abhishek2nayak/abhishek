import React from 'react'


export default function Navbar( ) {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const offset = 200;
            const targetOffset = section.offsetTop - offset;

            window.scrollTo({
                top: targetOffset,
                behavior: 'smooth'
            });
        }
    };
    return(
    <nav className='navbar rounded-blur'>
        <img src={process.env.REACT_APP_PUBLIC_URL +'assets/admin/profile.png'} loading={"lazy"} alt=""/>
        <div>
            <a className='nav-link' onClick={() => scrollToSection("about-me")}>About me</a>
            <a className='nav-link' onClick={() => scrollToSection("education")}>Education</a>
            <a className='nav-link' onClick={() => scrollToSection("skills")}>Skills</a>
            <a className='nav-link' onClick={() => scrollToSection("projects")}>Projects</a>
            <a className='nav-link' onClick={() => scrollToSection("contact")}>contact</a>
            
{/*             <button className="btn btn-resume">Resume</button> */}
        </div>
    </nav>
    );
}
