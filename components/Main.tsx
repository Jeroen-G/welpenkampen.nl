import React from 'react';

type Props = {
    children: React.ReactElement;
};

export default function Main({ children }: Props) {
    return (
        <div className="container mx-auto lg:max-w-screen-lg">
            <main className="min-h-screen p-4 pb-20">{children}</main>
        </div>
    );
}
