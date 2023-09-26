import {
    AiFillGithub,
    AiFillInstagram,
  } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa";
import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
      <footer id='textblock-footer'>Created by Kailash G&nbsp;<a id="textblock-sapient" rel="noreferrer" href="https://www.youtube.com/@sapientcodes/" target="_blank">Sapient Codes</a>
      <ul className="footer-icons">
              <a
                href="https://github.com/Kailash1233"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/kailash-g-831463241/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://www.instagram.com/i_am_signed_out/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
          </ul>
          </footer>
    </div>
  )
}

export default Footer

