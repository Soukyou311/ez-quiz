import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle2, XCircle, Trophy, ChevronRight, Lightbulb } from 'lucide-react';
import type { Quiz } from '../data/quizData';

interface QuizViewProps {
  quiz: Quiz;
  onBack: () => void;
}

type AnswerState = 'unanswered' | 'correct' | 'incorrect';

export function QuizView({ quiz, onBack }: QuizViewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answerState, setAnswerState] = useState<AnswerState>('unanswered');
  const [correctCount, setCorrectCount] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const currentQuestion = quiz.questions[currentIndex];
  const progress = ((currentIndex + 1) / quiz.questions.length) * 100;

  const handleOptionSelect = (index: number) => {
    if (answerState !== 'unanswered') return;
    setSelectedOption(index);
  };

  const handleConfirm = () => {
    if (selectedOption === null) return;

    const isCorrect = selectedOption === currentQuestion.correctIndex;
    setAnswerState(isCorrect ? 'correct' : 'incorrect');
    setShowExplanation(true);

    if (isCorrect) {
      setCorrectCount(c => c + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < quiz.questions.length - 1) {
      setCurrentIndex(i => i + 1);
      setSelectedOption(null);
      setAnswerState('unanswered');
      setShowExplanation(false);
    } else {
      setIsComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setAnswerState('unanswered');
    setCorrectCount(0);
    setShowExplanation(false);
    setIsComplete(false);
  };

  if (isComplete) {
    const percentage = Math.round((correctCount / quiz.questions.length) * 100);
    const isGood = percentage >= 70;

    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center p-6">
        {/* Background */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-amber-500/10 rounded-full blur-[150px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 w-full max-w-md"
        >
          <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-900/60 border border-zinc-800/80 rounded-3xl p-8 text-center backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
              className={`w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center ${isGood ? 'bg-emerald-500/20' : 'bg-amber-500/20'}`}
            >
              <Trophy className={`w-10 h-10 ${isGood ? 'text-emerald-400' : 'text-amber-400'}`} />
            </motion.div>

            <h2 className="text-2xl font-bold text-white mb-2 font-['Crimson_Pro',serif]">答题完成！</h2>
            <p className="text-zinc-400 mb-6 font-['DM_Sans',sans-serif]">{quiz.title}</p>

            <div className="bg-zinc-800/50 rounded-2xl p-6 mb-6">
              <div className="text-5xl font-bold text-white mb-2 font-['Crimson_Pro',serif]">
                {correctCount}/{quiz.questions.length}
              </div>
              <div className="text-lg text-zinc-400 font-['DM_Sans',sans-serif]">
                正确率 {percentage}%
              </div>
              <div className="mt-4 h-2 bg-zinc-700/50 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className={`h-full rounded-full ${isGood ? 'bg-emerald-500' : 'bg-amber-500'}`}
                />
              </div>
            </div>

            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onBack}
                className="flex-1 px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-medium transition-colors font-['DM_Sans',sans-serif]"
              >
                返回列表
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleRestart}
                className="flex-1 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-medium transition-colors font-['DM_Sans',sans-serif]"
              >
                再做一次
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] relative">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-amber-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="sticky top-0 bg-[#0a0a0f]/80 backdrop-blur-lg border-b border-zinc-800/50 z-20">
          <div className="max-w-3xl mx-auto px-4 py-4">
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onBack}
                className="p-2 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </motion.button>

              <div className="flex-1 min-w-0">
                <h1 className="text-lg font-semibold text-white truncate font-['Crimson_Pro',serif]">{quiz.title}</h1>
                <p className="text-xs text-zinc-500">
                  第 {currentIndex + 1} / {quiz.questions.length} 题
                </p>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800/50 text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-white font-medium">{correctCount}</span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-3 h-1 bg-zinc-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full"
              />
            </div>
          </div>
        </header>

        {/* Question Content */}
        <main className="max-w-3xl mx-auto px-4 py-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Question */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-lg bg-amber-500/10 text-amber-400 text-sm font-medium">
                    Q{currentIndex + 1}
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl text-white leading-relaxed font-['DM_Sans',sans-serif]">
                  {currentQuestion.question}
                </h2>
              </div>

              {/* Options */}
              <div className="space-y-3 mb-8">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = selectedOption === index;
                  const isCorrect = index === currentQuestion.correctIndex;
                  const showResult = answerState !== 'unanswered';

                  let bgClass = 'bg-zinc-900/50 hover:bg-zinc-800/50';
                  let borderClass = 'border-zinc-700/50 hover:border-zinc-600';

                  if (showResult) {
                    if (isCorrect) {
                      bgClass = 'bg-emerald-500/10';
                      borderClass = 'border-emerald-500/50';
                    } else if (isSelected && !isCorrect) {
                      bgClass = 'bg-rose-500/10';
                      borderClass = 'border-rose-500/50';
                    }
                  } else if (isSelected) {
                    bgClass = 'bg-amber-500/10';
                    borderClass = 'border-amber-500/50';
                  }

                  return (
                    <motion.button
                      key={index}
                      whileHover={!showResult ? { scale: 1.01 } : {}}
                      whileTap={!showResult ? { scale: 0.99 } : {}}
                      onClick={() => handleOptionSelect(index)}
                      disabled={answerState !== 'unanswered'}
                      className={`w-full text-left p-4 rounded-xl border transition-all ${bgClass} ${borderClass}`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium shrink-0 ${
                          showResult && isCorrect
                            ? 'bg-emerald-500 text-white'
                            : showResult && isSelected && !isCorrect
                            ? 'bg-rose-500 text-white'
                            : isSelected
                            ? 'bg-amber-500 text-black'
                            : 'bg-zinc-800 text-zinc-400'
                        }`}>
                          {showResult && isCorrect ? (
                            <CheckCircle2 className="w-5 h-5" />
                          ) : showResult && isSelected && !isCorrect ? (
                            <XCircle className="w-5 h-5" />
                          ) : (
                            String.fromCharCode(65 + index)
                          )}
                        </div>
                        <span className={`text-base ${showResult && isCorrect ? 'text-emerald-100' : showResult && isSelected && !isCorrect ? 'text-rose-100' : 'text-zinc-200'} font-['DM_Sans',sans-serif]`}>
                          {option}
                        </span>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* Explanation */}
              <AnimatePresence>
                {showExplanation && currentQuestion.explanation && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-8 overflow-hidden"
                  >
                    <div className="p-4 rounded-xl bg-zinc-800/30 border border-zinc-700/30">
                      <div className="flex items-center gap-2 mb-2">
                        <Lightbulb className="w-4 h-4 text-amber-400" />
                        <span className="text-sm font-medium text-amber-400">解析</span>
                      </div>
                      <p className="text-sm text-zinc-300 font-['DM_Sans',sans-serif]">{currentQuestion.explanation}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Actions */}
              <div className="flex justify-end gap-3">
                {answerState === 'unanswered' ? (
                  <motion.button
                    whileHover={selectedOption !== null ? { scale: 1.02 } : {}}
                    whileTap={selectedOption !== null ? { scale: 0.98 } : {}}
                    onClick={handleConfirm}
                    disabled={selectedOption === null}
                    className={`px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-colors font-['DM_Sans',sans-serif] ${
                      selectedOption !== null
                        ? 'bg-amber-500 hover:bg-amber-400 text-black'
                        : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                    }`}
                  >
                    <span>确认答案</span>
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleNext}
                    className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-medium flex items-center gap-2 transition-colors font-['DM_Sans',sans-serif]"
                  >
                    <span>{currentIndex < quiz.questions.length - 1 ? '下一题' : '查看结果'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
