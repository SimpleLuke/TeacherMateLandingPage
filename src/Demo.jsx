import React, { useState } from 'react';
import data from './data.json';

const DemoComponent = () => {
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const handleClick = () => {
        setIsButtonClicked(!isButtonClicked); // Toggle visibility
    };

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <button
                onClick={handleClick}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Demo
            </button>

            {isButtonClicked && (
                <div className="mt-4 p-4 max-w-6xl w-full rounded-lg shadow-lg bg-gray-800 text-white fadeIn">
                    {data.reports.map((report, index) => (
                        <div key={index} className="mb-4">
                            <h2 className="font-bold">{report.name}</h2>
                            <p>Average Grade: {report.averageGrade}</p>
                            <p>{report.msg}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default DemoComponent;
