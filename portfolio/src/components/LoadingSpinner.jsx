import React from 'react';

const LoadingSpinner = () => (
    <div className="flex items-center justify-center min-h-screen bg-bg">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-accent"></div>
    </div>
);

export default LoadingSpinner;
