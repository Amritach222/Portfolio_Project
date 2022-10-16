import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
// Importing data 
import  data from '../data';
const Footer = () => {
  const {name}=data
  return (
    <div className='footer'>
     <div className="footer_container container d-flex flex-column flex-sm-row  justify-content-between align-items-center">
     <div className="footer_container_left d-flex flex-column flex-md-row justify-content-center align-items-center pt-3">
     <div className="footer_container_left_links d-flex justify-content-sm-start justify-content-around">
     <a className='social_media_link mx-2' href="http://" target="_blank" rel="noopener noreferrer"><TwitterIcon/></a>
     <a className='social_media_link mx-2' href="http://" target="_blank" rel="noopener noreferrer"><FacebookOutlinedIcon/></a>
     <a className='social_media_link mx-2' href="http://" target="_blank" rel="noopener noreferrer"><LinkedInIcon/></a>
     <a className='social_media_link mx-2' href="http://" target="_blank" rel="noopener noreferrer"><GitHubIcon/></a>
     </div>
     <span className='social_media_link mx-2'>{name}</span>
     </div>
     <div className="footer_container_right text-center text-white py-3 py-sm-0">
      <div>Design and coded by <span>Amrit Acharya</span></div>
     </div>
     </div>
    </div>
  )
}

export default Footer