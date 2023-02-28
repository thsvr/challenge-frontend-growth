import React from 'react';
import { useFetch } from './hooks/useFetch';
import { dataFormatter } from './utils/dataFormatter';

function App() {
    const { response } = useFetch('http://localhost:3000/api/v1/metrics');
    const defaultData = response && dataFormatter(response, 'minute');
    console.log('data formatted:', defaultData);
    return <div className="App">test</div>;
}

export default App;
