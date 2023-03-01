import React from 'react';
import { render } from '@testing-library/react';
import Form from './Form';

describe('<Form/>', () => {
    const form = <Form />;

    it('should match the snapshot', () => {
        render(form);
        expect(form).toMatchSnapshot();
    });
});
