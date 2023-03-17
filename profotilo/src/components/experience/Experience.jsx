import React from 'react'
import './Experience.css';
import {AiFillCheckCircle} from 'react-icons/ai';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills i Have</h5>
      <h2>Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontened">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
                <AiFillCheckCircle  className='expierence__details-icon'/>
                <div>
                <h4>HTML</h4>
                <small className='text-align'>Experienced</small>
                </div>
            </article>

            <article className='experience__details'>
                <AiFillCheckCircle  className='expierence__details-icon'/>
                <div>
                <h4>CSS</h4>
                <small className='text-align'>Intermediate</small>
                </div>
            </article>


            <article className='experience__details'>
                <AiFillCheckCircle  className='expierence__details-icon'/>
                <div>
                <h4>JavaScript</h4>
                <small className='text-align'>Intermediate</small>
                </div>
            </article>

            <article className='experience__details'>
                <AiFillCheckCircle  className='expierence__details-icon'/>
                <div>
                <h4>Material UI</h4>
                <small className='text-align'>Intermediate</small>
                </div>
            </article>

            <article className='experience__details'>
                <AiFillCheckCircle  className='expierence__details-icon'/>
                <div>
                <h4>ReactJs</h4>
                <small className='text-align'>Experienced</small>
                </div>
            </article>

            <article className='experience__details'>
                <AiFillCheckCircle  className='expierence__details-icon'/>
                <div>
                <h4>BootStrap</h4>
                <small className='text-align'>Intermediate</small>
                </div>
            </article>
          </div>

        </div>
{/* BACKEND  */}
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
                <AiFillCheckCircle  className='expierence__details-icon'/>
                <div>
                <h4>Node.js</h4>
                <small className='text-align'>Experienced</small>
                </div>
            </article>

            <article className='experience__details'>
                <AiFillCheckCircle  className='expierence__details-icon'/>
                <div>
                <h4>Django</h4>
                <small className='text-align'>Intermediate</small>
                </div>
            </article>


            <article className='experience__details'>
                <AiFillCheckCircle  className='expierence__details-icon'/>
                <div>
                <h4>Python</h4>
                <small className='text-align'>Intermediate</small>
                </div>
            </article>

            <article className='experience__details'>
                <AiFillCheckCircle  className='expierence__details-icon'/>
                <div>
                <h4>Mysql</h4>
                <small className='text-align'>Intermediate</small>
                </div>
            </article>


            <article className='experience__details'>
                <AiFillCheckCircle  className='expierence__details-icon'/>
                <div>
                <h4>Core Java</h4>
                <small className='text-align'>Intermediate</small>
                </div>
            </article>

           
          </div>
          </div>
      </div>
    </section>
  )
}

export default Experience