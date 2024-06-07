"use client";
import Image from 'next/image';
import React, { useState, ChangeEvent } from 'react';
import { grid } from '../components/assets';

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

const planetOrbitalPeriods: { [key: string]: number } = {
    Mercury: 0.24,
    Venus: 0.62,
    Earth: 1,
    Mars: 1.88,
    Jupiter: 11.86,
    Saturn: 29.46,
    Uranus: 84.01,
    Neptune: 164.79,
    Pluto: 248.59
};

const Calculator: React.FC = () => {
    const [selectedTool, setSelectedTool] = useState<string>('');
    const [earthWeight, setEarthWeight] = useState<string>('');
    const [earthAge, setEarthAge] = useState<string>('');
    const [celsius, setCelsius] = useState<string>('');
    const [fahrenheit, setFahrenheit] = useState<string>('');
    const [buttons,setbuttons]=useState<boolean>(true);

    const handleWeightInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEarthWeight(e.target.value);
    };

    const handleAgeInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEarthAge(e.target.value);
    };

    const handleCelsiusChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setCelsius(value);
        if (value !== '' && !isNaN(parseFloat(value))) {
            setFahrenheit(((parseFloat(value) * 9/5) + 32).toFixed(2));
        } else {
            setFahrenheit('');
        }
    };

    const handleFahrenheitChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setFahrenheit(value);
        if (value !== '' && !isNaN(parseFloat(value))) {
            setCelsius(((parseFloat(value) - 32) * 5/9).toFixed(2));
        } else {
            setCelsius('');
        }
    };

    const calculateWeight = (weight: number, gravity: number): string => {
        return (weight * gravity).toFixed(2);
    };

    const calculateAge = (age: number, orbitalPeriod: number): string => {
        return (age / orbitalPeriod).toFixed(2);
    };

    return (
        <div className='bg-gray-900 min-h-screen flex flex-col items-center py-12'>
            {/* Space Tools Heading */}
            <h1 className="text-3xl font-bold text-white mb-8">Space Tools</h1>
            {/* Options */}
            <div className="flex justify-center mb-8">
                {buttons &&(<>
                    <button className="bg-purple-600 text-white px-6 py-3 mr-4 rounded-lg" onClick={() =>{ setSelectedTool('Weight'),setbuttons(false)}}>Weight on Other Planets</button>
                <button className="bg-purple-600 text-white px-6 py-3 mr-4 rounded-lg" onClick={() =>{ setSelectedTool('Age'),setbuttons(false)}}>Age on Other Planets</button>
                <button className="bg-purple-600 text-white px-6 py-3 rounded-lg" onClick={() => {setSelectedTool('Temperature'),setbuttons(false)}}>Temperature Converter</button>
                </>

                )}
                            </div>
            {/* Calculators */}
            <div className="w-full max-w-lg">
                {selectedTool === 'Weight' && (
                    <div className="relative p-8 bg-gray-800 rounded-2xl shadow-lg overflow-hidden mb-12">
                        {/* Image Overlay */}
                        <div className="absolute top-0 left-0 w-full h-full opacity-20">
                            <Image
                                className="w-full h-full object-cover"
                                src={grid}
                                width={550}
                                height={550}
                                alt="Grid"
                            />
                        </div>
                        {/* Tool Content */}
                        <div className="relative z-10">
                            <div className="mb-8">
                                <h4 className="text-2xl font-extrabold text-center text-white">Weight on Other Planets</h4>
                            </div>
                            {/* Input Field */}
                            <div className="flex items-center justify-center w-full mb-6">
                                <label htmlFor="weight" className="block mb-2 text-sm font-medium text-white">
                                    Enter your weight on Earth (kg)
                                </label>
                                <input 
                                    type="number" 
                                    id="weight" 
                                    name="weight" 
                                    value={earthWeight} 
                                    onChange={handleWeightInputChange}
                                    className="bg-gray-700 text-white sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5"
                                    placeholder="Your weight on Earth"
                                />
                            </div>
                            {/* Calculations */}
                            <div className="flex flex-col space-y-2 text-white text-sm">
                                {Object.keys(planetGravities).map((planet) => (
                                    <div key={planet} className="flex justify-between">
                                        <span>{planet}</span>
                                        <span>
                                            {earthWeight && !isNaN(parseFloat(earthWeight)) ? calculateWeight(parseFloat(earthWeight), planetGravities[planet]) + ' kg' : '-'}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
                {selectedTool === 'Age' && (
                    <div className="relative p-8 bg-gray-800 rounded-2xl shadow-lg overflow-hidden mb-12">
                        {/* Image Overlay */}
                        <div className="absolute top-0 left-0 w-full h-full opacity-20">
                            <Image
                                className="w-full h-full object-cover"
                                src={grid}
                                width={550}
                                height={550}
                                alt="Grid"
                            />
                        </div>
                        {/* Tool Content */}
                        <div className="relative z-10">
                            <div className="mb-8">
                                <h4 className="text-2xl font-extrabold text-center text-white">Age on Other Planets</h4>
                            </div>
                            {/* Input Field */}
                            <div className="flex items-center justify-center w-full mb-6">
                                <label htmlFor="age" className="block mb-2 text-sm font-medium text-white">
                                    Enter your age on Earth (years)
                                </label>
                                <input 
                                    type="number" 
                                    id="age" 
                                    name="age" 
                                    value={earthAge} 
                                    onChange={handleAgeInputChange}
                                    className="bg-gray-700 text-white sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5"
                                    placeholder="Your age on Earth"
                                />
                            </div>
                            {/* Calculations */}
                            <div className="flex flex-col space-y-2 text-white text-sm">
                            {Object.keys(planetOrbitalPeriods).map((planet) => (
                                    <div key={planet} className="flex justify-between">
                                        <span>{planet}</span>
                                        <span>
                                            {earthAge && !isNaN(parseFloat(earthAge)) ? calculateAge(parseFloat(earthAge), planetOrbitalPeriods[planet]) + ' years' : '-'}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
                {selectedTool === 'Temperature' && (
                    <div className="relative p-8 bg-gray-800 rounded-2xl shadow-lg overflow-hidden mb-12">
                        {/* Image Overlay */}
                        <div className="absolute top-0 left-0 w-full h-full opacity-20">
                            <Image
                                className="w-full h-full object-cover"
                                src={grid}
                                width={550}
                                height={550}
                                alt="Grid"
                            />
                        </div>
                        {/* Tool Content */}
                        <div className="relative z-10">
                            <div className="mb-8">
                                <h4 className="text-2xl font-extrabold text-center text-white">Temperature Converter</h4>
                            </div>
                            {/* Celsius Input */}
                            <div className="flex items-center justify-center w-full mb-6">
                                <label htmlFor="celsius" className="block mb-2 text-sm font-medium text-white">
                                    Enter temperature in Celsius (°C)
                                </label>
                                <input 
                                    type="number" 
                                    id="celsius" 
                                    name="celsius" 
                                    value={celsius} 
                                    onChange={handleCelsiusChange}
                                    className="bg-gray-700 text-white sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5"
                                    placeholder="Celsius"
                                />
                            </div>
                            {/* Fahrenheit Input */}
                            <div className="flex items-center justify-center w-full mb-6">
                                <label htmlFor="fahrenheit" className="block mb-2 text-sm font-medium text-white">
                                    Enter temperature in Fahrenheit (°F)
                                </label>
                                <input 
                                    type="number" 
                                    id="fahrenheit" 
                                    name="fahrenheit" 
                                    value={fahrenheit} 
                                    onChange={handleFahrenheitChange}
                                    className="bg-gray-700 text-white sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5"
                                    placeholder="Fahrenheit"
                                />
                            </div>
                            {/* Calculations */}
                            <div className="text-white text-sm">
                                <p className="mb-2">Celsius: {celsius} °C</p>
                                <p>Fahrenheit: {fahrenheit} °F</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {/* Go Back Button */}
            {selectedTool && (
                <div className="flex justify-center">
                    <button className="bg-white text-black px-6 py-3 rounded-lg" onClick={() => {setSelectedTool(''),setbuttons(true)}}>Go Back</button>
                </div>
            )}
        </div>
    );
}

export default Calculator;

