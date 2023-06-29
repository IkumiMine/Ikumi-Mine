import { useState, useEffect } from 'react';

import Introduction from './Pages/Introduction';
import ProjectsGellery from './Pages/Projects-gallery';
import Background from './Components/Background';
import Navigation from './Components/Navigation';
import ProjectsDetails from './Data';

import './root.css';

const App = () => {

  const [details, setDetails] = useState([]);
  const [screenWidth, setScreenWidth] = useState(0);

  //set data
  useEffect(() => {
      setDetails(ProjectsDetails);
  }, []);

  //get screen width whenever it's changed
  const getCurrentWidth = () => {
    setScreenWidth(window.innerWidth);
  }
  
  useEffect(()=> {
      window.addEventListener('resize', getCurrentWidth);
  }, [screenWidth]);

  //scroll functions
  const scrollToProjects = () => {
    const eltProjects = document.getElementById('projects');
    if(eltProjects){
      eltProjects.scrollIntoView({ behavior: 'smooth'});
    }
  };

  const scrollToAbout = () => {
    const eltAbout = document.getElementById('about');
    if(eltAbout){
      eltAbout.scrollIntoView({ behavior: 'smooth'});
    }
  }

  return (
    <main>
      <Navigation scrollToProjects={scrollToProjects} scrollToAbout={scrollToAbout}/>
      <Background />

      <Introduction scrollToProjects={scrollToProjects} />
      <ProjectsGellery 
        details={details} 
        scrollToProjects={scrollToProjects} 
        scrollToAbout={scrollToAbout}
        screenWidth={screenWidth} 
      />
    </main>      
  );
}

export default App;
