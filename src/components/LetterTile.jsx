import { useState } from 'react'

function LetterTile({ letter, widthPx = 50, heightPx = 50, onClick }) {

  const [selected, useSelected] = useState(false);

  const HandleClick = () => {
    if (!selected) {
      onClick(false);
    }
    else {
      onClick(true);
    }
    useSelected(!selected);
  }

  return (
    <button
      style={{ width: `${widthPx}px`, height: `${heightPx}px` }}
      className={!selected ? 'bg-primaryBg border-2 border-onPrimaryBg text-onPrimary font-bold rounded-lg' : 'bg-onPrimaryBg border-2 border-onPrimaryBg text-onPrimary font-bold rounded-lg'}
      onClick={HandleClick}
    >
      {letter}
    </button>
  )
}

export default LetterTile