import React, { useEffect, useState } from 'react';
import { FaPhoneAlt, FaVideo, FaCommentDots } from 'react-icons/fa';

const Friend = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState("All");

    const loadInteractions = () => {
        const saved = sessionStorage.getItem('user_interactions');
        setData(saved ? JSON.parse(saved) : []);
    };

    useEffect(() => {
        loadInteractions();
        window.addEventListener('interactionsUpdated', loadInteractions);
        return () => {
            window.removeEventListener('interactionsUpdated', loadInteractions);
        };
    }, []);

    const filtered = filter === "All" 
        ? data 
        : data.filter(d => d.type === filter);

    return (
        <div className='bg-[#F8FAFC] min-h-screen py-16 px-4'>
            <div className="max-w-4xl mx-auto">
                <div className="mb-10">
                    <h2 className="text-5xl font-bold text-[#1F2937] pb-6">Timeline</h2>
                    
                    <select 
                        onChange={(e) => setFilter(e.target.value)} 
                        className="p-4 border border-gray-200 rounded-xl font-medium 
                        text-[#64748B] outline-none shadow-sm w-52"
                    >
                        <option value="All">Filter timeline</option>
                        <option value="Call">Call</option>
                        <option value="Text">Text</option>
                        <option value="Video">Video</option>
                    </select>
                </div>

                <div className="space-y-4">
                    {filtered.length > 0 ? (
                        filtered.map(item => (
                            <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5">
                                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 text-xl">
                                    {item.type === "Call" && <FaPhoneAlt className="text-pink-500" />}
                                    {item.type === "Text" && <FaCommentDots className="text-purple-500" />}
                                    {item.type === "Video" && <FaVideo className="text-blue-500" />}
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-gray-800 text-lg">
                                        {item.type} 
                                        <span className="text-gray-400 font-normal text-base"> with {item.name}</span>
                                    </h4>
                                    <p className="text-gray-400 text-sm">{item.date}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 text-[#64748B]">
                            No interactions logged yet. Start by clicking Call, Text or Video!
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Friend;