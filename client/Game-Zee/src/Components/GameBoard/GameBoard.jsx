// src/components/GameBoard/GameBoard.jsx

import React from 'react';
import PlanetCard from '../PlanetCard/PlanetCard'; // Adjust the path as needed
import styles from './GameBoard.module.css'; // Import the CSS module
import { exoplanetsData, asteroidData, alienData, moonData } from '../../assets/dataBase/db'
import AsteroidCard from '../AsteroidCard/AsteroidCard';
import AlienCard from '../AlienCard/AlienCard';
import MoonCard from '../MoonCard/MoonCard';
import TranslucentCard from '../TranslucentCard/TranslucentCard';
import squiggly from '../../assets/Squiggly.svg'

const GameBoard = () => {


    return (
        <div className="flex">
            <div className="p-4 h-screen">
                <TranslucentCard>
                    <div>
                        ATHUL
                    </div>
                </TranslucentCard>

                <TranslucentCard text="Hello">
                    <div className="flex flex-col gap-4">
                        <div className='flex flex-row px-1 gap-3'>
                            <img src={squiggly} className='size-30'/>
                            <div className='grid grid-cols justify-end text-right'>
                                <div className="text-xl font-['heavitas'] text-white p-[-2px]">High</div>
                                <div className="text-xl font-['heavitas'] text-white p-0">Score</div>
                                <div className="text-3xl font-['highsens'] text-white p-0">1050</div>
                            </div>
                        </div>
                        <div className="text-3xl font-['heavitas'] text-white">Your Score</div>
                        <div className="text-9xl font-['highsens'] text-white">890</div>
                    </div>
                </TranslucentCard>
            </div>


            <div className="bg-pink-50 p-4 h-screen">
                Two Columns
            </div>
        </div>
    );
};

export default GameBoard;
