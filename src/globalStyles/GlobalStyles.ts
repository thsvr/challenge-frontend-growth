import styled from 'styled-components';

export const StyledText = styled.p`
    color: #22223b;
    font-size: 20px;
`;

interface StyledContainerI {
    margin?: string;
    width?: string;
}

export const StyledContainer = styled.div<StyledContainerI>`
    display: flex;
    flex-direction: column;
    background: #f5f9fa;
    padding: 10px;
    margin: ${(props) => props.margin};
    width: ${(props) => props.width};
    box-shadow: 0 4px 8px 0 #22223b, 0 6px 20px 0 #1b263b;
`;
