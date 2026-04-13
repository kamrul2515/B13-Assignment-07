import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const FriendsDetails = () => {
    const { id } = useParams();
    const [friend, setFriend] = useState(null);

    useEffect(() => {
        fetch("/friends.json")
            .then(res => res.json())
            .then(data => {
                const foundFriend = data.find(f => f.id === parseInt(id));
                setFriend(foundFriend);
            });
    }, [id]);

    if (!friend) return <div className="text-center py-20 font-['Geist']">Loading details...</div>;

    return (
        <div className="bg-[#F8FAFC] min-h-screen pt-10 pb-20 px-4">
            <div className="max-w-277.5 mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                


<div className="md:col-span-4 flex flex-col gap-4 h-fit">

    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center">
        <img 
            src={friend.picture} 
            alt={friend.name} 
            className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-gray-100 p-1"
        />
        <h2 className="text-[20px] font-semibold text-[#1F2937] mb-2">{friend.name}</h2>
        
        {/* Tags */}
        <div className="flex flex-col gap-2 items-center mt-1">
            <span className="bg-[#FEE2E2] text-[#EF4444] text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                {friend.status}
            </span>
            <span className="bg-[#DCFCE7] text-[#166534] text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                {friend.group_tag}
            </span>
        </div>
        
        <p className="text-gray-400 italic text-sm mt-6 text-center leading-relaxed">
            "Former colleague, great mentor"
        </p>
        <p className="text-gray-400 text-xs mt-2 font-medium">
            Preferred: <span className="text-gray-500">email</span>
        </p>
    </div>


    <div className="flex flex-col gap-3">
        <button className="w-full py-4 bg-white flex items-center justify-center gap-3 text-base font-medium text-[#1F2937] border border-gray-100 rounded-2xl shadow-sm hover:bg-gray-50 transition-all">
            <span className="text-lg">🔔</span> Snooze 2 Weeks
        </button>
        
        <button className="w-full py-4 bg-white flex items-center justify-center gap-3 text-base font-medium text-[#1F2937] border border-gray-100 rounded-2xl shadow-sm hover:bg-gray-50 transition-all">
            <span className="text-lg">📁</span> Archive
        </button>
        
        <button className="w-full py-4 bg-white flex items-center justify-center gap-3 text-base font-medium text-red-500 border border-gray-100 rounded-2xl shadow-sm hover:bg-red-50 transition-all">
            <span className="text-lg">🗑️</span> Delete
        </button>
    </div>
</div>

                <div className="md:col-span-8 space-y-6">

                    <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                            <h4 className="text-3xl font-semibold text-[#244D3F] mb-2">62</h4>
                            <p className="text-[18px] text-[#64748B]">Days Since Contact</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                            <h4 className="text-3xl font-semibold text-[#244D3F] mb-2">30</h4>
                            <p className="text-[18px] text-[#64748B]">Goal (Days)</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                            <h4 className="text-2xl font-semibold text-[#244D3F] mb-2">Feb 27, 2026</h4>
                            <p className="text-[18px] text-[#64748B]">Next Due</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex justify-between items-center mb-5">
                            <h3 className="font-medium text-[20px] text-[#244D3F]">Relationship Goal</h3>
                            <button className="text-xs font-bold border px-3 py-1 rounded-md text-gray-500">Edit</button>
                        </div>
                        <p className="text-[#64748B] text-[18px]">Connect every <span className="font-bold text-[#1F2937]">30 days</span></p>
                    </div>

                    {/* Quick Check-In Section */}
<div className="bg-[#FFFFFF] p-8 rounded-3xl ">
    <h3 className="text-[20px] font-medium text-[#1F2937] mb-6">Quick Check-In</h3>
    <div className="grid grid-cols-3 gap-6">
        {/* Call Button */}
        <button className="bg-[#E9E9E9] p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-col items-center gap-3 hover:scale-105 transition-transform group">
            <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center text-2xl group-hover:bg-pink-100 transition-colors">
                📞
            </div>
            <span className="text-[18px] text-[#1F2937]">Call</span>
        </button>

        {/* Text Button */}
        <button className="bg-[#E9E9E9] p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-col items-center gap-3 hover:scale-105 transition-transform group">
            <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-2xl group-hover:bg-purple-100 transition-colors">
                💬
            </div>
            <span className="text-[18px] text-[#1F2937]">Text</span>
        </button>

        {/* Video Button */}
        <button className="bg-[#E9E9E9] p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-col items-center gap-3 hover:scale-105 transition-transform group">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-2xl group-hover:bg-gray-200 transition-colors">
                📹
            </div>
            <span className="text-[18px] text-[#1F2937]">Video</span>
        </button>
    </div>
</div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="font-medium text-[20px] text-[#244D3F]">Recent Interactions</h3>
                            <button className="text-xs font-bold bg-[#F8FAFC] px-4 py-2 rounded-lg flex items-center gap-2">
                                📜 Full History
                            </button>
                        </div>
                        
                        <div className="space-y-6">
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="flex justify-between items-start border-b border-[#E9E9E9] pb-6 last:border-0 last:pb-0">
                                    <div className="flex gap-4">
                                        <div className="text-xl p-2 bg-gray-50 rounded-lg">💬</div>
                                        <div>
                                            <p className="font-bold text-sm text-[#1F2937]">Text</p>
                                            <p className="text-base text-[#64748B]">Asked for career advice</p>
                                        </div>
                                    </div>
                                    <p className="text-xs text-[#64748B] font-medium tracking-tight">Jan 28, 2026</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FriendsDetails;