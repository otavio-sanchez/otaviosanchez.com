// test/pages/index.test.js

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import Button from '../';

describe('Button', () => {
    it('should render and click', () => {
        const onClick = jest.fn();
        render(<Button onClick={onClick}> ABC </Button>);

        const text = screen.getByText(/ABC/i);

        fireEvent.click(text);

        expect(text).toBeTruthy();
        expect(onClick).toBeCalled();
    });
});
