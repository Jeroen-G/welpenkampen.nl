import React from 'react';

type Props = {
    board: string;
};

export default function PinterestBoard({ board }: Props) {
    return (
        <a
            data-pin-do="embedBoard"
            data-pin-board-width="800"
            data-pin-scale-height="480"
            data-pin-scale-width="50"
            href={`https://nl.pinterest.com/${board}`}></a>
    );
}
