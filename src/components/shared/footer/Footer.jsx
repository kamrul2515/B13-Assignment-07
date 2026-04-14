import React from 'react';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { NavLink } from 'react-router';


const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (

        <footer className="bg-[#244D3F] text-white pt-16 pb-8 px-4 lg:px-20">
            <div className="container mx-auto text-center">
                

                <div className="mb-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">KeenKeeper</h2>
                    <p className="text-gray-200 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>
                </div>


                <div className="mb-12">
                    <h3 className="text-lg font-semibold mb-5 text-gray-100">Social Links</h3>
                    <div className="flex justify-center items-center gap-4">

                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#244D3F] hover:bg-gray-200 transition-colors">
                            <FaInstagramSquare size={20} />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#244D3F] hover:bg-gray-200 transition-colors">
                            <FaFacebookSquare size={18} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#244D3F] hover:bg-gray-200 transition-colors">
                            <FaXTwitter size={20} />
                        </a>
                    </div>
                </div>


                    <div className="border-t border-green-800/50 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 gap-4">
                        <p>
                        © {currentYear} KeenKeeper. All rights reserved.
                        </p>
                    
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                        <NavLink to="/privacy" className="hover:text-white transition-colors">Privacy Policy</NavLink>
                        <NavLink to="/terms" className="hover:text-white transition-colors">Terms of Service</NavLink>
                        <NavLink to="/cookies" className="hover:text-white transition-colors">Cookies</NavLink>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;