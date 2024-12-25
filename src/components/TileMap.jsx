import React from 'react';

import LetterTile from './LetterTile';

const TileMap = ({ wordList = ['default'], numTilesX = 10, numTilesY = 10 }) => {

    if (!wordList || wordList.length == 0) {
        return;
    }

    const classN = `grid grid-cols-${numTilesY} grid-rows-${numTilesX} gap-2 p-2 border border-black border-2 rounded-md`;

    const LetterIndex = setLetterIndexes();

    function randomChar(length = 1) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        // Loop to generate characters for the specified length
        for (let i = 0; i < length; i++) {
            const randomInd = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomInd);
        }
        return result;
    }

    function randomStartPos() {
        let x = Math.floor(Math.random() * (numTilesX - 1));
        let y = Math.floor(Math.random() * (numTilesY - 1));
        return [x, y];
    }

    function setLetterIndexes() {
        let LetterIndex = {};

        wordList.forEach((word) => {
            word = word.toUpperCase();


            let startPos = randomStartPos();
            LetterIndex[startPos] = word.charAt(0);

            let positions = [-1, 0, 1];

            for (let i = 1; i < word.length; i++) {
                let attempts = 0;
                while (attempts < 8) {
                    // Offset will be random value from -1, 0, 1
                    let xOffset = positions[Math.floor(Math.random() * positions.length)];
                    let yOffset = positions[Math.floor(Math.random() * positions.length)];

                    // New position = old position offsetted
                    let newPos = [
                        startPos[0] + xOffset,
                        startPos[1] + yOffset
                    ];

                    // If the new position is within bounds
                    if (newPos[0] > 0 && newPos[1] > 0 && newPos[0] < numTilesX && newPos[1] < numTilesY) {
                        if (LetterIndex[newPos] == undefined) {
                            startPos = newPos;
                            LetterIndex[newPos] = word.charAt(i);
                            break;
                        }
                    }

                    attempts = attempts + 1;
                }
            }

        });

        console.log(LetterIndex);

        return LetterIndex;
    }

    return (
        <div className='flex justify-center'>
            <div
                className={classN}
            >
                {
                    Array.from({ length: numTilesX }).map((_, xIndex) => (
                        Array.from({ length: numTilesY }).map((_, yIndex) => {
                            // console.log(xIndex + '' + yIndex);
                            return (
                                < LetterTile
                                    key={`${xIndex}-${yIndex}`}
                                    letter={LetterIndex[[xIndex, yIndex]] !== undefined ? LetterIndex[[xIndex, yIndex]] + '?' : randomChar()}
                                />
                            )
                        }
                        )))
                }
            </div>
        </div>
    )
}

export default TileMap