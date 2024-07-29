import React from "react";
import Image from 'next/image'
import Logo from "../public/logo.svg";

export default function LandingPage() {
    return (
        <Image priority src={Logo} alt="v01d's logo" />

        <h2>{"You can find my code on"}</h2>
        <Link href="https://github.com/V01Ddev" target="_blank">github</Link>
        <h2>"Some of my projects are documented on my"</h2>
        <Link to="blog/blog.html">blog</Link>
    );
}
