import './blog.css'
import React, { useEffect, useState } from 'react'
import Fonts from '@/components/fonts.jsx'
import NavBar from '@/components/navbar.jsx'
{/* import BlogCard from '@/components/blogcard.jsx'*/}

function Blog() {

    return (
        <section className="Blog">
            <h1>Blog</h1>
            <h2>still haven't written any blogs 😐</h2>
        </section>
    )
}

function BlogGallery() {

    return (
    <div className="BlogGallery">
        {/* <BlogCard title="test blog" dis="Testing blog card component" img={true}/>*/}
    </div>
    )
}

export default function Page() {
    return (
        <>
        <Fonts />
        <NavBar />
        <Blog />
        </>
    )
}
