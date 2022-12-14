import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const reachartData =useLoaderData();
    
    return (
        <div>
            
                            
<AreaChart width={900} height={350} data={reachartData.data}
  margin={{ top: 50, right: 50, left: 50, bottom: 50 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="total" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="name" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
        </div>
    );
};

export default Statistics;