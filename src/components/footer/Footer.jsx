import React from 'react'
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
// Importing data
import data from "../../data";
import './footer.scss'
const Footer = () => {
    const { name, footer } = data;
    const { social_media_link } = footer;
  return (
    <div className="footer">
      <div className="footer_container ">
        <div className="footer_container_left ">
          <div className="footer_container_left_links ">
            <a
              className="social_media_link mx-2"
              href={social_media_link.twt}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </a>
            <a
              className="social_media_link mx-2"
              href={social_media_link.fb}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookOutlinedIcon />
            </a>
            <a
              className="social_media_link mx-2"
              href={social_media_link.in}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              className="social_media_link mx-2"
              href={social_media_link.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </a>
          </div>
          <span className="social_media_link mx-2">{name}</span>
        </div>
        <div className="footer_container_right text-center text-white py-3 py-sm-0">
          <div>
            Design and coded by <span>Amrit Acharya</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer