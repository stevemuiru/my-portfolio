import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import { Navbar } from 'react-bootstrap';
import AppNavbar from './components/AppNavbar.jsx';
import Skills from './Skills.jsx'

function App(){
  return (
    <AppNavbar />,
    <Hero />,
    <About />,
    <Skills />
  )
}
export default App;