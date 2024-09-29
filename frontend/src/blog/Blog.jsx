import './Blog.scss'
import React, { useEffect, useState } from 'react'
import NavBar from '../components/navbar.jsx'
import Font from '../components/font.jsx'


function BlogGallery() {
    return (
    <div className="BlogGallery">
    </div>
    )
}

function Blog() {
    return (
        <section className="Blog">
            <h1>Blog</h1>
            <br />
            <h2>still haven't written any blogs 😐</h2>
        </section>
    )
}

export default function Page() {
    return (
        <div className="BlogPage">
            <Font />
            <NavBar />
            <Blog />
        </div>
    )
}
