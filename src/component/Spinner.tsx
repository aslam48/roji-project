// src/components/Spinner.tsx

import React from 'react';

const Spinner: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-full">
            <div className="w-16 h-16 border-4 border-t-4 border-t-green-600 border-gray-200 rounded-full animate-spin"></div>
        </div>
    );
};

export default Spinner;
