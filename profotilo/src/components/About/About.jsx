import React from "react";
import './About.css'
import ME from '../../assets/raghu.png.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi';

import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

     <div className=".container about__container">
       <div className="about__me">
         <div className="about__me-image">
           <img src={ME} alt="me"/>
         </div>
       </div>

       <div className="about__content">
         <div className="about__cards">
           <article className="about_card">
             <FaAward  className="about__icons"/>
             <h5>Experience</h5>
             <small>1+ years Working</small>
           </article>

           


           <article className="about_card">
             <VscFolderLibrary className="about__icons"/>
             <h5>Projects</h5>
             <small>5+ project</small>
           </article>
         </div>

         <p>To obtain a creative and challenging position in an organization that gives me an opportunity 
for self – improvement and leadership, while contributing to the symbolic growth of the 
organization with my Technical, Innovative & Logic skills.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
       </div>
      </div>

    </section>
  )
}

export default About