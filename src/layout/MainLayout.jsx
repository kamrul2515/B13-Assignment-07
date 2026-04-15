import React, { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router';
import Navbar from '../components/shared/navbar/Navbar';
import Footer from '../components/shared/footer/Footer';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

const MainLayout = () => {
    return (
        <div>

            <ScrollToTop />           
            <Navbar />
            <div className="min-h-screen">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;