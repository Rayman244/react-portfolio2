import React from 'react';
import Navigator from './components/Navigation/Navbar';
// import Projects from './components/Projects/Projects';
// import AboutMe from './components/AboutMe/AboutMe';
// import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';


function App() {
  return <>
  <header>
    <Navigator />
    {/* <AboutMe /> */}
    {/* <Projects /> */}
    {/* <Contact/> */}
    <Resume/>
    </header>
  <footer>
    </footer>
  </>
}

export default App;
