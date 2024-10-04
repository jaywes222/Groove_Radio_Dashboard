import React from 'react';

const Modal = ({ title, content, actions }) => {
    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded shadow-lg w-96">
                <h3 className="text-lg font-bold mb-4">{title}</h3>
                <div className="mb-4">{content}</div>
                <div className="flex justify-end space-x-2">
                    {actions.map((action, index) => (
                        <button
                            key={index}
                            onClick={action.onClick}
                            className={`px-4 py-2 rounded ${action.className}`}
                        >
                            {action.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Modal;
