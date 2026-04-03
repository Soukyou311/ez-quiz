import { useState } from 'react';
import { Login } from './components/Login';
import { CategoryList } from './components/CategoryList';
import { QuizList } from './components/QuizList';
import { QuizView } from './components/QuizView';
import type { User, Quiz, QuizCategory } from './data/quizData';
import { quizCategories } from './data/quizData';
import './App.css';

type ViewState = 'login' | 'categories' | 'quizzes' | 'quiz';

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [view, setView] = useState<ViewState>('login');
  const [selectedCategory, setSelectedCategory] = useState<QuizCategory | null>(null);
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);

  const handleLogin = (loggedInUser: User) => {
    setUser(loggedInUser);
    setView('categories');
  };

  const handleLogout = () => {
    setUser(null);
    setView('login');
    setSelectedCategory(null);
    setSelectedQuiz(null);
  };

  const handleSelectCategory = (category: QuizCategory) => {
    setSelectedCategory(category);
    setView('quizzes');
  };

  const handleSelectQuiz = (quiz: Quiz) => {
    setSelectedQuiz(quiz);
    setView('quiz');
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setView('categories');
  };

  const handleBackToQuizzes = () => {
    setSelectedQuiz(null);
    setView('quizzes');
  };

  // Not logged in
  if (!user || view === 'login') {
    return <Login onLogin={handleLogin} />;
  }

  // Category list
  if (view === 'categories') {
    return (
      <CategoryList
        categories={quizCategories}
        user={user}
        onSelectCategory={handleSelectCategory}
        onLogout={handleLogout}
      />
    );
  }

  // Quiz list within a category
  if (view === 'quizzes' && selectedCategory) {
    return (
      <QuizList
        category={selectedCategory}
        onSelectQuiz={handleSelectQuiz}
        onBack={handleBackToCategories}
      />
    );
  }

  // Quiz view
  if (view === 'quiz' && selectedQuiz) {
    return (
      <QuizView
        quiz={selectedQuiz}
        onBack={handleBackToQuizzes}
      />
    );
  }

  return null;
}

export default App;
