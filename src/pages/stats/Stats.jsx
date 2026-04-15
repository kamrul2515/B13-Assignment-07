import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const Stats = () => {
    const [interactionData, setInteractionData] = useState([]);
    const [total, setTotal] = useState(0);

    const loadData = () => {
        const saved = sessionStorage.getItem('user_interactions');
        const interactions = saved ? JSON.parse(saved) : [];

        setTotal(interactions.length);

        const count = interactions.reduce((acc, item) => {
            acc[item.type] = (acc[item.type] || 0) + 1;
            return acc;
        }, {});

        setInteractionData([
            { name: 'Text',  value: count.Text || 0,  fill: '#7E35E1' },
            { name: 'Call',  value: count.Call || 0,  fill: '#244D3F' },
            { name: 'Video', value: count.Video || 0, fill: '#37A163' },
        ]);
    };

    useEffect(() => {
        loadData();

        window.addEventListener('interactionsUpdated', loadData);

        return () => window.removeEventListener('interactionsUpdated', loadData);
    }, []);

    return (
        <div className='bg-[#F8FAFC] min-h-screen py-20 px-4'>
            <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl font-bold text-[#1F2937] mb-10">Friendship Analytics</h2>
                
                <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-50">
                    <h3 className="text-xl font-medium text-[#244D3F] mb-6">By Interaction Type</h3>
                    
                    <div className="h-87.5 w-full">
                        <ResponsiveContainer>
                            <PieChart>
                                <Pie 
                                    data={interactionData} 
                                    innerRadius={80} 
                                    outerRadius={120} 
                                    paddingAngle={5} 
                                    dataKey="value" 
                                    stroke="none"
                                >
                                    {interactionData.map((entry, index) => (
                                        <Cell key={index} fill={entry.fill} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend verticalAlign="bottom" height={36}/>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    {total === 0 && (
                        <p className="text-center text-gray-400 mt-5">
                            No interactions yet. Log some from the friend details page.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Stats;