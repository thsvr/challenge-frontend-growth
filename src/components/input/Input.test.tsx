import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import Input from './Input';

describe('<Input/>', () => {
    const mockOnChange = jest.fn();
    const defaultInput = <Input value="value" id="id" onChange={mockOnChange} />;

    const styledInput = (
        <Input
            value="value"
            id="test"
            type="radio"
            min="0"
            max="100"
            onChange={mockOnChange}
            checked={true}
            placeholder="placeholder"
            required
        />
    );

    it('should have a value', () => {
        render(defaultInput);
        const element = screen.getByTestId('input');

        expect(element).toHaveAttribute('value', 'value');
    });

    it('should have the type text set by default', () => {
        render(defaultInput);
        const element = screen.getByTestId('input');

        expect(element).toHaveAttribute('type', 'text');
    });

    it('should have an id', () => {
        render(defaultInput);
        const element = screen.getByTestId('input');

        expect(element).toHaveAttribute('id', 'id');
    });

    it('should have radio type passed as a prop', () => {
        render(styledInput);
        const element = screen.getByTestId('input');

        expect(element).toHaveAttribute('type', 'radio');
    });

    it('should have a min value passed as a prop', () => {
        render(styledInput);
        const element = screen.getByTestId('input');

        expect(element).toHaveAttribute('min', '0');
    });

    it('should have max value passed as a prop', () => {
        render(styledInput);
        const element = screen.getByTestId('input');

        expect(element).toHaveAttribute('max', '100');
    });

    it('should have checked attribute passed as a prop', () => {
        render(styledInput);
        const element = screen.getByTestId('input');

        expect(element).toHaveAttribute('checked');
    });

    it('should have placeholder text passed as a prop', () => {
        render(styledInput);
        const element = screen.getByTestId('input');

        expect(element).toHaveAttribute('placeholder', 'placeholder');
    });

    it('should have a required attribute passed as a prop', () => {
        render(styledInput);
        const element = screen.getByTestId('input');

        expect(element).toHaveAttribute('required');
    });
});
