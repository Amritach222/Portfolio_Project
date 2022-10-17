import React,{useState, useEffect} from 'react'
import './app.scss';
// import aos
import Aos from 'aos';
// import aos css
import 'aos/dist/aos.css'
// Importing arrow
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
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
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

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
     <button
      type="button"
      className={`scrollToTop scroll-btn ${isVisible ? "show text-center" : ""}`}
      onClick={scrollToTop} >
     <ArrowUpwardIcon/>
    </button>
     <Footer/>
    </div>
  );
}

export default App;
