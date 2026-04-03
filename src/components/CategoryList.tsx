import { motion } from 'framer-motion';
import { BookOpen, ChevronRight, LogOut, Trophy, User } from 'lucide-react';
import type { QuizCategory, User as UserType } from '../data/quizData';
import { ThemeToggle } from './ThemeToggle';

interface CategoryListProps {
  categories: QuizCategory[];
  user: UserType;
  onSelectCategory: (category: QuizCategory) => void;
  onLogout: () => void;
}

export function CategoryList({ categories, user, onSelectCategory, onLogout }: CategoryListProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0f] relative overflow-hidden transition-colors">
      {/* Background atmosphere */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[600px] bg-orange-500/5 dark:bg-orange-500/5 bg-orange-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-violet-500/5 dark:bg-violet-500/5 bg-violet-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="pt-8 pb-6 px-6">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/20 flex items-center justify-center">
                <span className="text-orange-500 dark:text-orange-400 font-bold text-lg font-['Crimson_Pro',serif]">Q</span>
              </div>
              <span className="text-xl font-bold text-zinc-900 dark:text-white font-['Crimson_Pro',serif]">EZ Quiz</span>
            </div>

            <div className="flex items-center gap-4">
              {/* Stats */}
              <div className="hidden sm:flex items-center gap-4 px-4 py-2 bg-zinc-100 dark:bg-zinc-800/30 rounded-xl">
                <div className="flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400">
                  <Trophy className="w-4 h-4 text-orange-500 dark:text-orange-400" />
                  <span>0 题</span>
                </div>
                <div className="w-px h-4 bg-zinc-200 dark:bg-zinc-700" />
                <div className="flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400">
                  <BookOpen className="w-4 h-4 text-orange-500 dark:text-orange-400" />
                  <span>0 套</span>
                </div>
              </div>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* User */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800/30 rounded-lg">
                  <User className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                  <span className="text-sm text-zinc-700 dark:text-white font-medium">{user.name}</span>
                </div>
                <button
                  onClick={onLogout}
                  className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-400 hover:text-zinc-600 dark:hover:text-white transition-colors"
                  title="退出登录"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main */}
        <main className="px-6 pb-20">
          <div className="max-w-5xl mx-auto">
            {/* Welcome */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-10"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-2 font-['Crimson_Pro',serif]">
                选择认证方向
              </h1>
              <p className="text-zinc-500 dark:text-zinc-400 font-['DM_Sans',sans-serif]">
                选择一个分类，开始你的认证备考之旅
              </p>
            </motion.div>

            {/* Category Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                  onClick={() => onSelectCategory(category)}
                  className="group cursor-pointer"
                >
                  <div className="relative bg-white dark:bg-gradient-to-br dark:from-zinc-900/90 dark:to-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 rounded-2xl p-6 hover:border-orange-500/30 transition-all duration-300 shadow-sm dark:shadow-none backdrop-blur-sm overflow-hidden">
                    {/* Hover glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-orange-500/5 to-transparent" />

                    <div className="relative">
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 flex items-center justify-center border border-orange-500/20 mb-4">
                        <span className="text-orange-500 dark:text-orange-400 font-bold text-lg font-['Crimson_Pro',serif]">{category.icon}</span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-100 transition-colors font-['Crimson_Pro',serif]">
                        {category.title}
                      </h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4 font-['DM_Sans',sans-serif]">
                        {category.description}
                      </p>

                      {/* Stats */}
                      <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                        <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-500">
                          <div className="flex items-center gap-1.5">
                            <BookOpen className="w-4 h-4" />
                            <span>{category.quizCount} 套题库</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-orange-500 dark:text-orange-400 text-sm font-medium group-hover:gap-2 transition-all">
                          <span>查看题库</span>
                          <ChevronRight className="w-4 h-4" />
                        </div>
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
