import React from 'react'

function Projects() {
  return (
    <section id="projects" className="projects">  
    <h2 className="font-mono text-2xl font-bold py-3">My Projects / My Skills / My Programming Languages</h2>  
    <hr/>
    <div className="project">
        <h3 className="font-mono font-semibold text-lg py-3">Example Project 1</h3>  
        <p className="font-mono">Description of project 1.</p>  
    </div>
    <div className="project">
        <h3 className="font-mono font-semibold text-lg py-3">Example Skill 1</h3>  
        <p className="font-mono">Description of project 2.</p>  
    </div>
    <div className="project">
        <h3 className="font-mono font-semibold text-lg py-3">Or...</h3>
        <p className="font-mono">Anything you want to put here...</p>
    </div>
    </section> 
  );
}

export default Projects;