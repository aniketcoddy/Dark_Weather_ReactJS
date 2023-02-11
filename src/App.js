import './App.css';
import Navbar from './components/Navbar';
import Heading from './components/Heading';
import Weather from './components/Weather';

function App() {


  
  return (
   
   <div className="relative w-[1536px] h-[753px] bg-[#1B262C]">
    <Navbar/>
    <Heading/>
    <Weather/>
   </div>
  );
}

export default App;
