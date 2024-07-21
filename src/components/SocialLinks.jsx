import React from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const resumeDownloadUrl = "https://firebasestorage.googleapis.com/v0/b/abhishek-portfolio-026.appspot.com/o/abhishek_resume.pdf?alt=media&token=40a69857-4a0c-4def-a683-3e3ab6ea0116"

const SocialLinks = () => {

    const handleResumeDownload = () => {
        const link = document.createElement('a');
        link.href = resumeDownloadUrl;
        link.download = 'Resume.pdf';
        link.target = "_blank";
        link.click();
    };

    return (
        <div className="social-links">
            <a href="https://www.linkedin.com/in/abhishek-nayak-6b0a13271/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://github.com/Abhishek2nayak" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://twitter.com/N_Abhishek09" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
            <a href="https://www.instagram.com/n_abhishek26/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <button className="btn btn-resume" onClick={handleResumeDownload}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                Resume
            </button>
        </div>
    );
};

export default SocialLinks;
