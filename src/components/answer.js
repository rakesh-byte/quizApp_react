import React from 'react'

function Answer(props) {
    return (
        <div>
            <button className = "btnAnswer" 
                    onClick = {() => props.handleClick(props.choice)} 
                    type = "button">{props.answer}
            </button>
        </div>
    )
}

export default Answer;
