import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/'); // Navigate back to the home page
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-900 text-white">
            {/* Animated Illustration (Optional) */}
            <div className="w-32 h-32 mb-6">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-full h-full text-white animate-bounce"
                >
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12" y2="17"></line>
                </svg>
            </div>

            {/* 404 Message */}
            <h1 className="text-6xl font-bold mb-3">404</h1>
            <h2 className="text-2xl font-semibold mb-6">Oops! Page Not Found</h2>
            <p className="text-base text-center mb-6 max-w-md">
                The page you're looking for doesn't exist or has been moved. Let's get you back on track!
            </p>

            {/* Go Home Button */}
            <button
                onClick={handleGoHome}
                className="px-6 py-2 bg-white text-purple-600 font-semibold rounded-lg shadow-lg hover:bg-purple-50 transition-all duration-300"
            >
                Go Back Home
            </button>
        </div>
    );
};

export default NotFoundPage;