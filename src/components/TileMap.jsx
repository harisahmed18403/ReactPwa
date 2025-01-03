import { useState, useEffect, useCallback } from 'react';
import LetterTile from './LetterTile';
import PropTypes from 'prop-types';

function TileMap({ numTilesX, numTilesY, word }) {

    const [letterMap, setLetterMap] = useState({});
    const [selectedLetters, setSelectedLetters] = useState({});

    useEffect(() => {
        createLetterMap();
    }, [word])

    function randomChar() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return characters.charAt(Math.floor(Math.random() * characters.length));
    };

    function createLetterMap() {
        setSelectedLetters([]);
        const myLetterMap = {};
        let remainingWord = word.toUpperCase();

        const isVertical = Math.round(Math.random());
        let startX, startY;

        if (isVertical) {
            startX = Math.floor(Math.random() * numTilesX);
            startY = Math.floor(Math.random() * (numTilesY - word.length));
        } else {
            startX = Math.floor(Math.random() * (numTilesX - word.length));
            startY = Math.floor(Math.random() * numTilesY);
        }

        for (let x = 0; x < numTilesX; x++) {
            for (let y = 0; y < numTilesY; y++) {
                const key = [x, y];
                if (x === startX && y === startY && remainingWord.length > 0) {
                    myLetterMap[key] = remainingWord.charAt(0) + '?';
                    remainingWord = remainingWord.slice(1);

                    if (isVertical) {
                        startY++;
                    } else {
                        startX++;
                    }
                } else {
                    myLetterMap[key] = randomChar();
                }
            }
        }

        setLetterMap(myLetterMap);
    };

    const handleClick = (x, y, previouslySelected) => {
        let key = [x, y];
        let letter = letterMap[key];
        if (!previouslySelected) {
            setSelectedLetters((prev) => ({ ...prev, [key]: letter }));
        }
        else {
            setSelectedLetters((prev) => {
                const newState = { ...prev };
                delete newState[key];
                return newState;
            });
        }
        console.log(letter);
        console.log(x, y);
    }

    return (
        <>
            <div className='flex justify-center'>
                <div
                    style={{
                        gridTemplateColumns: `repeat(${numTilesY}, minmax(0, 1fr))`,
                        gridTemplateRows: `repeat(${numTilesX}, minmax(0, 1fr))`,
                    }}
                    className='grid gap-2 p-2 border-2 border-black rounded-md'
                >
                    {Array.from({ length: numTilesX }).map((_, x) =>
                        Array.from({ length: numTilesY }).map((_, y) => {
                            const key = `${x},${y}`;
                            return (
                                <LetterTile key={key} letter={letterMap[key]} onClick={(previouslySelected) => handleClick(x, y, previouslySelected)} />
                            );
                        })
                    )}
                </div>
            </div>
            <div className='flex justify-center'>
                <h1>{JSON.stringify(selectedLetters)}</h1>
            </div>
        </>
    );
}

TileMap.propTypes = {
    numTilesX: PropTypes.number,
    numTilesY: PropTypes.number,
    word: PropTypes.string,
};

TileMap.defaultProps = {
    numTilesX: 10,
    numTilesY: 10,
    word: 'default',
};

export default TileMap;
