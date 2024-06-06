"use client";
import React, { useState, ChangeEvent } from 'react';

const planetGravities: { [key: string]: number } = {
    Mercury: 0.38,
    Venus: 0.91,
    Earth: 1,
    Mars: 0.38,
    Jupiter: 2.34,
    Saturn: 1.06,
    Uranus: 0.92,
    Neptune: 1.19,
    Pluto: 0.06
};

const WeightConverter: React.FC = () => {
    const [earthWeight, setEarthWeight] = useState<string>('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEarthWeight(e.target.value);
    };

    const calculateWeight = (weight: number, gravity: number): string => {
        return (weight * gravity).toFixed(2);
    };

    return (
        <div className="flex justify-center items-center h-screen p-8">
            <div className="flex flex-col items-center bg-n-7 p-8 rounded-[2.5rem] lg:min-w-[300px] lg:max-w-[800px] h-full overflow-auto max-h-screen">
                <h4 className="h4 mb-4 font-extrabold text-center">Weight on Other Planets</h4>
                <div className="flex flex-col space-y-4 w-full">
                    <div className="flex items-center justify-center w-full mb-6">
                        <label htmlFor="weight" className="block mb-2 text-sm font-medium text-white space-y-4">Enter your weight on Earth (kg)</label>
                        <input 
                            type="number" 
                            id="weight" 
                            name="weight" 
                            value={earthWeight} 
                            onChange={handleInputChange}
                            className="bg-gray-800 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            placeholder="Your weight on Earth"
                        />
                    </div>
                    <div className="flex flex-col space-y-2 text-zinc-500 text-sm">
                        {Object.keys(planetGravities).map((planet) => (
                            <div key={planet} className="flex justify-between">
                                <span>{planet}</span>
                                <span>{earthWeight && !isNaN(parseFloat(earthWeight)) ? calculateWeight(parseFloat(earthWeight), planetGravities[planet]) + ' kg' : '-'}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeightConverter;
