import React from 'react'
import './Home.css'

// react-router-dom:
import { useHistory } from 'react-router-dom';

function Home() {
	const history = useHistory();

	const read_more = () =>{
		history.push('/about-me')
	}

	return (
		<div className='home_container'>
			
			
			<div className='home_banner'>
				<div className='home_profile_div'>
					<img className='home_profile'
						src='https://upload.wikimedia.org/wikipedia/commons/a/a0/Bill_Gates_2018.jpg'
						alt=''
					/>
				</div>

				<div className='home_text'>
					<h3 className='home_text_1'><span>Hello,</span> my name is </h3>
					<h2 className='home_text_2'><span>Swaroop</span> Khot</h2>
					<h4 className='home_text_3'>I am a <span>Developer</span></h4>

					<button onClick={read_more}>Read more</button>
				</div>
			</div>

		</div>
	)
}

export default Home