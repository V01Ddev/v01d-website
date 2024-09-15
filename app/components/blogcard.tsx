import React from 'react'
import Image from 'next/image'
import thm_test_blog from '/public/blog_thm/test_blog.jpg'
import Link from 'next/link'


export default function BlogCard(props) {

    const blog_link = "blog/content/" + props.title.replace(/ /g, '_') + "/";
    return (
        <>
        <Link className="BlogCard" href={blog_link} prefetch={false}>
            <div>
                <h2>{props.title}</h2>
                {props.img ? <Image src={thm_test_blog} alt={props.title} /> : null}
                <h3>{props.dis}</h3>
            </div>
        </Link>
        </>
    )
};
