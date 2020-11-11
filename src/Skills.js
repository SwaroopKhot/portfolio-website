import React from 'react'
import './Skills.css'

// react-router-dom:
import { useHistory } from 'react-router-dom';



function Skills() {

	const history = useHistory();

	const my_projects = () =>{
		history.push('/my-projects')
	}
	return (
		<div className='skills_container'>
			<div className='skills_title'>
				<h2>Skills</h2>
			</div>
			
			<div className='skill_header'>
				<h2>Programming Skills which I have</h2>
			</div>

			<div className='skills_details'>

				<div className='left_col'>

					<p>
						A skill is the ability to perform an action with determined results often within a given amount of time, 
						energy, or both. Skills can often be divided into domain-general and domain-specific skills. 
						For example, in the domain of work, some general skills would include time management, teamwork and leadership, self-motivation and others. 
					</p>

					<button className='check_project' onClick={my_projects} >My Projects</button>

				</div>

				

				<div className='right_col'>

					<div className='skill_bar'>
						<div className='skill_info'>
							<span>Python</span>
							<span>80%</span>
						</div>

						<div className='bar python'></div>
					</div>

					<div className='skill_bar'>
						<div className='skill_info'>
							<span>React Js</span>
							<span>40%</span>
						</div>

						<div className='bar react'></div>
					</div>

					<div className='skill_bar'>
						<div className='skill_info'>
							<span>RStudio</span>
							<span>60%</span>
						</div>

						<div className='bar r'></div>
					</div>

					<div className='skill_bar'>
						<div className='skill_info'>
							<span>HTML & CSS</span>
							<span>90%</span>
						</div>

						<div className='bar html'></div>
					</div>

					<div className='skill_bar'>
						<div className='skill_info'>
							<span>Kivy for Android Dev</span>
							<span>70%</span>
						</div>

						<div className='bar css'></div>
					</div>

					<div className='skill_bar'>
						<div className='skill_info'>
							<span>NodeJs</span>
							<span>60%</span>
						</div>

						<div className='bar r'></div>
					</div>


					

				</div>
			</div>
		</div>
		
	)
}

export default Skills