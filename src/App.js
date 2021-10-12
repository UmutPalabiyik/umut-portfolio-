
import './App.scss';
import Header from './Container/Header/Header';
import Home from './Container/About/About';
import Contact from './Components/Contact/Contact';

const App = () => {
  return (
    <div className="app">
      <Contact />
      <Home /> 
    </div>
  );
}

export default App;
