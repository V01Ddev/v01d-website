"use client"
import Fonts from '@/components/fonts.jsx'
import NavBar from '@/components/navbar.jsx'
import Content from './content.mdx';


export default function Page() {
    return (
        <>
            <header>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css" crossorigin="anonymous" />
                <Fonts />
                <NavBar />
            </header>
            <div className="Content">
                <Content />
            </div>
        </>
    );
}
