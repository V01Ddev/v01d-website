import createMDX from '@next/mdx'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
    options: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
    },
})

export default withMDX(nextConfig)
