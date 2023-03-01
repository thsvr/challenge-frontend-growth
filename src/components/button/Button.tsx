import React from 'react';
import styled from 'styled-components';

interface ButtonStyledProps {
    background?: string;
    color?: string;
}

const ButtonStyled = styled.button<ButtonStyledProps>`
    border-style: solid;
    border-width: 1px;
    border-radius: 3px;
    border-color: #0f4c5c;
    background: ${(props) => props.background};
    color: ${(props) => props.color};
    cursor: pointer;
    margin: 5px;
    padding: 10px;
`;

interface ButtonProps {
    text: string;
    onClick: () => void;
    type?: 'button' | 'submit' | 'reset';
    background?: string;
    color?: string;
}

const Button = ({
    text,
    onClick,
    type = 'button',
    background = '#f8f9fa',
    color = '#0f4c5c',
}: ButtonProps) => {
    return (
        <ButtonStyled onClick={onClick} type={type} background={background} color={color}>
            {text}
        </ButtonStyled>
    );
};

export default Button;
