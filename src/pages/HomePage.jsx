import Hero from '../components/Hero';
import TileMap from '../components/TileMap';;
import axios from 'axios';
import { useState, useEffect } from 'react';

const HomePage = () => {
    const [word, setWord] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('https://random-word-api.herokuapp.com/word');
                setWord(result.data[0]);
            }
            catch (error) {
                console.log(error)
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <Hero title={word} subtitle="search for the word!" />
            <TileMap wordList={[word]} numTilesX={5} numTilesY={5} />
        </>
    )
}

export default HomePage