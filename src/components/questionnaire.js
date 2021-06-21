import React, { Component } from 'react'
import dataSet from '../api/data';
import QuizArea from './quizArea';
import ScoreArea from './scoreArea';

class Questionnaire extends Component {

    constructor(){
        super();
        this.state = {
            current: 0,
            dataSet: dataSet,
            correctAnswer: 0,
            IncorrectAnswer:0,
            isFinished :0
        }
    }
    
    render() {
        return (
            <div>
                <QuizArea />
                <ScoreArea />
            </div>
        )
    }
}

export default Questionnaire;
