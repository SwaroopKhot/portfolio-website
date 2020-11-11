import React from 'react'
import './Service.css';

// font-Awesome lib:
import 'font-awesome/css/font-awesome.min.css';

function Service() {
	return (
		<div className='service_container'>
			<div className='service_title'>
				<h2>Service</h2>
			</div>

			<div className='service_content'>

				<div className='service_frontend'>
					<div className='service_cont_header'>
						<h2> Front-End Developement</h2>
					</div>

					<span><i class="fa fa-html5 fa-2x" aria-hidden="true"></i> &nbsp; &nbsp; <i class="fa fa-css3 fa-2x" aria-hidden="true"></i></span>

					<p>
						Front-end web development is the practice of converting data to a graphical interface, 
						through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data.
					</p>
				</div>


				<div className='service_frontend'>
					<div className='service_cont_header'>
						<h2> Back-End Developement</h2>
					</div>

					<i class="fa fa-code fa-2x" aria-hidden="true"></i>

					<p>
						Front-end web development is the practice of converting data to a graphical interface, 
						through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data.
					</p>
				</div>

				<div className='service_frontend'>
					<div className='service_cont_header'>
						<h2> React.Js & Node.Js</h2>
					</div>

					<i class="fa fa-file-code-o fa-2x" aria-hidden="true"></i>

					<p>
						Front-end web development is the practice of converting data to a graphical interface, 
						through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data.
					</p>
				</div>

			</div>


			{/* div 2 */}

			<div className='service_content'>

			

				<div className='service_frontend'>
					<div className='service_cont_header'>
						<h2> Python Developement</h2>
					</div>

					<i class="fa fa-code-fork fa-2x" aria-hidden="true"></i>

					<p>
						Front-end web development is the practice of converting data to a graphical interface, 
						through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data.
					</p>
				</div>


				<div className='service_frontend'>
					<div className='service_cont_header'>
						<h2> Data Analytics</h2>
					</div>

					<i class="fa fa-bar-chart fa-2x" aria-hidden="true"></i>

					<p>
						Front-end web development is the practice of converting data to a graphical interface, 
						through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data.
					</p>
				</div>

				<div className='service_frontend'>
					<div className='service_cont_header'>
						<h2> Android Developement</h2>
					</div>

					<i class="fa fa-android fa-2x" aria-hidden="true"></i>

					<p>
						Front-end web development is the practice of converting data to a graphical interface, 
						through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data.
					</p>
				</div>

			</div>
		</div>
	)
}

export default Service