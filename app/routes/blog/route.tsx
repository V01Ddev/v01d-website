import "./styles.css"
import React, { useEffect, useState } from 'react'
import NavBar from '~/components/navbar.tsx'
import BlogCard from '~/components/blogcard.tsx'

function BlogGallery() {

    return (
    <div className="BlogGallery">
        <BlogCard title="First Post" dis="My first Blog Post" />
    </div>
    )
}

function Blog() {

    return (
        <section className="Blog">
            <h1>Blog</h1>
            <br />
            <h2>still haven't written any blogs 😐</h2>
            <BlogGallery />
        </section>
    )
}

export default function Page() {
    return (
        <>
        <NavBar />
        <Blog />
        </>
    )
}
