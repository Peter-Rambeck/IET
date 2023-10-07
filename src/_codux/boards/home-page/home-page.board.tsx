import React from 'react';
import { createBoard } from '@wixc3/react-board';
import homePage from '../../../pages/homePage/HomePage';

export default createBoard({
    name: 'homePage',
    Board: () => <homePage />,
    isSnippet: true,
});
