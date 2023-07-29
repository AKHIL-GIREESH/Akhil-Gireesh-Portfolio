//import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import About from './components/About';
import Projects from './components/projects';

function App() {
  return (
    <div className="App">
      <Heading/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;