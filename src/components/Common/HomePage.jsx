import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';
import backgroundImage from '../../assets/background.jpg';
import { ShieldCheckIcon, UserIcon, CommandLineIcon } from '@heroicons/react/24/outline';



const HomePage = () => {
    const [selectedRole, setSelectedRole] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pin, setPin] = useState('');
    const navigate = useNavigate();

    const roles = [
        { name: 'Super-Admin(Joel)', icon: <ShieldCheckIcon className="w-5 h-5 mr-2" /> },
        { name: 'Admin(Luther)', icon: <UserIcon className="w-5 h-5 mr-2" /> },
        { name: 'Dev(Jack)', icon: <CommandLineIcon className="w-5 h-5 mr-2" /> },
    ];

    const recentActivities = [
        { message: 'User JohnDoe logged in.', time: '10 minutes ago' },
        { message: 'Admin Luther updated a playlist.', time: '30 minutes ago' },
        { message: 'Dev Jack deployed changes.', time: '1 hour ago' },
    ];

    const handleRoleSelect = (role) => {
        setSelectedRole(role);
        setIsModalOpen(true);
    };

    const handlePinSubmit = () => {
        if (pin === '1234') {
            navigate('/dashboard');
        } else {
            alert('Invalid PIN');
        }
    };

    const modalActions = [
        {
            label: 'Submit',
            onClick: handlePinSubmit,
            className: 'bg-indiaGreen text-white hover:bg-white hover:text-indiaGreen border-2 border-indiaGreen',
        },
        {
            label: 'Cancel',
            onClick: () => setIsModalOpen(false),
            className: 'border-2 border-transparent text-slate-600 hover:bg-slate-300',
        },
    ];

    return (
        <div
            className="flex items-center justify-center min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg text-center">
                <h1 className="text-4xl font-bold">Welcome to Groove Radio Admin</h1>
                <p className="mt-2 text-lg">Your go-to platform for managing radio operations.</p>
                <h2 className="mt-4 text-sm">Select Your Role:</h2>
                <div className="flex space-x-4 mt-4">
                    {roles.map((role) => (
                        <div key={role.name} className="flex items-center relative">
                            <button
                                onClick={() => handleRoleSelect(role.name)}
                                className="flex items-center bg-spanishOrange text-white px-4 py-2 rounded font-semibold border-2 border-spanishOrange hover:bg-white hover:text-spanishOrange"
                            >
                                {role.icon}
                                {role.name}
                            </button>
                        </div>
                    ))}
                </div>
                <div className="mt-6">
                    <h3 className="text-lg font-semibold">Recent Activity</h3>
                    <ul className="mt-2 space-y-1">
                        {recentActivities.map((activity, index) => (
                            <li key={index} className="text-sm text-gray-600">
                                {activity.message} <span className="text-gray-400">({activity.time})</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {isModalOpen && (
                <Modal
                    title={`Enter Your PIN for ${selectedRole}`}
                    content={
                        <input
                            type="password"
                            value={pin}
                            onChange={(e) => setPin(e.target.value)}
                            placeholder="PIN"
                            className="mt-2 px-2 py-1 border rounded w-full focus:outline-none focus:ring-2 focus:ring-spanishOrange"
                        />
                    }
                    onClose={() => setIsModalOpen(false)}
                    actions={modalActions}
                >
                    <button className="absolute top-4 right-4 text-xl text-gray-600" onClick={() => setIsModalOpen(false)}>X</button> {/* Close button */}
                </Modal>
            )}
        </div>
    );
};

export default HomePage;
