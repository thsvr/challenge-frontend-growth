import styled from 'styled-components';

export const StyledText = styled.p`
    color: #22223b;
    font-size: 20px;
`;

interface StyledContainerI {
    margin?: string;
}

export const StyledContainer = styled.div<StyledContainerI>`
    display: flex;
    flex-direction: column;
    background: #eaeaea;
    padding: 10px;
    margin: ${(props) => props.margin};
    box-shadow: 0 4px 8px 0 #22223b, 0 6px 20px 0 #1b263b;
`;
