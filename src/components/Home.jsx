import React from 'react'
import data from '../data'
const Home = () => {
  const images=data.home.images;
  return (
    <div className='home mx-5' name="home" id='home'>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 p-0" data-aos='fade-down' data-aos-delay='500'> <img className='w-100  home_image' src={images.image1} alt="" /></div>
            <div className="col-12 col-sm-6 col-md-4 p-0" data-aos='fade-down' data-aos-delay='600'> <img className='w-100  home_image' src={images.image2} alt="" /></div>
            <div className="col-12 col-sm-6 col-md-4 p-0" data-aos='fade-down' data-aos-delay='700'> <img className='w-100  home_image' src={images.image3} alt="" /></div>
            <div className="col-12 col-sm-6 col-md-4 p-0" data-aos='fade-down' data-aos-delay='800'> <img className='w-100  home_image' src={images.image4} alt="" /></div>
            <div className="col-12 col-sm-6 col-md-4 p-0" data-aos='fade-down' data-aos-delay='900'> <img className='w-100  home_image' src={images.image5} alt="" /></div>
            <div className="col-12 col-sm-6 col-md-4 p-0" data-aos='fade-down' data-aos-delay='1000'> <img className='w-100  home_image' src={images.image6} alt="" /></div>
          </div>
    </div> 
  )
}

export default Home