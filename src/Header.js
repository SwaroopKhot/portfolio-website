import React from 'react'
import './Header.css'

import { Link } from 'react-router-dom'

// font-Awesome lib:
import 'font-awesome/css/font-awesome.min.css';


class Header extends React.Component {
	 state = {
    navBackground: "rgb(22,35,61)"
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const backgroundcolor = window.scrollY < 100 ? "rgb(22,35,61)" : "crimson";

      this.setState({ navBackground: backgroundcolor });
    });
  }


  render() {
  	
	return (
		<nav className='header_container' 
			style={{ backgroundColor: `${this.state.navBackground}`, transition: `0.8s ease`}}
		>


			<div className='header_drawer'>
				<h4>s</h4>
			</div>
			<div className='header_title'>
				<span className='head_titl1'>Protfo</span><span className='head_titl2'><b>lio</b></span>
			</div>

			<div className='header_navlink'>

				<Link to={'/'}  className='Links'><h4>Home</h4> </Link>
				<Link to={'/about-me'} className='Links'> <h4> About me</h4> </Link>
				<Link to={'/my-skills'} className='Links'> <h4> Skills</h4> </Link>
				<Link to={'/my-projects'} className='Links'> <h4> My Projects</h4> </Link>
				<Link to={'/contact'} className='Links'> <h4> Contact</h4> </Link>
			</div>

			

			<Link to='/toggle' className='menu'>
				<div className='toggle'>
					<i class="fa fa-bars fa-lg" aria-hidden="true"></i>
				</div>
			</Link>
		</nav>
	)
}
}

export default Header;