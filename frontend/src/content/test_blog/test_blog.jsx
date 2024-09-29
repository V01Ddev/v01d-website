import NavBar from '../../components/navbar.jsx'
import Font from '../../components/font.jsx'
import {MDXProvider} from '@mdx-js/react';
import MyMarkdown from './test_blog.mdx'

export default function Page() {
    return (
        <>
            <Font />
            <NavBar />
            <MDXProvider components={components}>
                <MyMarkdown />
            </MDXProvider>
        </>
    )
}
