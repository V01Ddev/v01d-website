import Image from 'next/image'
import Logo from '/public/logo.svg';
import NavBar from './components/navbar.jsx'
import TypeWriter from './components/typewriter.jsx'

function Fonts() {
    return (
        <>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200&display=swap" rel="stylesheet" />
        </>
    )
}

function Home() {
    return (
        <section className="Home">
            <Image className="home_logo" src={Logo} alt="v01d's logo" />
            <TypeWriter />
        </section>
    )
}

function Aboutme() {
    return (
        <section className="Aboutme">
            <h2>About me</h2>
            <p>I am a highschool student with a strong affinity for electronics and programming.</p>
        </section>
    )
}

function Work() {
    return (
        <section className="Work">
            <h3>You can find my work on </h3>
            <a href="https://github.com/V01Ddev" target="_blank">github</a>
        </section>
    )
}

export default function Page() {
    return (
        <>
            <Fonts />
            <NavBar />
            <Home />
            <Aboutme />
            <Work />
        </>
    )
}
