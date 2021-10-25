
import './App.scss';
import Contact from './Components/Contact/Contact';
import DownloadButton from './Components/DownloadButton/DownloadButton';
import Home from './Container/Home/Home';

const App = () => {
  return (
    <div className="app">
      <DownloadButton />
      <Contact/>
      <Home /> 
    </div>
  );
}

export default App;
