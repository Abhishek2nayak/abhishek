import React from 'react'
import {FaGithub, FaInstagram, FaLinkedinIn} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";


const SocialLinks = ()=> {
    return (
        <div className="social-links">
            <a href="https://www.linkedin.com/in/abhishek-nayak-6b0a13271/" target="_blank"><FaLinkedinIn/></a>
            <a href="https://github.com/Abhishek2nayak" target="_blank"><FaGithub/></a>
            <a href="https://twitter.com/N_Abhishek09" target="_blank"><FaXTwitter/></a>
            <a href="https://www.instagram.com/n_abhishek26/" target="_blank"><FaInstagram/></a>

        </div>
    )
}


export default SocialLinks;