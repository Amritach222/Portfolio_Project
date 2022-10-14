import React,{useState} from 'react'
import './app.scss';
// import aos
import Aos from 'aos';
// import aos css
import 'aos/dist/aos.css'
const Header=React.lazy(()=>import("./components/Header"));
const Home=React.lazy(()=>import("./components/Home"));
const About=React.lazy(()=>import("./components/About"));
const Skills=React.lazy(()=>import("./components/Skills"));
const Contact=React.lazy(()=>import("./components/Contact"));
const Footer=React.lazy(()=>import("./components/Footer"));
function App() {
   // initialize aos
   Aos.init({
    duration:1800,
    offset:100,
  })
  const [menuOpen, setmenuOpen] = useState(false)
  return (
    <div className="App">
     <Header menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
     <Home/>
     
     <div className="container content ">
     <About/>
     <Skills/>
     <Contact/>
     </div>
     <Footer/>
    </div>
  );
}

export default App;
