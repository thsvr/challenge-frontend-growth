import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import 'jest-styled-components';
import Button from './Button';

describe('<Button/>', () => {
    const buttonText = 'test';
    const mockOnClick = jest.fn();

    const defaultButton = <Button text={buttonText} onClick={mockOnClick} />;
    const submitButton = <Button text={buttonText} onClick={mockOnClick} type="submit" />;
    const resetButton = <Button text={buttonText} onClick={mockOnClick} type="reset" />;
    const colorfulButton = (
        <Button text={buttonText} onClick={mockOnClick} background="grey" color="darkGrey" />
    );

    it('should match the text', () => {
        render(defaultButton);
        const element = screen.getByRole('button');

        expect(element).toHaveTextContent('test');
    });

    it('should have the submit type', () => {
        render(submitButton);
        const element = screen.getByRole('button');

        expect(element).toHaveAttribute('type', 'submit');
    });

    it('should have the reset type', () => {
        render(resetButton);
        const element = screen.getByRole('button');

        expect(element).toHaveAttribute('type', 'reset');
    });

    it('should call onClick prop when clicked', () => {
        render(defaultButton);

        fireEvent.click(screen.getByText(/test/i));

        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('should have the default white background color', () => {
        render(defaultButton);
        const element = screen.getByRole('button');

        expect(element).toHaveStyleRule('background', '#f8f9fa');
    });

    it('should have the default blue color', () => {
        render(defaultButton);
        const element = screen.getByRole('button');

        expect(element).toHaveStyleRule('color', '#0f4c5c');
    });

    it('should have the default white background color', () => {
        render(colorfulButton);
        const element = screen.getByRole('button');

        expect(element).toHaveStyleRule('background', 'grey');
    });

    it('should have the default blue color', () => {
        render(colorfulButton);
        const element = screen.getByRole('button');

        expect(element).toHaveStyleRule('color', 'darkGrey');
    });
});
