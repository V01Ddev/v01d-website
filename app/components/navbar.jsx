import Link from 'next/link'

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
    `

    return (
        <div className="nav-bar">
            <style>{css}</style>
                <ul>
                    <li><Link className="nav-btn" href="/">Home</Link></li>
                    <li><Link className="nav-btn" href="/blog">Blog</Link></li>
                    <li><Link className="nav-btn" href="/lessons">Lessons</Link></li>
                </ul>
        </div>
    )
}
