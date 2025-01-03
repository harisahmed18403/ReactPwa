import Hero from '../components/Hero';
import TileMap from '../components/TileMap';;
import axios from 'axios';
import { useState, useEffect } from 'react';

const HomePage = () => {
    const numTilesX = 10;
    const numTilesY = 10;
    const wordLength = Math.floor(Math.random() * (Math.min(numTilesX, numTilesY) - 3)) + 3;
    const [word, setWord] = useState('');

    useEffect(() => {
        fetchWord();
    }, []);

    const fetchWord = async () => {
        try {
            const result = await axios.get(`https://random-word-api.herokuapp.com/word?length=${wordLength}`);
            let newWord = capitalizeFirstLetter(result.data[0]);
            setWord(newWord);
        }
        catch (error) {
            console.log(error)
        }
    }

    function capitalizeFirstLetter(val) {
        return String(val).charAt(0).toUpperCase() + String(val).slice(1);
    }

    return (
        <>
            <Hero title={word} subtitle='Search!' />

            <div className='flex flex-row'>
                <button className="basis-1/4" onClick={fetchWord}>Regenerate Word</button>
                <div className='basis-1/2'>
                    <TileMap word={word} numTilesX={numTilesX} numTilesY={numTilesY} />
                </div>
            </div>
        </>
    )
}

export default HomePage