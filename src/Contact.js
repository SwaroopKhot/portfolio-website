import React from 'react';
import './Contact.css';

// font-Awesome lib:
import 'font-awesome/css/font-awesome.min.css';

function Contact() {
	return (
		<div className='contact_container'>
			<div className='contact_title'>
				<h2>Contact</h2>
			</div>

			<div className='contact_header'>
				<h2>Get in Touch</h2>
				<h4><small>Through :</small></h4>
			</div>


			<div className='contact_content'>

				<div className='contact_left'>
					<p>
						Place your contact information at the top of your resume; it should be the first thing the employer sees. 
						Your name should be at the very top and should stand out.
						You might make your name larger in font and bolder than the rest of your resume.
					</p>

					<div className='contact_detail'>
						<div className='icon'>
							<i class="fa fa-user fa-2x" aria-hidden="true"></i>
						</div>

						<div className='name'>
							<h3>Name</h3>
							<p>Swaroop Khot</p>
						</div>
					</div>


					<div className='contact_detail'>
						<div className='icon'>
							<i class="fa fas fa-street-view fa-2x" aria-hidden="true"></i>
						</div>

						<div className='name'>
							<h3>Address</h3>
							<p>Mumbai, Maharashtra, India</p>
						</div>
					</div>


					<div className='contact_detail'>
						<div className='icon'>
							<i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
						</div>

						<div className='name'>
							<h3>Email</h3>
							<p>swaroopkhot210@gmail.com</p>
						</div>
					</div>

					<div className='contact_detail'>
						<div className='icon'>
							<i class="fa fa-phone fa-2x" aria-hidden="true"></i>
						</div>

						<div className='name'>
							<h3>Phone Number</h3>
							<p>-</p>
						</div>
					</div>

				</div>



				<div className='contact_right'>
					<h2>Message me</h2>

					<div className='message_me'>

						<div className='sender_name_email'>
							<input type='text' className='sender_name' placeholder='Your Name' />
							<input type='text' className='sender_email' placeholder='Email' />
						</div>

						<div className='sender_subject'>
							<input type='text' className='sender_subject' placeholder='Subject' />
						</div>

						<div className='sender_message'>
							<textarea type='text' className='sender_name' rows='4' noresize placeholder='Message' ></textarea>
						</div>

						<div className='send_button'>
							<button>Send Message</button>
						</div>

					</div>

				</div>
			</div>


		</div>
	)
}

export default Contact