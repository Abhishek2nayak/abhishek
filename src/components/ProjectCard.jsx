import React from 'react'
import { IoMdCode, IoMdShareAlt } from "react-icons/io";
const ProjectCard = ({ title, description, url, tech_stack, key }) => {
    const image = process.env.REACT_APP_PUBLIC_URL + "assets/" + url.image;
    return (
        <div className="card project-card" key={key}>
            {/*image align left side*/}
            <img src={image} alt={title} />
            {/* right side contain description*/}
            <div>
                {/*top of card */}
                <div className="card-top">
                    <h1>{title}</h1>
                    <div>
                        <a href={url.github} target="_blank" title='Source Code'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                        </a>
                        <a href={url.live} target="_blank" title='Live'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" /><path d="m21 3-9 9" /><path d="M15 3h6v6" /></svg>
                        </a>
                    </div>
                </div>
                <ul>
                    {
                        tech_stack?.map((tech, i) => {
                            return (
                                (i === tech_stack.length - 1) ? <li key={tech}>{tech}</li> : <li key={tech}>{tech}, </li>
                            )
                        })
                    }
                </ul>
                <p>{description}</p>
            </div>
        </div>
    );
}


export default ProjectCard