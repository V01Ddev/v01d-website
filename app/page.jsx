import { useState } from 'react';

function Home() {
    return (
        <img src='assets/logo.svg'>
        <h6 id="typing"></h6>
    );
}

function Aboutme() {
    return (
        <h3>About me</h3>

        <p>I am a highschool student with a strong affinity for electronics and programming.</p>
    );
}

function Work() {
    return (
        <h2>You can find my code on <a href="https://github.com/V01Ddev" target="_blank">github</a></h2>
        <h2>Some of my projects are documented on my <a href="blog/blog.html">blog</a></h2>
    );
}

export default function landing() {
    return (
        <Home />,
        <Aboutme />,
        <Work />
    );
};
