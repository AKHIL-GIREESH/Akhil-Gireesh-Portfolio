//import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import About from './components/About';
import Projects from './components/projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Heading/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;