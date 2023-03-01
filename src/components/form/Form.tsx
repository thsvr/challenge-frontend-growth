import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import styled from 'styled-components';
import { BASE_URL } from '../../constants/Constants';
import { sendPostRequest } from '../../utils/sendPostRequest';
import Button from '../button/Button';
import Input from '../input';
import Label from '../label';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    padding: 10px;
`;

const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

interface InputWrapperProps {
    flexDirection: 'row' | 'rowReverse' | 'column' | 'columnReverse' | 'initial' | 'inherit';
}

const InputWrapper = styled.div<InputWrapperProps>`
    display: flex;
    align-items: baseline;
    flex-direction: ${(props) => props.flexDirection};
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

const Form = () => {
    const [metricValue, setMetricValue] = useState(0);
    const [metricName, setMetricName] = useState('Views');
    const [data, setData] = useState(new Date());

    const handleSubmit = () => {
        sendPostRequest(BASE_URL, {
            value: metricValue,
            name: metricName,
            timestamp: data,
        });
        setMetricValue(0);
        setMetricName('');
    };

    return (
        <StyledForm role="form">
            <InputContainer>
                <InputWrapper flexDirection="column">
                    <Label htmlFor="options" text="Metric" margin=" 0 0 10px 0" />
                    <InputWrapper flexDirection="row">
                        <Input
                            id="view"
                            type="radio"
                            value="Views"
                            checked={metricName === 'Views' ? true : false}
                            onChange={(event: any) => setMetricName(event.target.value)}
                            data-testid="input"
                        />
                        <Label htmlFor="view" text="View" />
                    </InputWrapper>

                    <InputWrapper flexDirection="row">
                        <Input
                            id="click"
                            type="radio"
                            value="Clicks"
                            checked={metricName === 'Clicks' ? true : false}
                            onChange={(event: any) => setMetricName(event.target.value)}
                        />
                        <Label htmlFor="click" text="Click" />
                    </InputWrapper>
                </InputWrapper>

                <InputWrapper flexDirection="column">
                    <Label htmlFor="chart" text="Choose a day with time" margin=" 0 0 10px 0" />
                    <DateTimePicker onChange={setData} value={data} />
                </InputWrapper>

                <InputWrapper flexDirection="column">
                    <Label
                        htmlFor="metric"
                        text="Include the amount of chosen metric"
                        margin=" 0 0 10px 0"
                    />
                    <Input
                        id="metric"
                        type="number"
                        min="0"
                        max="100"
                        value={metricValue}
                        onChange={(event: any) => setMetricValue(event.target.value)}
                        placeholder="0 - 100"
                        required
                    />
                </InputWrapper>
            </InputContainer>

            <ButtonContainer>
                <Button type="submit" onClick={handleSubmit} text="Submit" />
            </ButtonContainer>
        </StyledForm>
    );
};

export default Form;
