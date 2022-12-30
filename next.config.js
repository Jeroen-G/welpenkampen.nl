/* eslint-disable @typescript-eslint/no-var-requires */
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/, // /\.(md|mdx)$/
    options: {
        // If you use remark-gfm, you'll need to use next.config.mjs
        // as the package is ESM only
        // https://github.com/remarkjs/remark-gfm#install
        remarkPlugins: [],
        rehypePlugins: [],
        // If you use `MDXProvider`, uncomment the following line.
        // providerImportSource: "@mdx-js/react",
    },
});

module.exports = withMDX({
    // Experimental Rust compiler for MDX
    experimental: {
        mdxRs: true,
    },
    // Append the default value with md extensions
    pageExtensions: ['ts', 'tsx', 'mdx'],
    // Not yet supported on Netlify
    images: {
        unoptimized: true,
    },
});
