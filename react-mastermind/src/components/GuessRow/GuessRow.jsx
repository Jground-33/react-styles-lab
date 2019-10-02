import React from 'react';
import GuessPegs from '../GuessPegs/GuessPegs';
import GuessScore from '../GuessScore/GuessScore';
import ScoreButton from '../ScoreButton/ScoreButton';

const GuessRow = (props) => (
  <div className='flex-h guess-row'>
    <div style={{color: props.currentGuess ? 'black' : 'lightgrey', alignSelf:'center', margin: '10px',fontSize: "16px"}}>
      {props.rowIdx + 1}
    </div>
    <GuessPegs
      colors={props.colors}
      code={props.guess.code}
    />
    {
      props.currentGuess ?
        <ScoreButton /> :
        <GuessScore score={props.guess.score} />
    }
  </div>
);

export default GuessRow;