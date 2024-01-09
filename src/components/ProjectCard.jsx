import React from 'react'
import {IoMdCode, IoMdShareAlt} from "react-icons/io";
const  ProjectCard =({title,description,url, tech_stack,key})=> {
    const image = process.env.REACT_APP_PUBLIC_URL + "assets/"+url.image;
    return(
        <div className="card project-card" key={key}>
            {/*image align left side*/}
            <img src={image} alt={title}/>

            {/* right side contain description*/}
            <div>
                {/*top of card */}
                <div className="card-top">
                    <h1>{title}</h1>
                        <div>
                            <a href={url.github} target="_blank"><IoMdCode className={"circle"} /></a>
                            <a href={url.live}  target="_blank"><IoMdShareAlt className={"circle"}/></a>
                        </div>
                </div>
                <ul>
                    {
                        tech_stack?.map((tech,i) => {
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