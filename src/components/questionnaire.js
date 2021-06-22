import React, { Component } from 'react'
import dataSet from '../api/dataSet';
import QuizArea from './quizArea';
import ScoreArea from './scoreArea';

class Questionnaire extends Component {

    constructor(){
        super();
        this.state = {
            current: 0,
            dataSet: dataSet,
            Correct: 0,
            Incorrect:0,
            isFinished :0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(choice){
        if(choice == this.state.dataSet[this.state.current].correct)
            {this.setState({Correct : this.state.Correct + 1})}
        
        else{this.setState({Incorrect : this.state.Incorrect + 1})}

        // if(this.state.Correct == 2){this.setState({isFinished: true})}

        // else if(this.state.Incorrect == 2){this.setState({isFinished: false})}

        // else 
        if(this.state.current == this.state.dataSet.length-1){
            this.setState({isFinished: true})}

        else{this.setState({current : this.state.current + 1})}

     
        
    }
    
    render() {
        return (
            <div>
                <QuizArea handleClick = {this.handleClick} isFinished = {this.state.isFinished} 
                dataSet = {this.state.dataSet[this.state.current]} />
                <ScoreArea Correct = {this.state.Correct} Incorrect = {this.state.Incorrect}/>
            </div>
        )
    }
}

export default Questionnaire;
