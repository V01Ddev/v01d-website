import React from 'react'
import { Link } from "@remix-run/react";

export default function BlogCard(props) {

    const blog_link = "" + "/content/" + props.title.replace(/ /g, '_') + "/" + "index.mdx";
    return (
        <>
        <Link className="BlogCard" to={blog_link} reloadDocument >
            <div>
                <h2>{props.title}</h2>
                {/* {props.img ? <Image src={thm_test_blog} alt={props.title} /> : null} */}
                <h3>{props.dis}</h3>
            </div>
        </Link>
        </>
    )
};
