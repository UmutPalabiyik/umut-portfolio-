
import './App.scss';
import About from './Container/About/About';
import Contact from './Components/Contact/Contact';
import DownloadButton from './Components/DownloadButton/DownloadButton';

const App = () => {
  return (
    <div className="app">
      <DownloadButton />
      <Contact />
      <About /> 
    </div>
  );
}

export default App;
