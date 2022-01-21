import Question from './Question'
import { useContext } from 'react';
import { QuizContext } from '../contexts/quiz';

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
  <div className='quiz'>
    {quizState.showResults && (
      <div className='results'>
        <div className='congratulations'>Congradulations</div>
        <div className='results-info'>
          <div>You have completed the quiz.</div>
          <div>You've got 4 out of {quizState.questions.length}</div>
        </div>
        <div 
          className='next-button'
          onClick={() => dispatch({type: 'RESTART'})} 
        >
          Restart
        </div>
      </div>
    )}
    {!quizState.showResults && (
    <div>
      <div className='score'>Question {quizState.currentQuestionIndex + 1}/{quizState.questions.length}</div>
      <Question />
      <div
       className='next-button'
       onClick={() => dispatch({type: 'NEXT_QUESTION'})}
      >
        Next question</div>
    </div>
    )}
  </div>
  );
}

export default Quiz;