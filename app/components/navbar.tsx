import { Link } from "@remix-run/react";

export default function NavBar() {
    const css = `
.nav-bar {
    position: fixed;
    left: 1vw;
    top: 5vh;
    text-color: #4AF626;
    font-size: 1vw;
    color: #4AF626;
}

.nav-bar ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
}

.nav-bar li {
    padding-left: 1vw;
    padding-right: 1vw;
}

.nav-bar a {
    font-size: 1.5vw;
    text-decoration: none;
    text-color: #4AF626;
    color: #4AF626;
}

@media only screen and (max-width: 600px) {

    .nav-bar li {
        padding-left: 3vw;
        padding-right: 3vw;
    }
    
    .nav-bar a {
        font-size: 5vw;
        text-decoration: none;
        text-color: #4AF626;
        color: #4AF626;
    }
}
    `

    return (
        <div className="nav-bar">
            <style>{css}</style>
                <ul>
                    <li><Link className="nav-btn" to="/" reloadDocument >Home</Link></li>
                    <li><Link className="nav-btn" to="/blog">Blog</Link></li>
                </ul>
        </div>
    )
}
