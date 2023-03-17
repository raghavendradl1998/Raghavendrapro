import React from 'react'
import './Portflio.css';
import ToDo from '../../assets/Todo list.png'
import TicToc from '../../assets/tic-toc.png';
import Calculator from '../../assets/calculator.png';
const PortFolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={TicToc} alt="" />
          </div>
          <h3>This is a porfolio item title</h3>
          <div className='portfolio__item-cta'>
           <a href="https://github.com/raghavendradl1998/AssignmentGeekWeek1/tree/main/Test-4" className='btn' target='_blank'>Github</a>
            <a href="https://raghavendradl1998.github.io/AssignmentGeekWeek1/Test-4/Tic-Toc.html" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={Calculator} alt="" />
          </div>
          <h3>This is a porfolio item title</h3>
          <div className='portfolio__item-cta'>
           <a href="#" className='btn'>Github</a>
            <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={Calculator} alt="" />
          </div>
          <h3>This is a porfolio item title</h3>
          <div className='portfolio__item-cta'>
           <a href="#" className='btn'>Github</a>
            <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>


        


      </div>
    </section>
  )
}

export default PortFolio