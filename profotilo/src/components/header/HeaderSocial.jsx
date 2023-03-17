import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FiDribbble} from 'react-icons/fi'

const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href='https://www.linkedin.com/in/raghavendra-d-l-b197a91ab/' target="_blank"><BsLinkedin /></a>
        <a href='https://github.com/raghavendradl1998' target="_blank"><FaGithub /></a>
     
    </div>
  )
}

export default HeaderSocial