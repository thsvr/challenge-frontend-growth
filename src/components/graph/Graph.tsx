import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    // AreaChart,
    // ReferenceLine,
    // Area,
} from 'recharts';
import { DefaultData } from '../../types/types';

/* eslint-disable no-unused-vars */

interface GraphProps {
    data: DefaultData[];
    dataKeyXAxis: string;
    dataKeyOne: string;
    dataKeyTwo: string;
}

const Graph = ({ data, dataKeyXAxis, dataKeyOne, dataKeyTwo }: GraphProps) => {
    return (
        <div style={{ position: 'relative', width: '100%', paddingBottom: '300px' }}>
            <div
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    top: 0,
                }}
            >
                <ResponsiveContainer width="90%">
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={dataKeyXAxis} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey={dataKeyOne} fill="#457b9d" />
                        <Bar dataKey={dataKeyTwo} fill="#00b4d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Graph;
