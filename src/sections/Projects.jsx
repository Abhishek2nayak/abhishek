import React, { useState } from "react";
import ProjectCard from '../components/ProjectCard'
import Header from "../components/Header";
import { getProjects } from "../api/API";
export default function Projects() {
  const [projects, setProjects] = useState(null)

  React.useEffect(() => {

    getProjects()
      .then(data => setProjects(data))
      .catch(err => console.error(err))

  }, [])
  if (projects == null) return <h1>Loading .....</h1>;
  return (
    <section id={"projects"}>
      <Header title="Projects" />
      <div className="projects-container">
        {
          projects?.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                url={{
                  image: project.img_url,
                  github: project.github_url,
                  live: project.live_url,
                }

                }
                tech_stack={project.tech_stack}
              />
            )
          })
        }
      </div>
    </section>
  );
}
