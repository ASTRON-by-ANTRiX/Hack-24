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
import Button from '../../assets/Button';
import StatusBar from '../StatusBar';

const GameBoard = () => {


    return (
        <div className="flex justify-between">
            <div className="p-4 min-w-max">
                Column 1
                <TranslucentCard>
                    <div>
                        ATHUL
                    </div>
                </TranslucentCard>

                <TranslucentCard text="Hello">
                    <div className="flex flex-col gap-4">
                        <div className='flex flex-row px-1 gap-3'>
                            <img src={squiggly} className='size-30' />
                            <div className='grid grid-cols justify-end text-right'>
                                <div className="text-xl font-['heavitas'] text-white">High</div>
                                <div className="text-xl font-['heavitas'] text-white">Score</div>
                                <div className="text-3xl font-['highsens'] text-white">1050</div>
                            </div>
                        </div>
                        <div className="text-3xl font-['heavitas'] text-white">Your Score</div>
                        <div className="text-9xl font-['highsens'] text-white">890</div>
                    </div>
                </TranslucentCard>
            </div>


            <div className="p-2 h-screen w-full flex flex-col justify-end">
  Column 2
  <div className='flex gap-6 w-full'>
    {/* DRAW CARD button */}
    <Button btnTxt="DRAW CARD" width="auto" />

    {/* STAR LIFE button that takes up all the remaining space */}
    <div className='flex flex-row flex-grow'>
      <Button btnTxt="STAR LIFE" width="full">
        {<StatusBar level={83} />}
      </Button>
    </div>

    {/* FIND PLANET button */}
    <Button btnTxt="FIND PLANET" width="auto" />
  </div>
</div>



        </div>
    );
};

export default GameBoard;
