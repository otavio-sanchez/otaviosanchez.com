// test/pages/index.test.js

import { render, screen } from '@testing-library/react';
import React from 'react';

import Menu from '../';

const mock = {
    title: 'ABC',
    subtitle: 'DEF',
    items: []
};

describe('Menu', () => {
    it('should render', () => {
        render(<Menu title={mock.title} subtitle={mock.subtitle} items={mock.items} />);

        const title = screen.getByText(/ABC/i);

        const subtitle = screen.getByText(/DEF/i);

        expect(title).toBeTruthy();
        expect(subtitle).toBeTruthy();
    });
});
