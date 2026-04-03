import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Clock, ChevronRight } from 'lucide-react';
import type { Quiz, QuizCategory } from '../data/quizData';

interface QuizListProps {
  category: QuizCategory;
  onSelectQuiz: (quiz: Quiz) => void;
  onBack: () => void;
}

const difficultyColors = {
  '简单': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  '中等': 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  '困难': 'bg-rose-500/20 text-rose-400 border-rose-500/30',
};

export function QuizList({ category, onSelectQuiz, onBack }: QuizListProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0f] relative overflow-hidden">
      {/* Background atmosphere */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[600px] bg-orange-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-violet-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="sticky top-0 bg-[#0a0a0f]/80 backdrop-blur-lg border-b border-zinc-800/50 z-20">
          <div className="max-w-4xl mx-auto px-4 py-4">
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
                <div className="flex items-center gap-2 mb-1">
                  <span className={`px-2 py-0.5 rounded text-xs font-medium bg-orange-500/20 text-orange-400`}>
                    {category.icon}
                  </span>
                </div>
                <h1 className="text-xl font-bold text-white truncate font-['Crimson_Pro',serif]">
                  {category.title}
                </h1>
              </div>
            </div>
          </div>
        </header>

        {/* Quiz List */}
        <main className="px-6 py-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-zinc-400 mb-6 font-['DM_Sans',sans-serif]">
              {category.description}
            </p>

            <div className="space-y-4">
              {category.quizzes.map((quiz, index) => (
                <motion.div
                  key={quiz.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 4 }}
                  onClick={() => onSelectQuiz(quiz)}
                  className="group cursor-pointer"
                >
                  <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-900/60 border border-zinc-800/80 rounded-xl p-5 hover:border-orange-500/30 transition-all duration-300 backdrop-blur-sm">
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 flex items-center justify-center border border-orange-500/20 shrink-0">
                        <span className="text-orange-400 font-bold text-sm font-['Crimson_Pro',serif]">{quiz.icon}</span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-semibold text-white group-hover:text-orange-100 transition-colors font-['Crimson_Pro',serif]">
                            {quiz.title}
                          </h3>
                          <span className={`px-2 py-0.5 rounded-lg text-xs font-medium border ${difficultyColors[quiz.difficulty]}`}>
                            {quiz.difficulty}
                          </span>
                        </div>
                        <p className="text-sm text-zinc-400 line-clamp-1 font-['DM_Sans',sans-serif]">
                          {quiz.description}
                        </p>
                      </div>

                      {/* Stats */}
                      <div className="hidden sm:flex items-center gap-6 text-sm text-zinc-500 shrink-0">
                        <div className="flex items-center gap-1.5">
                          <BookOpen className="w-4 h-4" />
                          <span>{quiz.questionCount} 题</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          <span>~{quiz.questionCount * 2}分钟</span>
                        </div>
                      </div>

                      {/* Arrow */}
                      <ChevronRight className="w-5 h-5 text-zinc-600 group-hover:text-orange-400 transition-colors shrink-0" />
                    </div>

                    {/* Progress bar (placeholder) */}
                    <div className="mt-4 pt-4 border-t border-zinc-800/50">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-zinc-500">学习进度</span>
                        <span className="text-zinc-400">0/{quiz.questionCount}</span>
                      </div>
                      <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                        <div className="h-full w-0 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
