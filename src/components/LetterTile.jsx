import { useState } from 'react'

function LetterTile({ letter, widthPx = 50, heightPx = 50 }) {

  const [selected, useSelected] = useState(false);

  return (
    <button
      style={{ width: `${widthPx}px`, height: `${heightPx}px` }}
      className={!selected ? 'bg-indigo-400 border-2 border-indigo-700 text-white font-bold rounded-lg' : 'bg-indigo-600 border-2 border-indigo-700 text-white font-bold rounded-lg'}
      onClick={() => useSelected(!selected)}
    >
      {letter}
    </button>
  )
}

export default LetterTile