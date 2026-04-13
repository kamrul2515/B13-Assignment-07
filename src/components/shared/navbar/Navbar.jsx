import React from 'react';
import { BsStopwatch } from 'react-icons/bs';
import { ImStatsDots } from 'react-icons/im';
import { IoHome, IoMenu } from 'react-icons/io5'; 
import { NavLink } from 'react-router';

const Navbar = () => {

    const links = (
        <>
            <li>
                <NavLink 
                    to="/" 
                    className={({ isActive }) => 
                        `font-semibold flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                            isActive ? "text-white bg-[#244D3F] !important" : "hover:bg-gray-100"
                        }`
                    }>
                    <IoHome /> Home
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/friendpage"
                    className={({ isActive }) => 
                        `font-semibold flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                            isActive ? "text-white bg-[#244D3F] !important" : "hover:bg-gray-100"
                        }`
                    }>
                    <BsStopwatch /> Timeline
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/stats"
                    className={({ isActive }) => 
                        `font-semibold flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                            isActive ? "text-white bg-[#244D3F] !important" : "hover:bg-gray-100"
                        }`
                    }>
                    <ImStatsDots /> Stats
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="bg-base-100 shadow-md sticky top-0 z-50">
            <div className='navbar lg:px-20 px-4'>
                <div className="flex-1">
                    <NavLink to="/" className="text-[24px] font-bold cursor-pointer">
                        Keen<span className='text-[#1F2937]'>Keeper</span>
                    </NavLink>
                </div>
                
                <div className="flex-none">
                    <div className="dropdown dropdown-end lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost">
                            <IoMenu className="text-2xl" />
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2">
                            {links}
                        </ul>
                    </div>

                    <ul className="menu menu-horizontal p-0 hidden lg:flex gap-2">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;