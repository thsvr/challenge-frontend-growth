import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    border-color: #1b263b;
    border-radius: 3px;
    color: #22223b;
`;

interface InputProps {
    type?: string;
    value: string | number | undefined;
    min?: string;
    max?: string;
    id: string;
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    checked?: boolean;
    placeholder?: string;
    required?: boolean;
}

const Input = ({
    type = 'text',
    value,
    onChange,
    id,
    min,
    max,
    checked = false,
    placeholder,
    required = false,
}: InputProps) => {
    return (
        <StyledInput
            type={type}
            value={value}
            onChange={onChange}
            id={id}
            min={min}
            max={max}
            checked={checked}
            placeholder={placeholder}
            required={required}
            data-testid="input"
        />
    );
};

export default Input;
