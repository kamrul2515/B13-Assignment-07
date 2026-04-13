import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
 

const AllFriends = () => {
    const [friends, setFriends] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getStatusStyles = (status) => {
        switch (status?.toLowerCase()) {
            case 'on-track': return 'bg-[#244D3F] text-white';
            case 'almost due': return 'bg-[#F59E0B] text-white';
            case 'overdue': return 'bg-[#EF4444] text-white';
            default: return 'bg-gray-200 text-gray-700';
        }
    };

    useEffect(() => {
        fetch("/friends.json")
            .then(res => res.json())
            .then(data => {
                setFriends(data);
                setTimeout(() => setIsLoading(false), 800);
            })
            .catch(err => console.error("Error fetching data:", err));
    }, []);

    return (
        <div className="bg-[#F8FAFC] min-h-screen pt-10 pb-20 px-4">
            <div className="max-w-277.5 mx-auto">
                <h2 className="text-2xl font-semibold text-[#1F2937] mb-10 text-left px-2">Your Friends</h2>

                {isLoading ? (
                    <div className="flex flex-col items-center justify-center py-32">
                        <div className="w-12 h-12 border-4 border-[#244D3F] border-t-transparent rounded-full animate-spin"></div>
                        <p className="mt-4 text-[#64748B] font-medium animate-pulse">Loading Friends...</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {friends.map(friend => (
                            <Link 
                                to={`/friendsDetails/${friend.id}`}
                                key={friend.id} 
                                className="bg-white rounded-2xl shadow-sm p-8 flex flex-col items-center border border-gray-50 transition-all hover:shadow-md cursor-pointer"
                            >
                                <img 
                                    src={friend.picture} 
                                    alt={friend.name} 
                                    className="w-28 h-28 rounded-full object-cover mb-6 border-4 border-gray-50 shadow-inner"
                                />

                                <h3 className="text-xl font-semibold text-[#1F2937] mb-2">{friend.name}</h3>
                                <p className="text-sm text-[#64748B] font-medium mb-2">{friend.days_since_contact}d ago</p>

                                <div className="flex flex-wrap gap-2 justify-center mb-2">
                                    <span className="bg-[#CBFADB] text-[#244D3F] text-[12px] font-medium px-3 py-1 rounded-full uppercase tracking-widest">
                                        {friend.group_tag}
                                    </span>
                                    {friend.group_tag_2 && (
                                        <span className="bg-[#CBFADB] text-[#244D3F] text-[12px] font-medium px-3 py-1 rounded-full uppercase tracking-widest">
                                            {friend.group_tag_2}
                                        </span>
                                    )}
                                </div>

                                <span className={`px-6 py-2 rounded-full text-[11px] font-bold tracking-wide transition-colors ${getStatusStyles(friend.status)}`}>
                                    {friend.status}
                                </span>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllFriends;