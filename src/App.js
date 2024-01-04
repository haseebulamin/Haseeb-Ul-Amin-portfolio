import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <section id='app' className="h-screen">
    <Navbar/>
    <div className="frame border-2 border-round-lg  m-3 "> 
    <Home/>
    </div>
    </section>
  );
}

export default App;
