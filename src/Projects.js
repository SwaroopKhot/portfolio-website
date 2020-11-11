import React from 'react';
import './Projects.css';


function Projects() {
	return (
		<div className='projects_container'>
			<div className='projects_title'>
				<h2>Projects</h2>
			</div>


			<div className='projects_col'>

				<h2>Python Projects</h2>
				<div className='project_row'>
					<h3>project1</h3>

					<p>details</p>

					<div className='buttons'>
						<button className='code'>Code</button>
						<button className='video'>Video</button>
					</div>
				</div>

				<div className='project_row'>
					<h3>project2</h3>

					<p>details</p>

					<div className='buttons'>
						<button className='code'>Code</button>
						<button className='video'>Video</button>
					</div>
				</div>

				<div className='project_row_bottom'>
					<h3>project3</h3>

					<p>details</p>

					<div className='buttons'>
						<button className='code'>Code</button>
						<button className='video'>Video</button>
					</div>
				</div>

			</div>



			{/* Projects 2 */}

			<div className='projects_col'>

				<h2>Other Projects</h2>
				<div className='project_row'>
					<h3>project1</h3>

					<p>details</p>

					<div className='buttons'>
						<button className='code'>Code</button>
						<button className='video'>Video</button>
					</div>
				</div>

				<div className='project_row'>
					<h3>project2</h3>

					<p>details</p>

					<div className='buttons'>
						<button className='code'>Code</button>
						<button className='video'>Video</button>
					</div>
				</div>

				<div className='project_row_bottom'>
					<h3>project3</h3>

					<p>details</p>

					<div className='buttons'>
						<button className='code'>Code</button>
						<button className='video'>Video</button>
					</div>
				</div>

			</div>


		</div>
	)
}

export default Projects