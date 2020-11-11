import React from 'react'
import './Toggle.css'

import { Link } from 'react-router-dom'
// font-Awesome lib:
import 'font-awesome/css/font-awesome.min.css';


function Toggle() {
	return (
		<div className='toggle_container'>
			
			<div className='blank'>
			</div>

			<div className='toggle_content'>
				<Link to={'/'}  className='cancel'><i class="fa fa-times fa-2x" aria-hidden="true"></i></Link>
				<Link to={'/'}  className='Links1'><h4>Home</h4> </Link>
				<Link to={'/about-me'} className='Links1'> <h4> About me</h4> </Link>
				<Link to={'/my-skills'} className='Links1'> <h4> Skills</h4> </Link>
				<Link to={'/my-projects'} className='Links1'> <h4> My Projects</h4> </Link>
				<Link to={'/contact'} className='Links1'> <h4> Contact</h4> </Link>
			</div>
		</div>
	)
}

export default Toggle