//import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import About from './components/About';
import Projects from './components/projects';
import Contact from './components/Contact';
import Experience from './components/Experience';

function App() {
  return (
    <div className='outerDiv'>
      <Heading/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;