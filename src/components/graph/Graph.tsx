import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { DefaultData } from '../../types/types';

interface GraphProps {
    data: DefaultData[];
    dataKeyXAxis: string;
    dataKeyOne: string;
    dataKeyTwo: string;
}

const Graph = ({ data, dataKeyXAxis, dataKeyOne, dataKeyTwo }: GraphProps) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <BarChart width={600} height={500} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={dataKeyXAxis} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey={dataKeyOne} fill="#457b9d" />
                <Bar dataKey={dataKeyTwo} fill="#00b4d8" />
            </BarChart>
        </div>
    );
};

export default Graph;
