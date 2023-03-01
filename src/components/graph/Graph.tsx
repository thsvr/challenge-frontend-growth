import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface GraphProps {
    data: any[];
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
                <Bar dataKey={dataKeyOne} fill="#03045e" />
                <Bar dataKey={dataKeyTwo} fill="#1b263b" />
            </BarChart>
        </div>
    );
};

export default Graph;
