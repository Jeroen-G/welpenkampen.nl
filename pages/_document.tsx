import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="utf-8" />
                <link rel="home" href="https://welpenkampen.nl" />
                <script async defer src="//assets.pinterest.com/js/pinit.js"></script>
            </Head>
            <body className="bg-green-600 text-slate-800">
                <div className="m-3 rounded-2xl bg-white">
                    <Main />
                    <NextScript />
                </div>
            </body>
        </Html>
    );
}
