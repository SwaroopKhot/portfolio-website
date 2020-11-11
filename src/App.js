
import './App.css';
import React from 'react';


// Router to switch within-pages :
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

//Modules:
import Header from './Header';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Service from './Service';
import Footer from './Footer';
import Projects from './Projects';
import Toggle from './Toggle';


// extended Modules :
import About_ext from './Extended/About_ext';
import Skills_ext from './Extended/Skills_ext';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Switch>

          <Route path='/about-me'>
            <Header />
            <About />

            <About_ext />
            <Footer />
          </Route>

          <Route path='/contact'>
            <Header />
            <Contact />
            <Footer />
          </Route>

          <Route path='/my-projects'>
            <Header />
            <Projects />
            <Footer />
          </Route>

          <Route path='/my-skills'>
            <Header />
            <Skills />
            <Skills_ext />
            <Footer />
          </Route>

          <Route path='/toggle'>
            <Toggle />
          </Route>


          {/* Default Path */}
          <Route path='/'>
            <Header />
            <Home />
            <About />
            <Skills />
            <Service />
            <Contact />
            <Footer />
          </Route>


          </Switch>
      </div>
    </Router>
  );
}

export default App;
