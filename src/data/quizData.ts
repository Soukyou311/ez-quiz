// 用户类型
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

// 题目类型
export interface Question {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

// 题库类型
export interface Quiz {
  id: number;
  title: string;
  description: string;
  icon: string;
  questionCount: number;
  difficulty: '简单' | '中等' | '困难';
  questions: Question[];
}

// 题库分类
export interface QuizCategory {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string; // 主题色
  quizCount: number;
  quizzes: Quiz[];
}

// AWS 认证题库数据
export const quizCategories: QuizCategory[] = [
  {
    id: 1,
    title: 'AWS 认证',
    description: 'AWS 云计算认证考试题库，涵盖助理级、专业级等多项认证',
    icon: 'AWS',
    color: 'orange',
    quizCount: 4,
    quizzes: [
      {
        id: 101,
        title: 'SAA-C03 解决方案架构师助理',
        description: 'AWS Certified Solutions Architect - Associate，覆盖架构设计、安全性、可靠性等核心领域',
        icon: 'SAA',
        questionCount: 65,
        difficulty: '中等',
        questions: [
          {
            id: 1,
            question: '一家公司想要在 AWS 上部署一个高可用的 Web 应用程序。该应用程序需要跨多个可用区分布流量，并能够自动扩展。哪种配置最能满足这些要求？',
            options: [
              '使用单个 EC2 实例部署应用程序，并使用 Elastic IP 地址',
              '使用 Application Load Balancer 和 Auto Scaling 组跨多个可用区部署应用程序',
              '在单个可用区中使用多个 EC2 实例，手动配置负载均衡',
              '使用 AWS Lambda 部署应用程序，配置 API Gateway'
            ],
            correctIndex: 1,
            explanation: 'Application Load Balancer 配合 Auto Scaling 组可以实现跨可用区的流量分配和自动扩展，这是 AWS 推荐的高可用架构模式。'
          },
          {
            id: 2,
            question: '一家公司需要存储大量非结构化数据（图片、视频），并且需要高持久性和低成本。应该选择哪种存储服务？',
            options: [
              'Amazon EBS gp3 卷',
              'Amazon S3 Standard',
              'Amazon EFS',
              'Amazon Instance Store'
            ],
            correctIndex: 1,
            explanation: 'S3 是对象存储服务，适合存储非结构化数据如图片和视频，提供 99.999999999%（11个9）的持久性，且成本效益高。'
          },
          {
            id: 3,
            question: '关于 VPC 子网，以下哪项说法是正确的？',
            options: [
              '公有子网必须要有 Internet 网关',
              '私有子网中的实例无法访问互联网',
              '一个子网可以跨越多个可用区',
              '每个子网的 CIDR 块必须是 /24'
            ],
            correctIndex: 0,
            explanation: '公有子网需要通过 Internet 网关提供公网访问能力。私有子网可以通过 NAT 网关访问互联网。子网必须在单个可用区内，CIDR 块大小可自定义。'
          },
          {
            id: 4,
            question: '哪种 AWS 服务可以用于在 VPC 之间私有连接 S3 和 DynamoDB，而无需通过互联网？',
            options: [
              'VPC Peering',
              'AWS PrivateLink',
              'VPC Endpoint (Gateway 类型)',
              'VPN Connection'
            ],
            correctIndex: 2,
            explanation: 'Gateway VPC Endpoint 允许私有连接 S3 和 DynamoDB，流量不经过互联网，且不收费。Interface Endpoint 使用 PrivateLink 技术支持其他服务。'
          },
          {
            id: 5,
            question: '一家公司的应用程序需要低延迟的 NoSQL 数据库，能够处理每秒数百万次请求。应该选择哪种服务？',
            options: [
              'Amazon RDS for MySQL',
              'Amazon Aurora',
              'Amazon DynamoDB',
              'Amazon Redshift'
            ],
            correctIndex: 2,
            explanation: 'DynamoDB 是 AWS 托管的 NoSQL 数据库，能够提供个位数毫秒级延迟，自动扩展以处理每秒数百万请求，非常适合高性能键值访问场景。'
          }
        ]
      },
      {
        id: 102,
        title: 'SAP-C02 解决方案架构师专业',
        description: 'AWS Certified Solutions Architect - Professional，高级架构设计、迁移策略、复杂系统设计',
        icon: 'SAP',
        questionCount: 75,
        difficulty: '困难',
        questions: [
          {
            id: 1,
            question: '一家跨国企业需要设计一个混合云架构，本地数据中心需要与 AWS VPC 建立安全的专用连接。哪种方案最合适？',
            options: [
              '使用 Site-to-Site VPN 连接',
              '使用 AWS Direct Connect',
              '使用 Client VPN',
              '使用 VPC Peering'
            ],
            correctIndex: 1,
            explanation: 'Direct Connect 提供专用的网络连接，带宽更高、延迟更低、更安全，适合企业级混合云架构。VPN 适合作为备份或小规模场景。'
          },
          {
            id: 2,
            question: '设计一个跨区域的灾难恢复策略，要求 RPO 接近零，RTO 在几分钟内。哪种方案最合适？',
            options: [
              '定期将快照复制到备用区域',
              '使用 S3 Cross-Region Replication 和 Route 53 健康检查',
              '在多个区域运行活跃-活跃架构，使用 Aurora Global Database',
              '使用 AWS Backup 定期备份'
            ],
            correctIndex: 2,
            explanation: '活跃-活跃架构配合 Aurora Global Database 可以实现 RPO 接近零，自动故障转移可在几分钟内完成。这是最高级别的灾难恢复策略。'
          },
          {
            id: 3,
            question: '一家公司需要设计一个事件驱动架构来处理 IoT 设备数据。数据需要按顺序处理且不丢失。推荐的架构是什么？',
            options: [
              'IoT Core → Lambda → S3',
              'IoT Core → Kinesis Data Streams → Lambda/EC2',
              'IoT Core → SQS → Lambda',
              'IoT Core → SNS → Lambda'
            ],
            correctIndex: 1,
            explanation: 'Kinesis Data Streams 保证数据顺序，支持多个消费者，数据持久化可重放。SQS 不保证顺序，SNS 是推送模式不适合此场景。'
          },
          {
            id: 4,
            question: '关于 AWS Organizations 和 SCP（服务控制策略），以下哪项是正确的？',
            options: [
              'SCP 可以授予权限',
              'SCP 只能应用于 OU（组织单位），不能直接应用于账户',
              'SCP 限制权限，但不会单独授予权限',
              'SCP 可以覆盖 IAM 管理员权限'
            ],
            correctIndex: 2,
            explanation: 'SCP 是权限边界，只能限制权限不能授予。即使 IAM 允许，如果 SCP 禁止，操作也会被拒绝。这是最小权限原则的重要实现方式。'
          }
        ]
      },
      {
        id: 103,
        title: 'DVA-C02 开发人员助理',
        description: 'AWS Certified Developer - Associate，聚焦开发实践、API、Serverless、CI/CD',
        icon: 'DVA',
        questionCount: 60,
        difficulty: '中等',
        questions: [
          {
            id: 1,
            question: '在 Lambda 函数中，如何安全地存储数据库密码等敏感信息？',
            options: [
              '硬编码在函数代码中',
              '存储在环境变量中',
              '使用 AWS Secrets Manager 或 Systems Manager Parameter Store',
              '存储在 S3 存储桶中'
            ],
            correctIndex: 2,
            explanation: 'Secrets Manager 和 Parameter Store 提供加密存储、自动轮换、细粒度权限控制，是存储敏感配置的正确方式。环境变量虽然方便但不够安全。'
          },
          {
            id: 2,
            question: '开发人员需要为 REST API 实现 CORS 支持。在使用 API Gateway 时，最简单的方法是什么？',
            options: [
              '在每个方法的集成请求中手动添加 CORS 头',
              '在 API Gateway 控制台启用 CORS 选项',
              '在 Lambda 函数中返回 CORS 头',
              '使用 CloudFront 添加 CORS 头'
            ],
            correctIndex: 1,
            explanation: 'API Gateway 提供一键启用 CORS 功能，会自动配置 OPTIONS 方法和必要的响应头。这是最简单且推荐的方法。'
          },
          {
            id: 3,
            question: '关于 DynamoDB 的写入容量单位（WCU），以下哪项是正确的？',
            options: [
              '1 WCU = 每秒写入 1KB 数据',
              '1 WCU = 每秒写入 4KB 数据',
              '1 WCU = 每秒写入 1 个项目',
              'WCU 只适用于按需模式'
            ],
            correctIndex: 0,
            explanation: '1 WCU 表示每秒最多写入 1KB 的数据。如果项目大小为 5KB，则需要 5 WCU。按需模式不需要预置 WCU。'
          },
          {
            id: 4,
            question: '使用 AWS CDK 部署基础设施时，以下哪种语言不被支持？',
            options: [
              'TypeScript',
              'Python',
              'Go',
              'PHP'
            ],
            correctIndex: 3,
            explanation: 'AWS CDK 支持 TypeScript、JavaScript、Python、Java、C#、Go。目前不支持 PHP。'
          }
        ]
      },
      {
        id: 104,
        title: 'CLF-C02 云从业者',
        description: 'AWS Certified Cloud Practitioner，AWS 云基础入门认证，适合初学者',
        icon: 'CLF',
        questionCount: 65,
        difficulty: '简单',
        questions: [
          {
            id: 1,
            question: 'AWS 的哪种定价模式允许用户以大幅折扣购买 EC2 实例，但需要承诺使用 1 年或 3 年？',
            options: [
              '按需定价',
              '竞价型实例',
              '预留实例',
              '专用主机'
            ],
            correctIndex: 2,
            explanation: '预留实例提供高达 75% 的折扣，适合长期稳定的工作负载。按需定价最灵活但最贵，竞价型实例最便宜但可能被中断。'
          },
          {
            id: 2,
            question: '以下哪项是 AWS 共享责任模型中客户的责任？',
            options: [
              '维护数据中心物理安全',
              '管理 AWS 全球网络基础设施',
              '配置 EC2 实例的安全组',
              '修补 RDS 数据库底层操作系统'
            ],
            correctIndex: 2,
            explanation: '在共享责任模型中，AWS 负责"云的安全"（基础设施），客户负责"云中的安全"（如安全组配置、操作系统补丁、数据加密等）。'
          },
          {
            id: 3,
            question: '哪种 AWS 服务提供内容分发网络（CDN）功能，加速静态和动态内容的分发？',
            options: [
              'Amazon Route 53',
              'Amazon CloudFront',
              'Amazon VPC',
              'AWS Direct Connect'
            ],
            correctIndex: 1,
            explanation: 'CloudFront 是 AWS 的 CDN 服务，通过全球边缘节点缓存和加速内容分发，降低延迟。'
          },
          {
            id: 4,
            question: 'AWS 免费套餐包含以下哪种类型？',
            options: [
              '仅 12 个月免费',
              '仅永久免费',
              '12 个月免费 + 永久免费 + 试用',
              '仅试用优惠'
            ],
            correctIndex: 2,
            explanation: 'AWS 免费套餐包含三类：永久免费（如 Lambda 100万请求/月）、12个月免费（如 EC2 750小时/月）、短期试用（如某些服务免费试用）。'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: '其他认证',
    description: 'Kubernetes、Terraform、Google Cloud 等其他热门认证题库',
    icon: 'MORE',
    color: 'violet',
    quizCount: 2,
    quizzes: [
      {
        id: 201,
        title: 'CKA Kubernetes 管理员',
        description: 'Certified Kubernetes Administrator，Kubernetes 集群管理认证',
        icon: 'K8S',
        questionCount: 30,
        difficulty: '困难',
        questions: [
          {
            id: 1,
            question: 'Kubernetes 中，哪个组件负责调度 Pod 到节点上？',
            options: [
              'kubelet',
              'kube-apiserver',
              'kube-scheduler',
              'kube-controller-manager'
            ],
            correctIndex: 2,
            explanation: 'kube-scheduler 负责监控未调度的 Pod，并根据资源需求、亲和性规则等将 Pod 绑定到合适的节点。'
          },
          {
            id: 2,
            question: '如何查看 Kubernetes 集群中所有命名空间的 Pod？',
            options: [
              'kubectl get pods',
              'kubectl get pods --all-namespaces',
              'kubectl get pods -A',
              'kubectl get pods -n all'
            ],
            correctIndex: 2,
            explanation: '-A 是 --all-namespaces 的简写，可以查看所有命名空间中的 Pod。不带参数只查看 default 命名空间。'
          }
        ]
      },
      {
        id: 202,
        title: 'Terraform Associate',
        description: 'HashiCorp Terraform 基础设施即代码认证',
        icon: 'TF',
        questionCount: 25,
        difficulty: '中等',
        questions: [
          {
            id: 1,
            question: 'Terraform 中用于存储状态文件的推荐方式是什么？',
            options: [
              '本地文件系统',
              '远程后端（如 S3 + DynamoDB）',
              'Git 仓库',
              '内存'
            ],
            correctIndex: 1,
            explanation: '远程后端提供状态文件的集中存储、版本控制和团队协作支持。S3 + DynamoDB 是 AWS 环境中的常用组合，支持状态锁定防止并发问题。'
          }
        ]
      }
    ]
  }
];
