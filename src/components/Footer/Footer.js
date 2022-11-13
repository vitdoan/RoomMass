import React from 'react'
import './footer.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
    return (
        <footer >
            <a href = "#" style = {{textDecoration: "none"}} className = "footer__logo">ROOMMASS</a>

            <ul className = "permalinks">
                <li> <a href = "#" style = {{textDecoration: "none"}}>Home</a></li>
                <li> <a href = "#about" style = {{textDecoration: "none"}}>About</a></li>
            </ul>

            <div className = "footer__socials">
                <a href = "https://linkedin.com"><AiFillLinkedin/></a>
                <a href = "https://facebook.com"><BsFacebook /></a>
                <a href = "https://instagram.com"><BsInstagram/></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; 2022 by Vi, Long, Phuoc, Quang. All rights reserved.</small>
            </div>
        </footer>

        
    )
}

export default Footer