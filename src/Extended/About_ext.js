import React, { useState } from 'react'
import './About_ext.css'


import HSC_marks from './Marks/HSC_marks';
import SSC_marks from './Marks/SSC_marks';

function About_ext() {
	const [ state , hsc_display] = useState('true');

	const [ ssc_state , ssc_display] = useState('true');

	const hsc_subject =() =>{
		hsc_display(!state)
	}



	return (
		<div className='about_container'>
			<div className='about_title'>
				<h2>My Education</h2>
			</div>

			<div className='about_col'>
				<div className='about_row'>

					<div className='about_left'>

						<h2>Current Qualification</h2>
						<h4>Pursuing- <span>BTech in (EXTC)</span></h4>
						<h5>Location - <span>College, location</span></h5>
						<h5>Batch - <span>2019-2022</span></h5>
						
					</div>

					<div className='about_right'>
						<h2>First Year</h2>

						<div className='grades'>
							<h3>Grades: &nbsp;</h3>
							<h4><span>8.6 SGPA</span> and <span>8.6 CGPA</span></h4>
						</div>

						<h2>Second Year</h2>

						<div className='grades'>
							<h3>Grades: &nbsp;</h3>
							<h4><span>8.6 SGPA</span> and <span>8.6 CGPA</span></h4>
						</div>

						<h2>Third Year</h2>

						<div className='grades'>
							<h3>Grades: &nbsp;</h3>
							<h4><span>8.6 SGPA</span> and <span>8.6 CGPA</span></h4>
						</div>

						<h2>Fourth Year</h2>

						<div className='grades'>
							<h3>Grades: &nbsp;</h3>
							<h4><span>8.6 SGPA</span> and <span>8.6 CGPA</span></h4>
						</div>
					</div>

					
				</div>

				<div className='about_row'>

					<div className='about_left'>

						<h2>12<sup>th</sup> Boards</h2>
						<h4>Completed- <span>Science</span></h4>
						<h5>Year - <span>2018</span></h5>
						<h5>Location - <span>school,location</span></h5>
						
					</div>

					<div className='about_right'>
						<h2>12<sup>th</sup> Science</h2>

						<div className='grades'>
							<h3>Percentage: &nbsp;</h3>
							<h4><span>83.38%</span></h4>
						</div>

						<div className='expand_score'>
							<button onClick={hsc_subject}>Subject-wise</button>
						</div>

						{	state ?
							null
							:

							<div className='show_hide_div'>
								<HSC_marks />
							</div>				
						}

					</div>

				</div>


				<div className='about_row'>

					<div className='about_left'>

						<h2>10<sup>th</sup> Boards</h2>
						<h4>Completed- <span>through State Boards</span></h4>
						<h5>Year - <span>2016</span></h5>
						<h5>Location - <span>school,location</span></h5>
						
					</div>

					<div className='about_right'>
						<h2>10<sup>th</sup> Boards</h2>

						<div className='grades'>
							<h3>Percentage: &nbsp;</h3>
							<h4><span>86%</span></h4>
						</div>

						<div className='expand_score'>
							<button onClick={() => {ssc_display(!ssc_state)}}>Subject wise</button>
						</div>

						{	ssc_state ?

							null
							:

							<div className='show_hide_div'>
								<SSC_marks />
							</div>			
						}

					</div>

				</div>	
			</div>

			

			

		</div>
	)
}

export default About_ext