import React from 'react';
import Balancer from 'react-wrap-balancer';

type Props = {
    title: string;
};

export default function PageTitle({ title }: Props) {
    return (
        <h1 className="mb-10 text-4xl font-extrabold text-slate-700">
            <Balancer>{title}</Balancer>
        </h1>
    );
}
