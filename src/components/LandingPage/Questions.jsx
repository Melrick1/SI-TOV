import { useEffect, useState } from "react";
import { usePageState } from '../../PageStateContext';
import PropTypes from 'prop-types';

const Questions = ({n, question, input1, input2, input3, input4, onAnswerChange}) => {
    const { answers } = usePageState();
    const [checkedAnswer, setCheckedAnswer] = useState('')

    const handleAnswerChange = (event) => {
        const selectedOption = event.target.value;
        onAnswerChange(selectedOption);
        setCheckedAnswer(selectedOption);
    };

    const CheckOnLoad = (n, answers) => {
        const element = answers[n-1]
        if(element !== ''){
            setCheckedAnswer(element);
            console.log(checkedAnswer)
        }
    };

    useEffect(() => {
        CheckOnLoad(n, answers)
    }, []);
  
    return (
        <div className={`question-card ${n}`}>
            <h3>{n}. {question}</h3>
            <div className="question-inputs">
                <div className='input-checks'>
                    <input type="radio" name={`question-${n}`} value={input1} onChange={handleAnswerChange} checked={checkedAnswer === input1}  />
                    <span>{input1}</span>
                </div>
                <div className='input-checks'>
                    <input type="radio" name={`question-${n}`} value={input2} onChange={handleAnswerChange} checked={checkedAnswer === input2}  />
                    <span>{input2}</span>
                </div>
                <div className='input-checks'>
                    <input type="radio" name={`question-${n}`} value={input3} onChange={handleAnswerChange} checked={checkedAnswer === input3}  />
                    <span>{input3}</span>
                </div>
                <div className='input-checks'>
                    <input type="radio" name={`question-${n}`} value={input4} onChange={handleAnswerChange} checked={checkedAnswer === input4}  />
                    <span>{input4}</span>
                </div>
            </div>
        </div>
    );
};

Questions.propTypes = {
    n: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    input1: PropTypes.string.isRequired,
    input2: PropTypes.string.isRequired,
    input3: PropTypes.string.isRequired,
    input4: PropTypes.string.isRequired,
    onAnswerChange: PropTypes.func.isRequired
};

export default Questions;
