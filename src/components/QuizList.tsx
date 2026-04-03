import { motion } from 'framer-motion';
import { BookOpen, Users, Clock, ChevronRight, Sparkles } from 'lucide-react';
import type { Quiz } from '../data/quizData';

interface QuizListProps {
  quizzes: Quiz[];
  onSelect: (quiz: Quiz) => void;
}

const difficultyColors = {
  '简单': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  '中等': 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  '困难': 'bg-rose-500/20 text-rose-400 border-rose-500/30',
};

export function QuizList({ quizzes, onSelect }: QuizListProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0f] relative overflow-hidden">
      {/* Background atmosphere */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[600px] bg-amber-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-violet-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="pt-16 pb-12 px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-6xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 text-sm font-medium">开始你的学习之旅</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-['Crimson_Pro',serif]">
              EZ Quiz
            </h1>
            <p className="text-lg text-zinc-400 max-w-xl mx-auto font-['DM_Sans',sans-serif]">
              选择一个题库，开始刷题。掌握知识，提升技能。
            </p>
          </motion.div>
        </header>

        {/* Quiz Grid */}
        <main className="px-6 pb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {quizzes.map((quiz, index) => (
                <motion.div
                  key={quiz.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  onClick={() => onSelect(quiz)}
                  className="group cursor-pointer"
                >
                  <div className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 hover:border-amber-500/30 transition-all duration-300 backdrop-blur-sm">
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/0 to-violet-500/0 group-hover:from-amber-500/5 group-hover:to-violet-500/5 transition-all duration-300" />

                    <div className="relative">
                      {/* Icon & Category */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 flex items-center justify-center border border-amber-500/20">
                          <span className="text-amber-400 font-bold text-sm font-['Crimson_Pro',serif]">{quiz.icon}</span>
                        </div>
                        <span className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${difficultyColors[quiz.difficulty]}`}>
                          {quiz.difficulty}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-amber-100 transition-colors font-['Crimson_Pro',serif]">
                        {quiz.title}
                      </h3>
                      <p className="text-sm text-zinc-400 mb-4 line-clamp-2 font-['DM_Sans',sans-serif]">
                        {quiz.description}
                      </p>

                      {/* Stats */}
                      <div className="flex items-center gap-4 text-xs text-zinc-500 mb-4">
                        <div className="flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>{quiz.questionCount} 题</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          <span>~{quiz.questionCount * 2} 分钟</span>
                        </div>
                      </div>

                      {/* Category & Action */}
                      <div className="flex items-center justify-between pt-4 border-t border-zinc-800/80">
                        <span className="text-xs text-zinc-500 bg-zinc-800/50 px-2 py-1 rounded-md">
                          {quiz.category}
                        </span>
                        <div className="flex items-center gap-1 text-amber-400 text-sm font-medium group-hover:gap-2 transition-all">
                          <span>开始</span>
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </main>

        {/* Footer Stats */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/90 to-transparent pt-12 pb-6 px-6 pointer-events-none"
        >
          <div className="max-w-6xl mx-auto flex justify-center gap-8 text-sm text-zinc-500">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>{quizzes.length} 个题库</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>{quizzes.reduce((sum, q) => sum + q.questionCount, 0)} 道题目</span>
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
