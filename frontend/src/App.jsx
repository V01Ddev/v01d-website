import { useState } from 'react'
import './App.css'
import Font from './components/font.jsx'
import NavBar from './components/navbar.jsx'
import TypeWriter from './components/typewriter.jsx'
import Logo from './assets/v01d.svg'

function Home() {
    return (
        <section className="Home">
            <img className="home_logo" src={Logo} alt="v01d's logo" />
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

export default function App() {
    return (
        <>
            <Font />
            <NavBar />
            <Home />
            <Aboutme />
            <Work />
        </>
    );
}
