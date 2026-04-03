import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-zinc-800/50 dark:bg-zinc-800/50 bg-white/50 hover:bg-zinc-700/50 dark:hover:bg-zinc-700/50 hover:bg-zinc-200/50 border border-zinc-700/50 dark:border-zinc-700/50 border-zinc-200 transition-colors"
      title={theme === 'dark' ? '切换到白天模式' : '切换到夜间模式'}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-orange-400" />
      ) : (
        <Moon className="w-5 h-5 text-orange-500" />
      )}
    </motion.button>
  );
}
