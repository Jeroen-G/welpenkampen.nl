import React from 'react';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PageMeta from './PageMeta';

type Props = {
    children: React.ReactElement;
    meta: {
        title: string;
        description?: string;
        tags?: string[];
    };
};

export default function PostLayout({ children, meta }: Props) {
    return (
        <>
            <PageMeta title={meta.title} description={meta.description}>
                <meta property="og:type" content="article" />
            </PageMeta>
            <Header />
            <Main>
                <>
                    {meta.tags && (meta.tags?.length || 0) > 0 && (
                        <section>
                            {meta.tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="rounded-full bg-slate-200 px-2 py-1 font-mono text-xs">
                                    {tag}
                                </span>
                            ))}
                        </section>
                    )}
                    <article className="prose prose-slate max-w-none prose-headings:text-slate-700 md:prose-lg">
                        {children}
                    </article>
                </>
            </Main>
            <Footer />
        </>
    );
}
