import React from 'react';
import './About.css';

// font-Awesome lib:
import 'font-awesome/css/font-awesome.min.css';

function About() {
	return (
		<div className='about_container'>
			<div className='about_title'>
				<h2>About me </h2>
			</div>

			<div className='about_details'>
				<div className='about_profile'>
					<div className='about_profile_img'> 
						<img 
							src='https://static.techspot.com/images2/news/bigimage/2020/03/2020-03-14-image-4.jpg'
							alt=''
						/>
					</div>

					<div style={{padding: `20px`}}>
						<div className='profile_links'>
							<ui>
								<i class="fa fa-github fa-2x" aria-hidden="true" href='tele'></i>
								<i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
								<i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
								<i class="fa fa-telegram fa-2x" aria-hidden="true"></i>
							</ui>
						</div>
					</div>

				</div>

				<div className='about_content'>
					<h2><b>I'm Swaroop and I'm a Developer</b></h2>

					<p>Highly organized and detail-oriented and under-going Graduate from the University of <b><small> College Name </small></b> and seeking an entry-level position as an Developer. 
						Have skills of programming languages like <span>Python</span>, <span>ReactJs</span> ,<span>NodeJS</span>, <span>HTML CSS BootStrap</span>
						 along with it I have also worked with <span>Android Development with Python(Kivy)</span>, 
						 <span>Turtle as Graphics and Tkinter as GUI within Python</span> and <span>Data Analytics with RStudio</span>.
					</p>

					<div className='about_ncc'>

						<div className='about_ncc_logo'>
							<img className='india_flag' src='http://netanimations.net/Moving-picture-India-flag-waving-in-wind-animated-gif-1.gif' alt='' />
						</div>

						<div className='about_ncc_content'>
							<p>
								I am a <span>NCC Cadet</span>
							</p>
						</div>

					</div>
					

					<button><span>Download Resume</span></button>
				</div>
			</div>
 
		</div>
	)
}

export default About