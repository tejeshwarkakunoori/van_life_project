import bgImg from "../assets/images/image 54.png"
import { Link } from "react-router-dom"

import React from 'react'

const About = () => {
  return (
    <div className="about-container">
      <img className="about-hero-image" src={bgImg}/>
      <div className="about-page-content">
        <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
        <p>Our mission is to enliven your road trip with the perfect travel van rental. 
        Our vans are recertified before each trip to ensure your travel plans can 
        go off without a hitch.<br/>(Hitch costs extra 😉)</p>

        <p>Our team is full of vanlife enthusiasts who know firsthand the magic of 
        touring the world on 4 wheels.</p>
      </div>

      <div className="about-page-cta">
        <h2>Your destination is waiting. <br/>Your van is ready.</h2>
        <Link className="link-button" to="/vans">Explore our vans</Link>
      </div>

      <footer>Ⓒ 2022 #VANLIFE</footer>
    </div>
  )
}

export default About