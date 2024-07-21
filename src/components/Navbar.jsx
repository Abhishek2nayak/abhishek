import React from 'react';

export default function Navbar() {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const offset = 200;
            const targetOffset = section.offsetTop - offset;

            window.scrollTo({
                top: targetOffset,
                behavior: 'smooth',
            });
        }
    };

    return (
        <nav className="navbar rounded-blur">
            <img
                src={process.env.REACT_APP_PUBLIC_URL + 'assets/admin/profile.png'}
                loading="lazy"
                alt=""
            />
            <div className="navigation">
                <button className="nav-link" onClick={() => scrollToSection("about-me")}>
                    About me
                </button>
                <button className="nav-link" onClick={() => scrollToSection("education")}>
                    Education
                </button>
                <button className="nav-link" onClick={() => scrollToSection("skills")}>
                    Skills
                </button>
                <button className="nav-link" onClick={() => scrollToSection("projects")}>
                    Projects
                </button>
                <button className="nav-link" onClick={() => scrollToSection("contact")}>
                    Contact
                </button>
            </div>
        </nav>
    );
}
