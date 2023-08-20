import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                    Vladyslav Braslavskyi Portfolio
                </Link>
            </div>
            <a href="https://docs.google.com/document/d/1caUTv15Ye-iwxDz-CvC_DUeeAHbcKe28d-Hw6e4eiTA" className="cta-btn">Resume</a>
        </div>
    )
}

export default Navbar;