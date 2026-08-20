import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import { Navbar } from 'react-bootstrap';
import AppNavbar from './components/AppNavbar.jsx';
import Skills from './Skills.jsx'
import ProjectCard from './components/ProjectCard.jsx';
import Contacts from './components/Contacts.jsx';

function App(){
  return (
    <AppNavbar />,
    <Hero />,
    <About />,
    <Skills />,
    <Projects />,
    <ProjectCard />,
    <Contacts />
  )
}
export default App;