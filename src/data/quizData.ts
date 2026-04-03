// 题库数据类型定义
export interface Question {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

export interface Quiz {
  id: number;
  title: string;
  description: string;
  icon: string;
  questionCount: number;
  difficulty: '简单' | '中等' | '困难';
  category: string;
  questions: Question[];
}

// 模拟题库数据
export const quizData: Quiz[] = [
  {
    id: 1,
    title: 'JavaScript 基础',
    description: '掌握 JavaScript 核心概念：变量、函数、闭包、原型链等',
    icon: 'JS',
    questionCount: 10,
    difficulty: '中等',
    category: '前端开发',
    questions: [
      {
        id: 1,
        question: '以下哪个关键字用于声明一个不可重新赋值的变量？',
        options: ['var', 'let', 'const', 'static'],
        correctIndex: 2,
        explanation: 'const 声明的变量必须在声明时初始化，且之后不能重新赋值（但对象属性可以修改）'
      },
      {
        id: 2,
        question: 'typeof null 的返回值是什么？',
        options: ['"null"', '"undefined"', '"object"', '"boolean"'],
        correctIndex: 2,
        explanation: '这是 JavaScript 的一个历史遗留 bug，typeof null 返回 "object"'
      },
      {
        id: 3,
        question: '以下哪个方法不会改变原数组？',
        options: ['push', 'splice', 'map', 'sort'],
        correctIndex: 2,
        explanation: 'map 方法返回一个新数组，不会修改原数组'
      },
      {
        id: 4,
        question: '闭包是指什么？',
        options: [
          '一种设计模式',
          '函数与其词法环境的组合',
          'JavaScript 的错误类型',
          '一种数据结构'
        ],
        correctIndex: 1,
        explanation: '闭包允许内部函数访问外部函数的变量，即使外部函数已经执行完毕'
      },
      {
        id: 5,
        question: 'Promise 有几种状态？',
        options: ['2种', '3种', '4种', '5种'],
        correctIndex: 1,
        explanation: 'Promise 有三种状态：pending（进行中）、fulfilled（已成功）、rejected（已失败）'
      }
    ]
  },
  {
    id: 2,
    title: 'React 进阶',
    description: '深入理解 React Hooks、性能优化、状态管理等高级概念',
    icon: 'Re',
    questionCount: 8,
    difficulty: '困难',
    category: '前端开发',
    questions: [
      {
        id: 1,
        question: 'useEffect 的依赖数组为空数组时，效果等同于哪个生命周期？',
        options: ['shouldComponentUpdate', 'componentDidMount', 'componentDidUpdate', 'componentWillUnmount'],
        correctIndex: 1,
        explanation: '空依赖数组意味着 effect 只在组件挂载时执行一次'
      },
      {
        id: 2,
        question: 'React.memo 的作用是什么？',
        options: [
          '记忆组件状态',
          '防止不必要的重渲染',
          '创建 memoized 选择器',
          '优化网络请求'
        ],
        correctIndex: 1,
        explanation: 'React.memo 是一个高阶组件，用于对 props 进行浅比较，避免不必要的重渲染'
      },
      {
        id: 3,
        question: '以下哪个 Hook 用于获取 DOM 元素的引用？',
        options: ['useState', 'useEffect', 'useRef', 'useMemo'],
        correctIndex: 2,
        explanation: 'useRef 返回一个可变的 ref 对象，常用于访问 DOM 元素'
      },
      {
        id: 4,
        question: 'useCallback 的主要用途是什么？',
        options: [
          '缓存计算结果',
          '缓存函数引用',
          '处理异步操作',
          '管理组件状态'
        ],
        correctIndex: 1,
        explanation: 'useCallback 返回一个记忆化的回调函数，只有依赖项变化时才会更新'
      }
    ]
  },
  {
    id: 3,
    title: 'CSS 布局精通',
    description: 'Flexbox、Grid、响应式设计与现代 CSS 技巧',
    icon: 'CS',
    questionCount: 12,
    difficulty: '中等',
    category: '前端开发',
    questions: [
      {
        id: 1,
        question: 'Flexbox 中，justify-content 控制的是哪个方向的对齐？',
        options: ['交叉轴', '主轴', '垂直方向', '水平方向'],
        correctIndex: 1,
        explanation: 'justify-content 控制主轴方向的对齐，默认水平方向（但取决于 flex-direction）'
      },
      {
        id: 2,
        question: '以下哪个 CSS Grid 属性用于创建网格轨道？',
        options: ['grid-gap', 'grid-template-columns', 'grid-area', 'grid-auto-flow'],
        correctIndex: 1,
        explanation: 'grid-template-columns 和 grid-template-rows 用于定义网格的轨道大小'
      },
      {
        id: 3,
        question: 'position: sticky 的行为是？',
        options: [
          '始终固定在视口',
          '相对定位直到滚动到阈值后变为固定定位',
          '绝对定位相对于最近的定位祖先',
          '完全脱离文档流'
        ],
        correctIndex: 1,
        explanation: 'sticky 定位是相对定位和固定定位的混合，元素在滚动到阈值前为相对定位'
      },
      {
        id: 4,
        question: 'CSS 变量（自定义属性）使用什么符号声明？',
        options: ['$', '@', '--', 'var-'],
        correctIndex: 2,
        explanation: 'CSS 自定义属性以 -- 开头声明，通过 var() 函数使用'
      }
    ]
  },
  {
    id: 4,
    title: 'TypeScript 类型系统',
    description: '类型推断、泛型、条件类型等 TypeScript 高级特性',
    icon: 'TS',
    questionCount: 15,
    difficulty: '困难',
    category: '前端开发',
    questions: [
      {
        id: 1,
        question: 'TypeScript 中 interface 和 type 的主要区别是什么？',
        options: [
          '没有区别',
          'interface 可以被扩展和实现，type 可以表示更多类型',
          'type 性能更好',
          'interface 只能用于对象'
        ],
        correctIndex: 1,
        explanation: 'interface 可以声明合并、被类实现；type 可以表示联合类型、交叉类型等更多类型'
      },
      {
        id: 2,
        question: '以下哪个是 TypeScript 的工具类型？',
        options: ['Array<T>', 'Promise<T>', 'Partial<T>', 'Map<K,V>'],
        correctIndex: 2,
        explanation: 'Partial<T> 是 TypeScript 内置的工具类型，将类型 T 的所有属性变为可选'
      },
      {
        id: 3,
        question: 'infer 关键字的作用是？',
        options: [
          '声明变量',
          '在条件类型中推断类型',
          '导入类型',
          '类型断言'
        ],
        correctIndex: 1,
        explanation: 'infer 用于条件类型的 extends 子句中，声明一个待推断的类型变量'
      },
      {
        id: 4,
        question: '如何表示一个非空类型？',
        options: ['T?', 'T!', 'NonNullable<T>', 'Required<T>'],
        correctIndex: 2,
        explanation: 'NonNullable<T> 排除 T 中的 null 和 undefined 类型'
      }
    ]
  },
  {
    id: 5,
    title: 'Node.js 核心概念',
    description: '事件循环、模块系统、异步编程与性能优化',
    icon: 'No',
    questionCount: 10,
    difficulty: '中等',
    category: '后端开发',
    questions: [
      {
        id: 1,
        question: 'Node.js 中模块导出使用哪个对象？',
        options: ['export', 'module.exports', 'exports.default', 'out'],
        correctIndex: 1,
        explanation: 'Node.js 使用 module.exports 导出模块内容'
      },
      {
        id: 2,
        question: 'Node.js 的事件循环阶段顺序是？',
        options: [
          'poll -> check -> timers -> close callbacks',
          'timers -> pending callbacks -> idle, prepare -> poll -> check -> close callbacks',
          'timers -> poll -> check -> close callbacks',
          'poll -> timers -> check'
        ],
        correctIndex: 1,
        explanation: 'Node.js 事件循环有多个阶段：timers、pending callbacks、idle/prepare、poll、check、close callbacks'
      },
      {
        id: 3,
        question: 'process.nextTick 的回调何时执行？',
        options: [
          '在下一个事件循环阶段',
          '在当前操作完成后、事件循环继续之前',
          '在 timers 阶段',
          '在 poll 阶段'
        ],
        correctIndex: 1,
        explanation: 'process.nextTick 的回调在当前操作完成后立即执行，优先于事件循环'
      },
      {
        id: 4,
        question: '以下哪个不是 Node.js 的核心模块？',
        options: ['fs', 'http', 'axios', 'path'],
        correctIndex: 2,
        explanation: 'axios 是第三方 HTTP 客户端库，不是 Node.js 核心模块'
      }
    ]
  },
  {
    id: 6,
    title: '算法与数据结构',
    description: '数组、链表、树、图、排序与搜索算法',
    icon: 'Al',
    questionCount: 20,
    difficulty: '困难',
    category: '计算机基础',
    questions: [
      {
        id: 1,
        question: '快速排序的平均时间复杂度是？',
        options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'],
        correctIndex: 1,
        explanation: '快速排序平均时间复杂度为 O(n log n)，最坏情况下（已排序数组）为 O(n²)'
      },
      {
        id: 2,
        question: '二叉搜索树查找操作的时间复杂度是？',
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
        correctIndex: 1,
        explanation: '平衡二叉搜索树的查找时间复杂度为 O(log n)，但最坏情况（退化为链表）为 O(n)'
      },
      {
        id: 3,
        question: '哈希表解决冲突的常用方法不包括？',
        options: ['链地址法', '开放寻址法', '再哈希法', '冒泡法'],
        correctIndex: 3,
        explanation: '冒泡法是排序算法，不是哈希冲突解决方法'
      },
      {
        id: 4,
        question: '图的深度优先搜索使用什么数据结构？',
        options: ['队列', '栈', '堆', '散列表'],
        correctIndex: 1,
        explanation: 'DFS 使用栈（或递归调用栈），BFS 使用队列'
      }
    ]
  }
];
