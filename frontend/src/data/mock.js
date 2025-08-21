// Mock data for TelSystemsPro website
// This data simulates what would come from a backend API

export const companyInfo = {
  name: 'TelSystemsPro',
  tagline: 'Технологии будущего',
  fullName: 'ООО "ТЕЛСИСТЕМСПРО"',
  ogrn: '1257700005012',
  inn: '7743463516',
  kpp: '774301001',
  email: 'info@telsystems.pro',
  phones: ['+7(999)593-68-58', '+7(999)349-68-58'],
  workingHours: 'Работаем круглосуточно'
};

export const heroContent = {
  title: {
    part1: 'Будущее',
    part2: 'IT-технологий',
    part3: 'уже здесь'
  },
  description: 'Передовые решения в области видеонаблюдения, настройки компьютеров и сетевых технологий. Превосходим ожидания клиентов с помощью инновационных подходов и профессионального сервиса.',
  features: [
    { icon: 'Shield', text: 'Надежная защита' },
    { icon: 'Cpu', text: 'Высокие технологии' },
    { icon: 'Wifi', text: 'Быстрое подключение' },
    { icon: 'Zap', text: 'Круглосуточная поддержка' }
  ],
  stats: [
    { number: '500+', label: 'Проектов' },
    { number: '24/7', label: 'Поддержка' },
    { number: '5+', label: 'Лет опыта' }
  ]
};

export const services = [
  {
    id: 'surveillance',
    title: 'Видеонаблюдение под ключ',
    description: 'Современные системы видеонаблюдения с ИИ-аналитикой, облачным хранением и удаленным доступом. От проектирования до технического обслуживания.',
    image: 'https://images.unsplash.com/photo-1665848383782-1ea74efde68f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHxDQ1RWJTIwc3VydmVpbGxhbmNlfGVufDB8fHx8MTc1NTc2MTAwMHww&ixlib=rb-4.1.0&q=85',
    features: [
      'IP-камеры 4K/8K',
      'ИИ-аналитика',
      'Облачное хранение',
      'Мобильный доступ',
      '24/7 мониторинг'
    ],
    color: 'from-cyan-500 to-blue-600',
    icon: 'Camera'
  },
  {
    id: 'pc-setup',
    title: 'Настройка компьютеров',
    description: 'Профессиональная настройка ПК, серверов и рабочих станций. Оптимизация производительности, установка ПО, обновление железа.',
    image: 'https://images.unsplash.com/photo-1485740112426-0c2549fa8c86?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neXxlbnwwfHx8fDE3NTU3NjA5OTZ8MA&ixlib=rb-4.1.0&q=85',
    features: [
      'Диагностика систем',
      'Оптимизация ПО',
      'Апгрейд железа',
      'Восстановление данных',
      'Антивирусная защита'
    ],
    color: 'from-violet-500 to-purple-600',
    icon: 'Monitor'
  },
  {
    id: 'networking',
    title: 'Компьютерные сети и Wi-Fi',
    description: 'Построение корпоративных сетей, настройка Wi-Fi 6/7, VPN-решения и сетевая безопасность. Стабильное подключение для бизнеса.',
    image: 'https://images.unsplash.com/photo-1691435828932-911a7801adfb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMG5ldHdvcmtpbmd8ZW58MHx8fHwxNzU1NzYxMDA2fDA&ixlib=rb-4.1.0&q=85',
    features: [
      'Wi-Fi 6/7 сети',
      'VPN настройка',
      'Сетевая безопасность',
      'Балансировка нагрузки',
      'Мониторинг сети'
    ],
    color: 'from-emerald-500 to-teal-600',
    icon: 'Network'
  }
];

export const socialLinks = [
  {
    name: 'VK',
    url: 'https://vk.com/tls_pro',
    color: 'hover:text-blue-400'
  },
  {
    name: 'Avito',
    url: 'https://www.avito.ru/profile/pro/items',
    color: 'hover:text-green-400'
  },
  {
    name: 'Profi.ru',
    url: 'https://profi.ru/profile/PanovAA80',
    color: 'hover:text-orange-400'
  }
];

export const navigationItems = [
  { name: 'Главная', href: '#home' },
  { name: 'Видеонаблюдение', href: '#surveillance' },
  { name: 'Настройка ПК', href: '#pc-setup' },
  { name: 'Сети и Wi-Fi', href: '#networking' },
  { name: 'Портфолио', href: '#portfolio' },
  { name: 'Контакты', href: '#contacts' }
];

export const portfolioProjects = [
  {
    id: 1,
    title: 'Система видеонаблюдения ТЦ "Галерея"',
    description: 'Установка 150+ IP-камер с AI-аналитикой для торгового центра',
    image: 'https://images.unsplash.com/photo-1690108114789-c9123dfe5b1b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwzfHxDQ1RWJTIwc3VydmVpbGxhbmNlfGVufDB8fHx8MTc1NTc2MTAwMHww&ixlib=rb-4.1.0&q=85',
    category: 'Видеонаблюдение',
    year: '2024'
  },
  {
    id: 2,
    title: 'Корпоративная сеть банка',
    description: 'Построение защищенной сетевой инфраструктуры для 50 филиалов',
    image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg',
    category: 'Сетевые решения',
    year: '2024'
  },
  {
    id: 3,
    title: 'IT-инфраструктура офиса',
    description: 'Комплексная настройка 200+ рабочих станций и серверного оборудования',
    image: 'https://images.unsplash.com/photo-1672581437674-3186b17b405a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neXxlbnwwfHx8fDE3NTU3NjA5OTZ8MA&ixlib=rb-4.1.0&q=85',
    category: 'Настройка ПК',
    year: '2023'
  }
];

// Contact form validation messages
export const validationMessages = {
  name: {
    required: 'Имя обязательно для заполнения',
    minLength: 'Имя должно содержать минимум 2 символа'
  },
  email: {
    required: 'Email обязателен для заполнения',
    invalid: 'Неверный формат email'
  },
  phone: {
    required: 'Телефон обязателен для заполнения',
    invalid: 'Неверный формат телефона'
  },
  service: {
    required: 'Выберите услугу'
  },
  message: {
    required: 'Сообщение обязательно для заполнения',
    minLength: 'Сообщение должно содержать минимум 10 символов'
  }
};

export default {
  companyInfo,
  heroContent,
  services,
  socialLinks,
  navigationItems,
  portfolioProjects,
  validationMessages
};