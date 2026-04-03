import { useState } from 'react';
import { QuizList } from './components/QuizList';
import { QuizView } from './components/QuizView';
import type { Quiz } from './data/quizData';
import { quizData } from './data/quizData';
import './App.css';

function App() {
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);

  return (
    <>
      {selectedQuiz === null ? (
        <QuizList quizzes={quizData} onSelect={setSelectedQuiz} />
      ) : (
        <QuizView quiz={selectedQuiz} onBack={() => setSelectedQuiz(null)} />
      )}
    </>
  );
}

export default App;
