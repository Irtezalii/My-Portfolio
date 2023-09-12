import { FaHome } from 'react-icons/fa';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Contact/>
      <SocialLinks/>
    </div>
  );
}

export default App;
