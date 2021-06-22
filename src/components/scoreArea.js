import React from 'react'
import TotalCorrect from './totalCorrect'
import TotalIncorrect from './totalIncorrect'


function ScoreArea(props) {
    return (
        <div  className = "Scorewrapper">
            <TotalCorrect Correct = {props.Correct}/>
            <TotalIncorrect Incorrect = {props.Incorrect}/>
        </div>
    )
}

export default ScoreArea
