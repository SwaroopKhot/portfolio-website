import React from 'react'
import './Footer.css'

// font-Awesome lib:
import 'font-awesome/css/font-awesome.min.css';

function Footer() {
	return (
		<div className='footer_container'>

			<div className='footer_content'>
				<div className='d1'>
					<h4>Portfolio made by <span>@swaroop-khot</span> with <span>React.js</span></h4>
				</div>

				<div className='d2'>
					<a href='#top'><i class="fa fa-arrow-up fa-lg" aria-hidden="true"></i></a>
				</div>
			</div>
			
		</div>
	)
}

export default Footer