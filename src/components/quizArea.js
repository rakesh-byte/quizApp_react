import React from 'react'
import Question from './question'
import AnswerList from './answerList'
import Greeting from './greeting'
// import EndGreeting from './endGreeting'

function QuizArea(props) {
    
    if (props.isFinished){
           return <Greeting />     
    }

    // else{
    //     return <EndGreeting />
    // }

    return (

       
        <div>
            <Question dataSet = {props.dataSet}/>
            <AnswerList handleClick = {props.handleClick} dataSet = {props.dataSet} />
        </div>
    )
}

export default QuizArea
