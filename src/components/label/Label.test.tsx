import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import Label from './Label';

describe('<Label/>', () => {
    const defaultLabel = <Label htmlFor="test" text="label" />;
    const styledLabel = <Label htmlFor="test" text="label" margin="1px" />;

    it('should have the text label', () => {
        render(defaultLabel);
        const element = screen.getByText('label');

        expect(element).toBeInTheDocument();
    });

    it('should have the htmlFor attribute', () => {
        render(defaultLabel);
        const element = screen.getByText('label');

        expect(element).toHaveAttribute('for', 'test');
    });

    it('should have 0 as a default margin prop value', () => {
        render(defaultLabel);
        const element = screen.getByText('label');

        expect(element).toHaveStyleRule('margin', '0');
    });

    it('should have 1px as a passed value for margin prop', () => {
        render(styledLabel);
        const element = screen.getByText('label');

        expect(element).toHaveStyleRule('margin', '1px');
    });
});
