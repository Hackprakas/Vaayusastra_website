"use client";
import Image from 'next/image';
import React, { useState, ChangeEvent } from 'react';
import { grid } from '../components/assets';
import Button from '../components/Button';
import Navbar from '../components/navbar';
import { calculator, navigation } from '../constants';
import Footer from '../components/Footer';
import Section from '../components/Section';
import {Gradient} from '../components/design/Roadmap';
import { hindu } from '../constants';
import { ArrowRight } from 'lucide-react';
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

const seaLevelTemperature = 15; // Sea level standard temperature in Celsius
const lapseRate = 6.5; // Standard lapse rate in Celsius per kilometer

const Calculator: React.FC = () => {
    const [selectedTool, setSelectedTool] = useState<string>('');
    const [earthWeight, setEarthWeight] = useState<string>('');
    const [earthAge, setEarthAge] = useState<string>('');
    const [celsius, setCelsius] = useState<string>('');
    const [fahrenheit, setFahrenheit] = useState<string>('');
    const [objectSpeed, setObjectSpeed] = useState<string>('');
    const [soundSpeed, setSoundSpeed] = useState<string>('343.2');
    const [altitude, setAltitude] = useState<string>('');
    const [buttons, setbuttons] = useState<boolean>(true);
    const [velocity, setVelocity] = useState<string>('');
    const [mass, setMass] = useState<string>('');
    const [sealevel , setSealevel] = useState<string>('15');

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
            setFahrenheit(((parseFloat(value) * 9 / 5) + 32).toFixed(2));
        } else {
            setFahrenheit('');
        }
    };

    const handleFahrenheitChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setFahrenheit(value);
        if (value !== '' && !isNaN(parseFloat(value))) {
            setCelsius(((parseFloat(value) - 32) * 5 / 9).toFixed(2));
        } else {
            setCelsius('');
        }
    };

    const handleObjectSpeedChange = (e: ChangeEvent<HTMLInputElement>) => {
        setObjectSpeed(e.target.value);
    };

    const handleSoundSpeedChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSoundSpeed(e.target.value);
    };

    const handleAltitudeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAltitude(e.target.value);
    };

    const handleSealevelTemperatureChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSealevel(e.target.value);
    };

    const handleVelocityChange = (e: ChangeEvent<HTMLInputElement>) => {
        setVelocity(e.target.value);
    };
    const handleMassChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMass(e.target.value);
    };

    const calculateWeight = (weight: number, gravity: number): string => {
        return (weight * gravity).toFixed(2);
    };

    const calculateAge = (age: number, orbitalPeriod: number): string => {
        return (age / orbitalPeriod).toFixed(2);
    };

    const calculateMachNumber = (objectSpeed: number, soundSpeed: number): number => {
        return objectSpeed / soundSpeed;
    };

    const determineMachCategory = (machNumber: number): string => {
        if (machNumber < 0.8) return 'Subsonic';
        if (machNumber >= 0.8 && machNumber < 1.2) return 'Transonic';
        if (machNumber >= 1.2 && machNumber < 5.0) return 'Supersonic';
        if (machNumber >= 5.0) return 'Hypersonic';
        return 'Invalid speed';
    };

    const calculateTemperatureAtAltitude = (seaLevelTemp: number, altitude: number): string => {
        const tempAtAltitude = seaLevelTemp - (lapseRate * (altitude / 1000));
        return tempAtAltitude.toFixed(2);
    };

    const calculateMomentum = (mass: number, velocity: number): number => {
        return mass * velocity;
    };

    return (
        <>
            <Navbar data={navigation} position={false} hide={true} admin={false} />
            <Section>

                <div className='bg-n-8 flex flex-col items-center'>

                    {/* Space Tools Heading */}
                    <h1 className="text-3xl font-bold text-white mb-8">Space Tools</h1>
                    {/* Options */}
                        {buttons && (
                            <>

                                {/* <button className="bg-purple-600 text-white px-6 py-3 mr-4 rounded-lg" onClick={() => { setSelectedTool('Weight'); setbuttons(false) }}>Weight on Other Planets</button>
                        <button className="bg-purple-600 text-white px-6 py-3 mr-4 rounded-lg" onClick={() => { setSelectedTool('Age'); setbuttons(false) }}>Age on Other Planets</button>
                        <button className="bg-purple-600 text-white px-6 py-3 mr-4 rounded-lg" onClick={() => { setSelectedTool('Temperature'); setbuttons(false) }}>Temperature Converter</button>
                        <button className="bg-purple-600 text-white px-6 py-3 mr-4 rounded-lg" onClick={() => { setSelectedTool('Mach'); setbuttons(false) }}>Mach Calculator</button>
                        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg" onClick={() => { setSelectedTool('AltitudeTemp'); setbuttons(false) }}>Temperature at Altitude</button>
                        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg" onClick={() => { setSelectedTool('Momentum'); setbuttons(false) }}>Momentum Calculator</button>
                        </> */}

                        <div className=" p-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 w-full">
                                {calculator.map((card) => (

                                    <div key={card.id} className="rounded-lg ">

                                        <div className="relative border border-n-6 rounded-lg mb-14 px-2">
                                            {/* <div className="flex justify-center">

                                                <Image className="w-32 h-32 z-5 p-1 rounded-full translate-y-[-60px]  bg-blend-normal ring-2 ring-gray-300 dark:ring-gray-500" src={} alt="Bordered avatar" />
                                            </div> */}
                                            <div className="flex flex-col items-center">

                                                <div className="p-6 font-extrabold text-center">{card.title}</div>
                                                <div className="mb-10 text-center p-4 text-n-4">{card.text}</div>

                                                <div className="bg-purple-700 h-10 w-10 rounded-full flex justify-center items-center mb-8">
                                                    <Button white onClick={() => { setSelectedTool(card.onclick); setbuttons(false) }}>
                                                        <div className='flex justify-center items-center gap-2'>

                                                        Calculate 

                                                        <ArrowRight />
                                                        </div>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <Gradient />
                            </div>
                            </>
                )}
                    {/* Calculators */}
                    <div className="w-full px-6 max-w-lg">
                        {selectedTool === 'Weight' && (
                            <div className="p-8 bg-n-7 rounded-2xl shadow-lg overflow-hidden mb-12 px-10">
                                {/* Image Overlay */}
                                {/* <div className="absolute top-0 left-0 w-full h-full opacity-20">
                                    <Image
                                        className="w-full h-full object-cover"
                                        src={grid}
                                        width={550}
                                        height={550}
                                        alt="Grid"
                                    />
                                </div> */}
                                {/* Tool Content */}
                                <div className="relative z-10">
                                    <div className="mb-8">
                                        <h4 className="text-2xl font-extrabold text-center text-white">Weight on Other Planets</h4>
                                    </div>
                                    {/* Input Field */}
                                    <div className="flex items-center justify-center w-full mb-6">
                                        <label htmlFor="weight" className="block mb-2 text-sm font-medium text-n-3">
                                            Enter your weight on Earth (kg)
                                        </label>
                                        <input
                                            type="number"
                                            id="weight"
                                            name="weight"
                                            value={earthWeight}
                                            onChange={handleWeightInputChange}
                                            className="bg-gray-800 text-n-2 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5"
                                            placeholder="Your weight on Earth"
                                        />
                                    </div>
                                    {/* Calculations */}
                                    <div className="flex flex-col space-y-2 text-n-3 text-sm">
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
                            <div className="relative p-8 bg-n-7 rounded-2xl shadow-lg overflow-hidden mb-12">
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
                                            className="bg-gray-800 text-n-2 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5"
                                            placeholder="Your age on Earth"
                                        />
                                    </div>
                                    {/* Calculations */}
                                    <div className="flex flex-col space-y-2 text-n-3 text-sm">
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
                            <div className="relative p-8 bg-n-7 rounded-2xl shadow-lg overflow-hidden mb-12">
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
                                            className="bg-gray-800 text-n-2 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5"
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
                                            className="bg-gray-800 text-n-2 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5"
                                            placeholder="Fahrenheit"
                                        />
                                    </div>
                                    {/* Calculations */}
                                    <div className="text-n-2 text-sm">
                                        <p className="mb-2">Celsius: {celsius} °C</p>
                                        <p>Fahrenheit: {fahrenheit} °F</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {selectedTool === 'Mach' && (
                            <div className="relative p-8 bg-n-7 rounded-2xl shadow-lg overflow-hidden mb-12">
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
                                        <h4 className="text-2xl font-extrabold text-center text-white">Mach Calculator</h4>
                                    </div>
                                    {/* Input Fields */}
                                    <div className="flex flex-col items-center justify-center w-full mb-6 space-y-4">
                                        <div className="w-full">
                                            <label htmlFor="objectSpeed" className="block mb-2 text-sm font-medium text-white">
                                                Enter speed of object (m/s)
                                            </label>
                                            <input
                                                type="number"
                                                id="objectSpeed"
                                                name="objectSpeed"
                                                value={objectSpeed}
                                                onChange={handleObjectSpeedChange}
                                                className="bg-gray-800 text-n-2 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5"
                                                placeholder="Speed of object"
                                            />
                                        </div>
                                        <div className="w-full">
                                            <label htmlFor="soundSpeed" className="block mb-2 text-sm font-medium text-white">
                                                Enter speed of sound (m/s)
                                            </label>
                                            <input
                                                type="number"
                                                id="soundSpeed"
                                                name="soundSpeed"
                                                value={soundSpeed}
                                                onChange={handleSoundSpeedChange}
                                                className="bg-gray-800 text-n-2 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5"
                                                placeholder="Speed of sound"
                                            />
                                        </div>
                                    </div>
                                    {/* Calculations */}
                                    <div className="text-n-2 text-sm">
                                        <p className="mb-2">Mach Number: {objectSpeed && soundSpeed && !isNaN(parseFloat(objectSpeed)) && !isNaN(parseFloat(soundSpeed)) ? calculateMachNumber(parseFloat(objectSpeed), parseFloat(soundSpeed)).toFixed(2) : '-'}</p>
                                        <p>Speed Category: {objectSpeed && soundSpeed && !isNaN(parseFloat(objectSpeed)) && !isNaN(parseFloat(soundSpeed)) ? determineMachCategory(calculateMachNumber(parseFloat(objectSpeed), parseFloat(soundSpeed))) : '-'}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {selectedTool === 'AltitudeTemp' && (
                            <div className="relative p-8 bg-n-7 rounded-2xl shadow-lg overflow-hidden mb-12">
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
                                        <h4 className="text-2xl font-extrabold text-center text-white">Temperature at Altitude</h4>
                                    </div>
                                    {/* Input Fields */}
                                    <div className="flex flex-col items-center justify-center w-full mb-6 space-y-4">
                                        <div className="w-full">
                                            <label htmlFor="seaLevelTemp" className="block mb-2 text-sm font-medium text-white">
                                                Sea Level Temperature (°C)
                                            </label>
                                            <input
                                                type="number"
                                                id="seaLevelTemp"
                                                name="seaLevelTemp"
                                                value={sealevel}
                                                onChange={handleSealevelTemperatureChange}
                                                className="bg-gray-800 text-n-2 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5"
                                                placeholder="Sea Level Temperature"
                                            />
                                        </div>
                                        <div className="w-full">
                                            <label htmlFor="altitude" className="block mb-2 text-sm font-medium text-white">
                                                Enter altitude (meters)
                                            </label>
                                            <input
                                                type="number"
                                                id="altitude"
                                                name="altitude"
                                                value={altitude}
                                                onChange={handleAltitudeChange}
                                                className="bg-gray-800 text-n-2 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5"
                                                placeholder="Altitude"
                                            />
                                        </div>
                                    </div>
                                    {/* Calculations */}
                                    <div className="text-n-2 text-sm">
                                        <p className="mb-2">Temperature at Altitude: {altitude && !isNaN(parseFloat(altitude)) ? calculateTemperatureAtAltitude(seaLevelTemperature, parseFloat(altitude)) + ' °C' : '-'}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {selectedTool === 'Momentum' && (
                            <div className="relative p-8 bg-n-7 rounded-2xl shadow-lg overflow-hidden mb-12">
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
                                        <h4 className="text-2xl font-extrabold text-center text-white">Momentum Calculator</h4>
                                    </div>
                                    {/* Input Fields */}
                                    <div className="flex flex-col items-center justify-center w-full mb-6 space-y-4">
                                        <div className="w-full">
                                            <label htmlFor="mass" className="block mb-2 text-sm font-medium text-n-1">
                                                Enter mass (kg)
                                            </label>
                                            <input
                                                type="number"
                                                id="mass"
                                                name="mass"
                                                value={mass}
                                                onChange={handleMassChange}
                                                className="bg-gray-800 text-n-2 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5"
                                                placeholder="Mass"
                                            />
                                        </div>
                                        <div className="w-full">
                                            <label htmlFor="velocity" className="block mb-2 text-sm font-medium text-white">
                                                Enter velocity (m/s)
                                            </label>
                                            <input
                                                type="number"
                                                id="velocity"
                                                name="velocity"
                                                value={velocity}
                                                onChange={handleVelocityChange}
                                                className="bg-gray-800 text-n-2 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5"
                                                placeholder="Velocity"
                                            />
                                        </div>
                                    </div>
                                    {/* Calculations */}
                                    <div className="text-n-2 text-sm">
                                        <p className="mb-2">Momentum: {mass && velocity && !isNaN(parseFloat(mass)) && !isNaN(parseFloat(velocity)) ? calculateMomentum(parseFloat(mass), parseFloat(velocity)).toFixed(2) : '-'}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Go Back Button */}
                    {selectedTool && (
                        <div className="flex justify-center">
                            <Button white className="px-6 py-3" onClick={() => { setSelectedTool(''); setbuttons(true) }}>Go Back</Button>
                        </div>
                    )}
                </div>
            </Section>
            <Footer />
        </>
    );
}

export default Calculator;