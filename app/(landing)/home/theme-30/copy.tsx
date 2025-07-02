export const copy = {
  // Hero Section
  hero: {
    title: "LEVEL UP YOUR DIGITAL EXPERIENCE",
    subtitle: "Enter the ultimate digital arcade where innovation meets nostalgia.",
    primaryCTA: "🎮 START GAME",
    secondaryCTA: "👾 HIGH SCORES",
    features: [
      {
        icon: "🕹️",
        title: "PLAYER 1",
        description: "Interactive Design"
      },
      {
        icon: "🎯",
        title: "POWER UP",
        description: "Performance Boost"
      },
      {
        icon: "🏆",
        title: "ACHIEVEMENT",
        description: "Success Unlocked"
      },
      {
        icon: "🚀",
        title: "NEXT LEVEL",
        description: "Future Ready"
      }
    ]
  },

  // Stats Section
  stats: {
    title: "GAME STATS",
    subtitle: "Check out our legendary achievements in the digital realm!",
    items: [
      {
        icon: "🎮",
        value: 500,
        label: "Games Completed",
        suffix: "+",
        color: "cyan-400"
      },
      {
        icon: "👾",
        value: 250,
        label: "Boss Defeated",
        suffix: "+",
        color: "pink-400"
      },
      {
        icon: "🏆",
        value: 98,
        label: "Win Rate",
        suffix: "%",
        color: "yellow-400"
      },
      {
        icon: "⭐",
        value: 999,
        label: "High Score",
        suffix: "K",
        color: "green-400"
      }
    ],
    achievement: "ACHIEVEMENT UNLOCKED: DIGITAL MASTERY"
  },

  // Services Section
  services: {
    title: "POWER-UPS",
    subtitle: "Choose your digital superpowers and unlock new levels of success!",
    selectMessage: "SELECT YOUR ABILITIES",
    items: [
      {
        icon: "🎮",
        title: "Player Interface",
        description: "Master the art of user experience with intuitive interfaces that feel like second nature to your users.",
        features: [
          "Responsive Game Design",
          "Interactive UI Elements",
          "User Journey Mapping",
          "Accessibility Optimization"
        ],
        color: "cyan-400",
        level: 25,
        xp: 2500
      },
      {
        icon: "⚡",
        title: "Power Boost",
        description: "Supercharge your digital performance with lightning-fast optimization and cutting-edge technology.",
        features: [
          "Performance Optimization",
          "Speed Enhancement",
          "Resource Management",
          "Cache Strategies"
        ],
        color: "yellow-400",
        level: 30,
        xp: 3200
      },
      {
        icon: "🛡️",
        title: "Defense System",
        description: "Protect your digital realm with fortress-level security and impenetrable defense mechanisms.",
        features: [
          "Security Auditing",
          "Data Protection",
          "Threat Detection",
          "Backup Systems"
        ],
        color: "green-400",
        level: 35,
        xp: 4100
      },
      {
        icon: "🚀",
        title: "Launch Sequence",
        description: "Deploy your projects to the digital universe with precision, reliability, and stellar performance.",
        features: [
          "Cloud Deployment",
          "CI/CD Pipeline",
          "Monitoring Setup",
          "Scaling Solutions"
        ],
        color: "pink-400",
        level: 40,
        xp: 5000
      }
    ],
    comboMessage: "COMBO MULTIPLIER: 4X POWER",
    comboDescription: "Combine all services for maximum effectiveness!"
  },

  // Projects Section
  projects: {
    title: "GAME PORTFOLIO",
    subtitle: "Explore our legendary quests and epic victories!",
    levelSelectMessage: "LEVEL SELECT",
    categories: ["All", "Web Games", "Mobile Apps", "E-commerce", "Platforms"],
    items: [
      {
        title: "Neon Runner",
        description: "High-speed endless runner game with retro aesthetics and addictive gameplay mechanics.",
        category: "Web Games",
        image: "🏃‍♂️",
        difficulty: "Medium",
        status: "Complete",
        score: 95000,
        achievements: [
          "Perfect Performance Score",
          "Zero Load Time Achievement",
          "Mobile Responsive Master",
          "User Engagement Champion"
        ],
        color: "cyan-400"
      },
      {
        title: "Pixel Shop",
        description: "Retro-themed e-commerce platform with gamified shopping experience and loyalty rewards.",
        category: "E-commerce",
        image: "🛒",
        difficulty: "Hard",
        status: "Complete",
        score: 88500,
        achievements: [
          "Conversion Rate Optimizer",
          "Payment Gateway Master",
          "Security Fortress Builder",
          "Analytics Wizard"
        ],
        color: "pink-400"
      },
      {
        title: "Space Trader",
        description: "Mobile trading app with space exploration theme and real-time market simulation.",
        category: "Mobile Apps",
        image: "🚀",
        difficulty: "Expert",
        status: "In Progress",
        score: 72000,
        achievements: [
          "Real-time Data Handler",
          "Cross-platform Champion",
          "UI/UX Excellence Award",
          "Performance Beast"
        ],
        color: "yellow-400"
      },
      {
        title: "Cyber Academy",
        description: "Educational platform with gamified learning paths and interactive coding challenges.",
        category: "Platforms",
        image: "🎓",
        difficulty: "Hard",
        status: "Complete",
        score: 91200,
        achievements: [
          "Learning Management Pro",
          "Interactive Content Master",
          "Progress Tracking Guru",
          "Community Builder"
        ],
        color: "green-400"
      },
      {
        title: "Retro Arcade",
        description: "Collection of classic arcade games rebuilt with modern web technologies.",
        category: "Web Games",
        image: "🕹️",
        difficulty: "Medium",
        status: "Planning",
        score: 15000,
        achievements: [
          "Game Engine Architect",
          "Pixel Perfect Designer",
          "Sound Design Master",
          "Nostalgia Creator"
        ],
        color: "purple-400"
      },
      {
        title: "Digital Wallet",
        description: "Secure cryptocurrency wallet with gaming-inspired interface and reward system.",
        category: "Mobile Apps",
        image: "💰",
        difficulty: "Expert",
        status: "In Progress",
        score: 67800,
        achievements: [
          "Blockchain Integration Pro",
          "Security Fortress Master",
          "User Experience Wizard",
          "Crypto Innovation Award"
        ],
        color: "cyan-400"
      }
    ],
    stats: {
      totalQuests: 6,
      completed: 4,
      inProgress: 2,
      successRate: 98
    }
  },

  // Contact Section
  contact: {
    title: "MULTIPLAYER MODE",
    subtitle: "Ready to start your next gaming adventure? Join our party!",
    connectMessage: "CONNECT WITH US",
    formTitle: "🎮 START CONVERSATION",
    form: {
      playerName: "PLAYER NAME",
      playerNamePlaceholder: "Enter your username...",
      email: "EMAIL ADDRESS",
      emailPlaceholder: "your.email@domain.com",
      questTitle: "QUEST TITLE",
      questTitlePlaceholder: "What's your mission?",
      questDetails: "QUEST DETAILS",
      questDetailsPlaceholder: "Tell us about your epic project idea...",
      submitButton: "🚀 LAUNCH MESSAGE",
      submittingButton: "SENDING MESSAGE..."
    },
    channelsTitle: "🎯 COMMUNICATION CHANNELS",
    methods: [
      {
        icon: "📧",
        title: "Email Quest",
        description: "Send us a digital message",
        value: "hello@gamedev.com",
        color: "cyan-400"
      },
      {
        icon: "📱",
        title: "Phone Power-Up",
        description: "Direct communication channel",
        value: "+1 (555) 123-GAME",
        color: "pink-400"
      },
      {
        icon: "📍",
        title: "Base Location",
        description: "Our gaming headquarters",
        value: "123 Pixel Street, Digital City",
        color: "yellow-400"
      },
      {
        icon: "🌐",
        title: "Social Network",
        description: "Join our gaming community",
        value: "@GameDevStudio",
        color: "green-400"
      }
    ],
    responseTime: {
      title: "⚡ RESPONSE TIME",
      description: "Usually within 24 hours",
      status: [
        "🟢 ONLINE",
        "⚡ FAST RESPONSE",
        "💬 CHAT READY"
      ]
    }
  },

  // Gaming Terminology & Phrases
  gaming: {
    hud: {
      score: "SCORE",
      level: "LEVEL",
      lives: "LIVES",
      pressStart: "PRESS START",
      online: "ONLINE",
      loading: "LOADING...",
      active: "ACTIVE",
      maxPower: "MAX POWER",
      clickToFlip: "CLICK TO FLIP",
      backToGame: "🎮 BACK TO GAME"
    },
    achievements: [
      "ACHIEVEMENT UNLOCKED",
      "LEVEL UP",
      "POWER UP ACTIVATED",
      "COMBO MULTIPLIER",
      "HIGH SCORE",
      "BOSS DEFEATED",
      "QUEST COMPLETED",
      "PERFECT SCORE",
      "LEGENDARY STATUS"
    ],
    difficulties: ["Easy", "Medium", "Hard", "Expert", "Legendary"],
    statuses: ["Planning", "In Progress", "Complete", "Legendary"],
    powerLevels: ["Rookie", "Pro", "Expert", "Master", "Legendary"]
  }
}; 