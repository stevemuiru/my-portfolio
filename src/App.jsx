import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import AppNavbar from './components/AppNavbar.jsx';
import Skills from './components/Skills.jsx'
import ProjectCard from './components/ProjectCard.jsx';
import Projects from './components/Projects.jsx';
import Contacts from './components/Contacts.jsx';

function App(){
  return (
    <>
    <AppNavbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contacts />
    </>
  )
}
export default App;