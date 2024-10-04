import React, { useState } from 'react';
import useDashboardData from '../../hooks/useDashboardData';
import SideBar from '../SideBar/SideBar';
import Navbar from '../Common/Navbar';

const Dashboard = () => {
    const { data, loading, error } = useDashboardData();
    const [darkMode, setDarkMode] = useState(false)
    

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className={`flex h-screen bg-background ${darkMode ? 'dark' : ''}`
        }>
            <SideBar />
            <main className="flex-1 overflow-hidden lg:ml-64">
                <Navbar/>
            </main>
        </div>
    );
};

export default Dashboard;
