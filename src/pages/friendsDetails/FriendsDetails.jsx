import React, { useState, useEffect } from 'react';
import { FaPhoneAlt, FaVideo, FaEnvelope } from 'react-icons/fa';
import { FaBoxArchive } from 'react-icons/fa6';
import { HiMiniBellSnooze } from 'react-icons/hi2';
import { MdDeleteForever } from 'react-icons/md';
import { useParams } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FriendsDetails = () => {
    const { id } = useParams();
    const [friend, setFriend] = useState(null);
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        setIsLoading(true); 
        fetch("/friends.json")
            .then(res => res.json())
            .then(data => {
                const foundFriend = data.find(f => f.id === parseInt(id));
                setFriend(foundFriend || null);
                setTimeout(() => setIsLoading(false), 800);
            })
            .catch(err => {
                console.error("Failed to load friend:", err);
                setIsLoading(false);
            });
    }, [id]);

    const handleInteraction = (type) => {
        if (!friend) return;

        const saved = sessionStorage.getItem('user_interactions');
        const prevData = saved ? JSON.parse(saved) : [];

        const newEntry = {
            id: Date.now(),
            type: type,
            name: friend.name,
            date: new Date().toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
            })
        };

        const updatedData = [newEntry, ...prevData];
        sessionStorage.setItem('user_interactions', JSON.stringify(updatedData));

        window.dispatchEvent(new Event('interactionsUpdated'));

        toast.success(`${type} with ${friend.name} logged successfully!`, {
            position: "top-center",
            autoClose: 1500,
        });
    };
    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-[#F8FAFC]">
                <div className="w-12 h-12 border-4 border-[#244D3F] border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-[#64748B] font-medium animate-pulse">Loading Friend Details...</p>
            </div>
        );
    }

    if (!friend) {
        return (
            <div className="text-center py-20 font-medium text-gray-500">
                Friend not found!
            </div>
        );
    }

    return (
        <div className="bg-[#F8FAFC] min-h-screen pt-10 pb-20 px-4">
            <ToastContainer />

            <div className="w-full max-w-277.5 mx-auto">
                <div className="overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 lg:p-10">

                        <div className="col-span-12 lg:col-span-4 w-full">
                            <div className="bg-white flex flex-col items-center text-center rounded-3xl p-8 border border-gray-100">
                                <img 
                                    src={friend.picture} 
                                    alt={friend.name} 
                                    className="w-28 h-28 rounded-full object-cover mb-6 border-4 border-white shadow-sm" 
                                />

                                <h2 className="text-xl font-semibold text-[#1F2937] mb-2">{friend.name}</h2>

                                <div className="flex flex-col gap-2 mb-2">
                                    <span className="bg-red-500 text-white text-[12px] font-bold px-4 py-1 rounded-full tracking-widest mb-2">
                                        Overdue
                                    </span>
                                    <span className="bg-emerald-100 text-[#244D3F] text-[12px] font-bold px-4 py-1 rounded-full tracking-widest mb-3">
                                        {friend.group_tag || 'WORK'}
                                    </span>
                                </div>

                                <p className="text-[#64748B] font-medium text-[16px]  leading-relaxed">
                                    "Former colleague, great mentor"
                                </p>

                                <div className="w-full pt-3">
                                    <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-2">
                                        PREFERRED: EMAIL
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 space-y-3">
                                <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-100 hover:bg-gray-50 rounded-2xl py-4 text-[#1F2937] font-medium transition-all active:scale-[0.985]">
                                    <HiMiniBellSnooze className="text-[16px]l text-[#1F2937]" /> 
                                    Snooze 2 Weeks
                                </button>
                                <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-100 hover:bg-gray-50 rounded-2xl py-4 text-[#1F2937] font-medium transition-all active:scale-[0.985]">
                                    <FaBoxArchive className="text-[16px] text-[#1F2937]" /> 
                                    Archive
                                </button>
                                <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-100 hover:bg-red-50 rounded-2xl py-4 text-red-500 font-medium transition-all active:scale-[0.985]">
                                    <MdDeleteForever className="text-[16px]" /> 
                                    Delete
                                </button>
                            </div>
                        </div>


                        <div className="col-span-12 lg:col-span-8 space-y-6 w-full">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                                <div className="bg-white border border-gray-100 rounded-2xl pt-8 text-center shadow-sm">
                                    <div className="text-[30px] font-semibold text-[#244D3F]">62</div>
                                    <div className="text-[18px] text-[#64748B] mt-2 mb-8 tracking-widest">Days Since Contact</div>
                                </div>
                                <div className="bg-white border border-gray-100 rounded-2xl pt-8 text-center shadow-sm">
                                    <div className="text-[30px] font-semibold text-[#244D3F]">30</div>
                                    <div className="text-[18px] text-[#64748B] mt-2 mb-8 tracking-widest">Goal (Days)</div>
                                </div>
                                <div className="bg-white border border-gray-100 rounded-2xl pt-8 text-center shadow-sm">
                                    <div className="text-[30px] font-semibold text-[#244D3F]">Feb 27, 2026</div>
                                    <div className="text-[18px] text-[#64748B] mt-2 mb-8 tracking-widest">Next Due</div>
                                </div>
                            </div>

                            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-medium text-[#244D3F] text-xl mt-3 mb-6">Relationship Goal</div>
                                        <div className="text-[18px] mt-1 text-[#64748B] mb-3">
                                            Connect every <span className="font-bold text-[#1F2937]">30 days</span>
                                        </div>
                                    </div>
                                    <button className="text-[14px] text-[#1F2937] font-medium px-5 py-2 border bg-[#F8FAFC] border-gray-300 rounded-sm hover:bg-gray-100 transition-all">
                                        Edit
                                    </button>
                                </div>
                            </div>

                           <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
    <h3 className="text-xl font-medium text-[#244D3F] mb-8">Quick Check-In</h3>
    
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <button 
            onClick={() => handleInteraction('Call')}
            className="flex flex-col items-center gap-3 p-8 bg-[#F8FAFC] border border-gray-100 rounded-2xl hover:border-gray-200 hover:shadow-md transition-all group"
        >
            <div className="text-3xl text-gray-700 group-hover:text-pink-500 transition-all">
                <FaPhoneAlt />
            </div>
            <span className="font-medium text-[#1F2937] text-lg">Call</span>
        </button>

        <button 
            onClick={() => handleInteraction('Text')}
            className="flex flex-col items-center gap-3 p-8 bg-[#F8FAFC] border border-gray-100 rounded-2xl hover:border-gray-200 hover:shadow-md transition-all group"
        >
            <div className="text-3xl text-gray-700 group-hover:text-purple-500 transition-all">
                💬
            </div>
            <span className="font-medium text-[#1F2937] text-lg">Text</span>
        </button>

        <button 
            onClick={() => handleInteraction('Video')}
            className="flex flex-col items-center gap-3 p-8 bg-[#F8FAFC] border border-gray-100 rounded-2xl hover:border-gray-200 hover:shadow-md transition-all group"
        >
            <div className="text-3xl text-gray-700 group-hover:text-blue-500 transition-all">
                <FaVideo />
            </div>
            <span className="font-medium text-[#1F2937] text-lg">Video</span>
        </button>
    </div>
</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendsDetails;