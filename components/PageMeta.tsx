import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

type Props = {
    title?: string;
    description?: string;
    children?: React.ReactElement;
};

export default function PageMeta({ title, description, children }: Props) {
    const { pathname } = useRouter();

    const pageTitle = title ? `welpenkampen.nl | ${title}` : 'welpenkampen.nl';

    return (
        <Head>
            <title>{pageTitle}</title>
            {description && (
                <>
                    <meta name="description" content={description} />
                    <meta property="og:description" content={description} />
                </>
            )}
            <meta property="og:title" content={pageTitle} />
            <meta property="og:url" content={`https://welpenkampen.nl${pathname}`} />
            {children}
        </Head>
    );
}
