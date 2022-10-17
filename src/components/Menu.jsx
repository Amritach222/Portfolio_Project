import React from 'react'
const Menu = ({menuOpen,setmenuOpen}) => {
  return (
      <div className={menuOpen?'menu_active d-flex d-md-none flex-column align-items-center justify-content-center ':'menu d-flex d-md-none flex-column align-items-center justify-content-center'}>
    <div className="menuItems menu_home py-3 "  ><a style={{textDecoration:'none', color:'white'}} onClick={()=>setmenuOpen(false)} href="#home">Home</a></div>
    <div className="menuItems menu_about  py-3" ><a style={{textDecoration:'none', color:'white'}} onClick={()=>setmenuOpen(false)} href="#about">About</a></div>
    <div className="menuItems menu_skills py-3" ><a style={{textDecoration:'none', color:'white'}} onClick={()=>setmenuOpen(false)} href="#skills">Skills</a></div>
    <div className="menuItems menu_contact py-3" ><a style={{textDecoration:'none', color:'white'}} onClick={()=>setmenuOpen(false)} href="#contact">Contact</a></div>
    </div>
  )
}

export default Menu