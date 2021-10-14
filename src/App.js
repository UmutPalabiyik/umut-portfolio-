
import './App.scss';
import About from './Container/About/About';
import Contact from './Components/Contact/Contact';

const App = () => {
  return (
    <div className="app">
      <Contact />
      <About /> 
    </div>
  );
}

export default App;
