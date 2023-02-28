import React from 'react';
import styled from 'styled-components';

interface StyledLabelProps {
    margin?: string;
}

const StyledLabel = styled.label<StyledLabelProps>`
    color: #1b263b;
    margin: ${(props) => props.margin};
`;

interface LabelProps {
    text: string;
    htmlFor: string;
    margin?: string;
}

const Label = ({ htmlFor, text, margin = '0' }: LabelProps) => {
    return (
        <StyledLabel htmlFor={htmlFor} margin={margin}>
            {text}
        </StyledLabel>
    );
};

export default Label;
