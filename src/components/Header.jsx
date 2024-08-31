import { useState, useEffect } from "react"

export default function Header() {
    const [navControl, setNavControl] = useState(true)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function handleNavBar() {
        setNavControl((prevState) => !prevState)
    }

    return (
        <>
            <nav>
                <button onClick={handleNavBar} id="hamburger" style={{ display: (navControl && isMobile) ? 'block' : 'none' }}><img src="icon-hamburger.svg" alt="icon-hamburger" /></button>
                <button onClick={handleNavBar} id="toggle-close" style={{ display: (navControl) ? 'none' : 'block' }}><img src="icon-close.svg" alt="icon-hamburger" /></button>
                {navControl ? <div>
                    <img src="cackrack-logo.jpeg" width="60" height="60" alt="" />
                    <a href="#"><h2>CACKCRACK BOT</h2></a>
                </div> : null}
                <ul id="nav-bar" className={(navControl) ? "hideNav" : "showNav"}>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#footer">Contact</a></li>
                </ul>
            </nav>
        </>
    )
}