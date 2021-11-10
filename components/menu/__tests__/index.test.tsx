// test/pages/index.test.js

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import Menu from '../';

const mock = {
    title: 'ABC',
    items: [
        {
            text: 'Link',
            link: '/router'
        }
    ]
};

describe('Menu', () => {
    it('should render', () => {
        render(<Menu title={mock.title} items={mock.items} />);

        const title = screen.getByText(/ABC/i);

        expect(title).toBeTruthy();
    });
});
