import React from 'react';
import styled from 'styled-components';
import { useFetch } from '../hooks/useFetch';
import { dataFormatter } from '../utils/dataFormatter';

const Container = styled.div`
    background: #f5f5f5;
    padding: 40px;
`;

const Header = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #4a4e69;
    padding: 10px 0;
`;

function Homepage() {
    const { response } = useFetch('http://localhost:3000/api/v1/metrics');
    const defaultData = response && dataFormatter(response, 'minute');
    console.log('data formatted:', defaultData);
    return (
        <Container>
            <Header>Metric Dashboard</Header>
        </Container>
    );
}

export default Homepage;
