import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
    return (
       <div className="bg-[#F8FAFC] pt-12 md:pt-20 px-4">
            <div className="max-w-277.5 mx-auto text-center">
                
               <div className="mb-10 text-center">
                    <h1 className="text-[#1F2937] text-3xl md:text-5xl font-bold mb-4 max-w-3xl mx-auto">
                        Friends to keep close in your life
                    </h1>
    
                    <p className="text-[#64748B] text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                         Your personal shelf of meaningful connections. Browse, tend, and nurture 
                         the relationships that matter most.
                    </p>
                </div>

                <div className="flex justify-center mb-16">
                    <button className="bg-[#244D3F] text-white px-6 py-3 
                    rounded-lg font-semibold flex items-center gap-2 hover:bg-[#1a3a2f] transition-all shadow-md">
                        <FaPlus className="text-base" /> Add a Friend
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
                        <span className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-2">10</span>
                        <span className="text-gray-500 font-medium text-sm">Total Friends</span>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
                        <span className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-2">3</span>
                        <span className="text-gray-500 font-medium text-sm">On Track</span>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
                        <span className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-2">6</span>
                        <span className="text-gray-500 font-medium text-sm">Need Attention</span>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
                        <span className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-2">12</span>
                        <span className="text-gray-500 font-medium text-sm">Interactions This Month</span>
                    </div>

                </div>

            </div>
            <div className="border-b-2 border-[#E9E9E9] max-w-277.5 mx-auto text-center mt-10"></div>
        </div>
    );
};

export default Banner;