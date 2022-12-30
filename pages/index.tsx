import fs from 'fs';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import PageMeta from '../components/PageMeta';
import PageTitle from '../components/PageTitle';
import campfire from '../public/campfire.png';

type Post = {
    path: string;
    title: string;
    date: string;
};

type PageProps = {
    allPosts: Post[];
};

function PostE({ post, index }: { post: Post; index: number }) {
    const skew = index % 3 === 0 ? '-skew-y-2 hover:skew-y-0' : 'skew-y-2 hover:skew-y-0';

    return (
        <section className="mt-8 flex w-full items-center justify-between">
            <Link
                href={post.path}
                className={`w-full bg-green-500 py-1 px-2 transition duration-100 sm:w-auto ${skew}`}>
                <h3 className="text-xl font-extrabold text-white antialiased md:text-2xl lg:text-3xl">
                    {post.title}
                </h3>
            </Link>
        </section>
    );
}

export default function Page({ allPosts }: PageProps) {
    return (
        <>
            <PageMeta description="Thema's voor welpenkampen">
                <meta property="og:type" content="website" />
            </PageMeta>
            <Header />
            <Main>
                <>
                    <section className="mx-5 mb-5 grid-cols-2 items-center sm:mx-0 sm:grid md:mx-20">
                        <div className="-skew-y-1">
                            <PageTitle title="Ideeën voor de leukste welpenkampen" />
                        </div>
                        <Image
                            src={campfire}
                            alt="campfire"
                            placeholder="blur"
                            className="max-w-sm rotate-3 rounded-2xl sm:max-w-xs lg:max-w-lg"
                        />
                    </section>
                    <h2 className="mb-5 text-2xl font-bold text-slate-700">Thema&apos;s</h2>
                    <section className="mx-auto grid max-w-screen-md grid-cols-3 gap-8">
                        {allPosts.map((post, i) => (
                            <PostE post={post} index={i} key={i} />
                        ))}
                    </section>
                </>
            </Main>
            <Footer />
        </>
    );
}

export async function getStaticProps() {
    const allPosts = await Promise.all(
        fs
            .readdirSync('pages/thema')
            .filter(path => /\.mdx?$/.test(path))
            .map(path => path.replace(/\.mdx?$/, ''))
            .map(path => `thema/${path}`)
            .map(async path => {
                const mdxModule = await import(`pages/${path}.mdx`);
                const metadata = mdxModule.meta ? mdxModule.meta : null;

                return {
                    path,
                    ...metadata,
                };
            })
    );

    return { props: { allPosts } };
}
