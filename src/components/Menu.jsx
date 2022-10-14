import React from 'react'
const Menu = () => {
  return (
      <div className='menu d-flex d-md-none flex-column align-items-center justify-content-center '>
    <div className="menuItems menu_home py-3 "  ><a style={{textDecoration:'none', color:'white'}} href="#home">Home</a></div>
    <div className="menuItems menu_about  py-3" ><a style={{textDecoration:'none', color:'white'}} href="#about">About</a></div>
    <div className="menuItems menu_skills py-3" ><a style={{textDecoration:'none', color:'white'}} href="#skills">Skills</a></div>
    <div className="menuItems menu_contact py-3" ><a style={{textDecoration:'none', color:'white'}} href="#contact">Contact</a></div>
    </div>
  )
}

export default Menu