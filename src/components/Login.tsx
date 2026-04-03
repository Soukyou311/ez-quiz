import { useState } from 'react';
import { motion } from 'framer-motion';
import { LogIn, UserPlus, Mail, Lock, User, Sparkles } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface LoginProps {
  onLogin: (user: { id: string; email: string; name: string }) => void;
}

export function Login({ onLogin }: LoginProps) {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('请填写所有必填项');
      return;
    }

    if (isRegister && !name) {
      setError('请填写用户名');
      return;
    }

    // 模拟登录/注册
    const user = {
      id: '1',
      email,
      name: name || email.split('@')[0],
    };

    onLogin(user);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0f] flex items-center justify-center p-6 relative overflow-hidden transition-colors">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-orange-500/5 dark:bg-orange-500/5 bg-orange-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-violet-500/5 dark:bg-violet-500/5 bg-violet-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-20">
        <ThemeToggle />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/20 mb-4"
          >
            <span className="text-2xl font-bold text-orange-500 dark:text-orange-400 font-['Crimson_Pro',serif]">Q</span>
          </motion.div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2 font-['Crimson_Pro',serif]">EZ Quiz</h1>
          <p className="text-zinc-500 dark:text-zinc-400 font-['DM_Sans',sans-serif]">AWS 认证刷题平台</p>
        </div>

        {/* Form Card */}
        <div className="bg-white dark:bg-gradient-to-br dark:from-zinc-900/90 dark:to-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 rounded-2xl p-8 backdrop-blur-sm shadow-lg dark:shadow-none">
          {/* Tabs */}
          <div className="flex mb-6 bg-zinc-100 dark:bg-zinc-800/50 rounded-xl p-1">
            <button
              onClick={() => setIsRegister(false)}
              className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
                !isRegister
                  ? 'bg-orange-500 text-black'
                  : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-white'
              }`}
            >
              登录
            </button>
            <button
              onClick={() => setIsRegister(true)}
              className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
                isRegister
                  ? 'bg-orange-500 text-black'
                  : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-white'
              }`}
            >
              注册
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {isRegister && (
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 dark:text-zinc-500" />
                <input
                  type="text"
                  placeholder="用户名"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 rounded-xl text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-orange-500/50 transition-colors"
                />
              </div>
            )}

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 dark:text-zinc-500" />
              <input
                type="email"
                placeholder="邮箱"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 rounded-xl text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-orange-500/50 transition-colors"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 dark:text-zinc-500" />
              <input
                type="password"
                placeholder="密码"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 rounded-xl text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-orange-500/50 transition-colors"
              />
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-rose-500"
              >
                {error}
              </motion.p>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-3 bg-orange-500 hover:bg-orange-400 text-black font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              {isRegister ? (
                <>
                  <UserPlus className="w-5 h-5" />
                  <span>注册</span>
                </>
              ) : (
                <>
                  <LogIn className="w-5 h-5" />
                  <span>登录</span>
                </>
              )}
            </motion.button>
          </form>

          {/* Demo hint */}
          <div className="mt-6 p-4 bg-zinc-100 dark:bg-zinc-800/30 rounded-xl">
            <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-500">
              <Sparkles className="w-4 h-4 text-orange-500 dark:text-orange-400" />
              <span>演示模式：输入任意邮箱密码即可登录</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
