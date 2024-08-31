import { useState } from "react"

export default function Header() {
    const [navControl, setNavControl] = useState(true)

    function handleNavBar() {
        setNavControl((prevState)  => !prevState)
        console.log(navControl)
    }

    return (
        <>
            <nav>
            <button onClick={handleNavBar} id="hamburger" className={navControl ? 'show-hamburger' : 'hide-hamburger'}><img src="icon-hamburger.svg" alt="icon-hamburger" /></button>
            <button onClick={handleNavBar} id="toggle-close"><img src="icon-close.svg" alt="icon-hamburger" /></button>
                {navControl ?  <div>
                    <img src="cackrack-logo.jpeg" width="60" height="60" alt="" />
                    <a href="#"><h2>CACKCRACK BOT</h2></a>
                </div> : null}
                <ul id="nav-bar" className={navControl ? "hideNav" : "showNav"}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#footer">Contact</a></li>
                </ul>
            </nav>
        </>
    )
}