import React from 'react'
import Question from './question'
import AnswerList from './answerList'
import Greeting from './greeting'

function QuizArea() {
    return (
        <div>
            <h2>Quiz Area</h2>
            <Question />
            <AnswerList/>
            <Greeting />
        </div>
    )
}

export default QuizArea
