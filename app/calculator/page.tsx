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
    const [earthWeight, setEarthWeight] = useState<string>('');
    const [earthAge, setEarthAge] = useState<string>('');
    const [celsius, setCelsius] = useState<string>('');
    const [fahrenheit, setFahrenheit] = useState<string>('');

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
        <div className='bg-n-8 flex flex-col justify-center items-center p-4'>
            <div className="relative p-8 bg-n-7 rounded-[2.4375rem] overflow-hidden max-w-lg w-full xl:p-15 mb-8 mx-auto">
                <div className="absolute top-0 left-0 max-w-full">
                    <Image
                        className="w-full"
                        src={grid}
                        width={550}
                        height={550}
                        alt="Grid"
                    />
                </div>
                <div className="z-1">
                    <div className="mb-8 md:mb-20">
                        <h4 className="h4 mb-4 font-extrabold text-center">Weight on Other Planets</h4>
                    </div>
                    <div className="flex items-center justify-center w-full mb-6 gap-2">
                        <label htmlFor="weight" className="block mb-2 text-sm font-medium text-white">
                            Enter your weight on Earth (kg)
                        </label>
                        <input 
                            type="number" 
                            id="weight" 
                            name="weight" 
                            value={earthWeight} 
                            onChange={handleWeightInputChange}
                            className="bg-gray-800 text-zinc-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 z-1"
                            placeholder="Your weight on Earth"
                        />
                    </div>
                    <div className="flex flex-col space-y-2 text-zinc-500 text-sm">
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
            <div className="relative p-8 bg-n-7 rounded-[2.4375rem] overflow-hidden max-w-lg w-full xl:p-15 mb-8 mx-auto">
                <div className="absolute top-0 left-0 max-w-full">
                    <Image
                        className="w-full"
                        src={grid}
                        width={550}
                        height={550}
                        alt="Grid"
                        />
                </div>
                <div className="z-1">
                    <div className="mb-8 md:mb-20">
                        <h4 className="h4 mb-4 font-extrabold text-center">Age on Other Planets</h4>
                    </div>
                    <div className="flex items-center justify-center w-full mb-6 gap-2">
                        <label htmlFor="age" className="block mb-2 text-sm font-medium text-white">
                            Enter your age on Earth (years)
                        </label>
                        <input 
                            type="number" 
                            id="age" 
                            name="age" 
                            value={earthAge} 
                            onChange={handleAgeInputChange}
                            className="bg-gray-800 text-zinc-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 z-1"
                            placeholder="Your age on Earth"
                            />
                    </div>
                    <div className="flex flex-col space-y-2 text-zinc-500 text-sm">
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
            <div className="relative p-8 bg-n-7 rounded-[2.4375rem] overflow-hidden max-w-lg w-full xl:p-15 mx-auto">
                <div className="absolute top-0 left-0 max-w-full">
                    <Image
                        className="w-full"
                        src={grid}
                        width={550}
                        height={550}
                        alt="Grid"
                    />
                </div>
                <div className="z-1">
                    <div className="mb-8 md:mb-20">
                        <h4 className="h4 mb-4 font-extrabold text-center">Temperature Converter</h4>
                    </div>
                    <div className="flex items-center justify-center w-full mb-6 gap-4">
                        <label htmlFor="celsius" className="block mb-2 text-sm font-medium text-white">
                            Enter temperature in Celsius (°C)
                        </label>
                        <input 
                            type="number" 
                            id="celsius" 
                            name="celsius" 
                            value={celsius} 
                            onChange={handleCelsiusChange}
                            className="bg-gray-800 text-zinc-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 z-1"
                            placeholder="Celsius"
                        />
                    </div>
                    <div className="flex items-center justify-center w-full mb-6 gap-4">
                        <label htmlFor="fahrenheit" className="block mb-2 text-sm font-medium text-white">
                            Enter temperature in Fahrenheit (°F)
                        </label>
                        <input 
                            type="number" 
                            id="fahrenheit" 
                            name="fahrenheit" 
                            value={fahrenheit} 
                            onChange={handleFahrenheitChange}
                            className="bg-gray-800 text-zinc-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 z-1"
                            placeholder="Fahrenheit"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
