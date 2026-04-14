import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const Stats = () => {
    const [interactionData, setInteractionData] = useState([]);
    const [totalInteractions, setTotalInteractions] = useState(0);

    const loadData = () => {
        try {
            const saved = sessionStorage.getItem('user_interactions');
            if (saved) {
                const interactions = JSON.parse(saved);
                setTotalInteractions(interactions.length);

                const count = interactions.reduce((acc, item) => {
                    acc[item.type] = (acc[item.type] || 0) + 1;
                    return acc;
                }, {});

                setInteractionData([
                    { name: 'Text',  value: count.Text || 0,  fill: '#8B5CF6' },
                    { name: 'Call',  value: count.Call || 0,  fill: '#1E3A34' },
                    { name: 'Video', value: count.Video || 0, fill: '#34A853' },
                ]);
            } else {
                setTotalInteractions(0);
                setInteractionData([
                    { name: 'Text',  value: 0,  fill: '#8B5CF6' },
                    { name: 'Call',  value: 0,  fill: '#1E3A34' },
                    { name: 'Video', value: 0, fill: '#34A853' },
                ]);
            }
        } catch (error) {
            console.error("Error loading stats:", error);
        }
    };

    useEffect(() => {
        // রিলোড চেক করার লজিক
        const navEntries = performance.getEntriesByType("navigation");
        if (navEntries.length > 0 && navEntries[0].type === "reload") {
            sessionStorage.removeItem('user_interactions');
        }

        loadData();
        window.addEventListener('interactionsUpdated', loadData);
        return () => window.removeEventListener('interactionsUpdated', loadData);
    }, []);

    return (
        <div className='bg-[#F8FAFC] min-h-screen'>
            <div className="pt-20 pb-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="pb-6 mb-10">
                        <h2 className="text-5xl font-bold text-[#1F2937] mb-2">Friendship Analytics</h2>
                    </div>

                    <div className="bg-white rounded-3xl p-8 border border-gray-50 shadow-sm">
                        <h3 className="text-lg font-semibold mb-6 text-[#1E3A34]">By Interaction Type</h3>

                        <div className="h-[350px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={interactionData}
                                        cx="50%" cy="50%"
                                        innerRadius={80} outerRadius={120}
                                        paddingAngle={8}
                                        dataKey="value"
                                        stroke="none"
                                        activeShape={false}
                                    >
                                        {interactionData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.fill} style={{ outline: 'none' }} />
                                        ))}
                                    </Pie>
                                    <Tooltip 
                                        cursor={false}
                                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', outline: 'none' }}
                                    />
                                    <Legend 
                                        verticalAlign="bottom" align="center" iconType="circle" iconSize={8}
                                        wrapperStyle={{ paddingTop: '20px' }}
                                        formatter={(value) => <span className="text-gray-500 font-medium px-2">{value}</span>}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>

                        {totalInteractions === 0 && (
                            <div className="text-center mt-10 text-gray-400 font-medium">
                                No data available to display.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;