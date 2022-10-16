import React from "react";
import logo from "../assets/images/logo.png";
import "./global.scss";
import data from "../data";
import ShareIcon from '@mui/icons-material/Share';
// import menu
import Menu from './Menu';
const Header = ({ menuOpen, setmenuOpen }) => {
  const navItems = data.header.navItems;
  console.log(navItems);
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper fixed-top container">
        <div className="left">
          <a href="#intro" className="logo">
            <img src={logo} alt="" height="50px" width="50px" />
          </a>
        </div>
      <div className="right d-flex align-items-center justify-content-center ">
          <div className="navItems d-none d-md-flex">
            <div className="navText mx-3 "><a style={{textDecoration:'none', color:'white'}} href="#home">{navItems[0]}</a></div>
            <div className="navText mx-3 "><a style={{textDecoration:'none', color:'white'}} href="#about">{navItems[1]}</a></div>
            <div className="navText mx-3 "><a style={{textDecoration:'none', color:'white'}} href="#skills">{navItems[2]}</a></div>
            <div className="navText mx-3 "><a style={{textDecoration:'none', color:'white'}} href="#contact">{navItems[3]}</a></div>
            <div className="shareIcon mx-3 "><a style={{textDecoration:'none', color:'white'}} href="#share"><ShareIcon/></a></div>
          </div>
          <div
            className="hamburgermenu d-flex  d-md-none"
            onClick={() => {
              setmenuOpen(!menuOpen);
            }}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
      <div className={menuOpen?'d-flex':'d-none'} width='100%'>
      <Menu setmenuOpen={setmenuOpen}/>
      </div>
    </div>
  );
};

export default Header;
