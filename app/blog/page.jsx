"use client"
import React, { useEffect, useState } from 'react';
import './styles.css'
import NavBar from '../components/navbar.jsx'

function Fonts() {
    return (
        <>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200&display=swap" rel="stylesheet" />
        </>
    )
}

function Blog() {

    return (
        <section className="Blog">
            <h2>Blog</h2>
        </section>
    )
}


function BlogCards() {

    const [directories, setDirectories] = useState([]);

    console.log(process.cwd())
    useEffect(() => {
        fetch('./app/api/BlogCards')
            .then(response => response.json())
            .then(data => setDirectories(data.directories))
            .catch(error => console.error('Error fetching directories:', error));
    }, []);

    return (
        <>
        </>
    )
}

export default function Page() {
    return (
        <>
        <Fonts />
        <NavBar />
        <Blog />
        <BlogCards />
        </>
    )
}
