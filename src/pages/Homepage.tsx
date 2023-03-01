import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/button';
import Form from '../components/form';
import Graph from '../components/graph';
import { BASE_URL } from '../constants/Constants';
import { StyledContainer, StyledText } from '../globalStyles/GlobalStyles';
import { useFetch } from '../hooks/useFetch';
import { DefaultData } from '../types/types';
import { dataFormatter } from '../utils/dataFormatter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartColumn, faSpinner, faBug } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
    background: #f5f5f5;
    padding: 40px;
`;

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Header = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #4a4e69;
    padding: 10px 0 10px 10px;
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
    const [dateType, setDateType] = useState<string>('day');
    const data = response && dataFormatter(response, dateType);
    const [groupedData, setGroupedData] = useState<DefaultData[]>();

    const handleGroupedData = (type: string) => {
        setDateType(type);
        if (response !== undefined) {
            setGroupedData(dataFormatter(response, type));
        }
    };

    return (
        <Container>
            <HeaderContainer>
                <FontAwesomeIcon icon={faChartColumn} size="lg" color="#4a4e69" />
                <Header>Metric Dashboard</Header>
            </HeaderContainer>

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

                        {data !== undefined && (
                            <Graph
                                data={groupedData ? groupedData : data}
                                dataKeyXAxis="date"
                                dataKeyOne="clicks"
                                dataKeyTwo="views"
                            />
                        )}
                    </>
                )}

                {error && <FontAwesomeIcon icon={faBug} spinPulse size="6x" color="#4a4e69" />}
                {loading && (
                    <FontAwesomeIcon icon={faSpinner} spinPulse size="6x" color="#4a4e69" />
                )}
            </StyledContainer>
        </Container>
    );
}

export default Homepage;
