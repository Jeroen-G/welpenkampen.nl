import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import logo from '../public/logo.png';

export default function Header() {
    return (
        <header className="container mx-auto flex items-center p-2 py-10 lg:max-w-screen-lg">
            <Image src={logo} alt="logo" height={50} placeholder="blur" />
            <Link href="/" className="text-3xl font-extrabold text-green-600 md:text-4xl">
                Welpenkampen.nl
            </Link>
        </header>
    );
}
