import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/button';
import Form from '../components/form';
import Graph from '../components/graph';
import { BASE_URL } from '../constants/Constants';
import { StyledContainer, StyledText } from '../globalStyles/GlobalStyles';
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

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: auto auto 30px auto;
    padding: 10px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
    border-radius: 3px;
`;

function Homepage() {
    const { response, loading, error } = useFetch(BASE_URL);
    const data = response && dataFormatter(response, 'day');
    const [groupedData, setGroupedData] = useState<any[]>(data);

    const handleGroupedData = (type: string) => {
        setGroupedData(dataFormatter(response, type));
    };

    return (
        <Container>
            <Header>Metric Dashboard</Header>
            <StyledContainer margin="0 0 20px 0">
                <StyledText>Include the amount of views or clicks below</StyledText>
                <Form />
            </StyledContainer>

            <StyledContainer margin="30px 0">
                {response && (
                    <>
                        <StyledText>
                            Check the metrics by choosing one of the following parameters
                        </StyledText>

                        <ButtonsContainer>
                            <Button onClick={() => handleGroupedData('minute')} text="Minute" />
                            <Button onClick={() => handleGroupedData('hour')} text="Hour" />
                            <Button onClick={() => handleGroupedData('day')} text="Day" />
                        </ButtonsContainer>

                        <Graph
                            data={groupedData || data}
                            dataKeyXAxis="date"
                            dataKeyOne="clicks"
                            dataKeyTwo="views"
                        />
                    </>
                )}

                {error && <p>Error...</p>}
                {loading && <p>Loading...</p>}
            </StyledContainer>
        </Container>
    );
}

export default Homepage;
