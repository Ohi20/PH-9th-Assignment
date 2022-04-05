import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import "./Dashboard.css";

const Dashboard = () => {
    const [info, setInfo] = useState([]);
    useEffect(() => {
        fetch('Data.json')
            .then(res => res.json())
            .then(data => setInfo(data))
    }, [])

    return (
        <div>
            <h2 className='dash-header'>Dashboard</h2>
            <div className='charts'>
                <div className='linechart'>
                    <h2>LineChart</h2>
                    <LineChart width={600} height={350} data={info}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey={'month'} stroke="#5B9DA6" />
                        <Line type="monotone" dataKey={'investment'} stroke="#3DA6AD" />
                        <Line type="monotone" dataKey={'sell'} stroke="#FFA987" />
                        <Line type="monotone" dataKey={'revenue'} stroke="#322F57" />
                    </LineChart>
                </div>
                <div className='piechart'>
                    <h2>Barchart</h2>
                    <BarChart width={600} height={350} data={info}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="month" fill="#5B9DA6" />
                        <Bar dataKey="sell" fill="#FFA987" />
                        <Bar dataKey="revenue" fill="#322F57" />
                        <Bar dataKey="investment" fill="#3DA6AD" />
                    </BarChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;