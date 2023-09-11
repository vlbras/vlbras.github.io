import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                    Vladyslav Braslavskyi Portfolio
                </Link>
            </div>
            <a href="https://docs.google.com/document/d/1fwFzwE4qh19sbpyyjnU2xWUcwsRK7R1F360M0OX3DcA" className="cta-btn">Resume</a>
        </div>
    )
}

export default Navbar;