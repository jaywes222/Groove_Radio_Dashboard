import React from 'react';
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import { Card } from 'shadcdn';


const ChartCard = ({ title, data }) => {
    return (
        <Card className="p-4">
            <h2 className="text-lg font-semibold mb-4">{title}</h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="value" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </Card>
    );
};

export default ChartCard;
