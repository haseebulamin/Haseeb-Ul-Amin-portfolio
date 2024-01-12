import './App.css';
// import Home from './Components/Home/Home';
// import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/Contact/Contact'
// import About from './Components/About/About';
// import Resume from './Components/Resume/Resume';
import Menu from './Components/Menu/Menu';

function App() {
  return (
    <>
    {/* <div className="frame border-2 border-round-3xl  mx-3 mb-3 mt-2 "></div> */}
    <section id='app' className="h-screen p-6 ">
    <div className="frame border-2 border-round-3xl h-full relative ">
    <Menu/>
    {/* <Home/> */}
    <Contact/>
    </div>
     </section>
    </>
  );
}

export default App;
