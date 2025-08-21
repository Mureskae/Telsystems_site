import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Calendar, Tag, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все проекты' },
    { id: 'surveillance', name: 'Видеонаблюдение' },
    { id: 'networking', name: 'Сетевые решения' },
    { id: 'pc-setup', name: 'Настройка ПК' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Система видеонаблюдения ТЦ "Галерея"',
      description: 'Комплексная установка системы видеонаблюдения с 150+ IP-камерами, AI-аналитикой лиц и подсчетом посетителей. Полная интеграция с системой безопасности.',
      image: 'https://images.unsplash.com/photo-1690108114789-c9123dfe5b1b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwzfHxDQ1RWJTIwc3VydmVpbGxhbmNlfGVufDB8fHx8MTc1NTc2MTAwMHww&ixlib=rb-4.1.0&q=85',
      category: 'surveillance',
      year: '2024',
      client: 'ТЦ "Галерея"',
      tags: ['AI-аналитика', '4K камеры', 'Облачное хранение', 'Мобильный доступ'],
      stats: { cameras: '150+', coverage: '100%', uptime: '99.9%' }
    },
    {
      id: 2,
      title: 'Корпоративная сеть Альфа Банка',
      description: 'Построение защищенной сетевой инфраструктуры для головного офиса и 50 филиалов с резервированием каналов связи и системой мониторинга.',
      image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg',
      category: 'networking',
      year: '2024',
      client: 'Альфа Банк',
      tags: ['VPN', 'Балансировка нагрузки', 'Резервирование', '24/7 мониторинг'],
      stats: { offices: '50+', speed: '10Гбит/с', devices: '2000+' }
    },
    {
      id: 3,
      title: 'IT-инфраструктура "РосТех"',
      description: 'Комплексная настройка и оптимизация 200+ рабочих станций, серверного оборудования и системы виртуализации для производственного предприятия.',
      image: 'https://images.unsplash.com/photo-1672581437674-3186b17b405a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neXxlbnwwfHx8fDE3NTU3NjA5OTZ8MA&ixlib=rb-4.1.0&q=85',
      category: 'pc-setup',
      year: '2023',
      client: 'РосТех',
      tags: ['Виртуализация', 'Кластеризация', 'Автоматизация', 'Мониторинг'],
      stats: { workstations: '200+', servers: '15', uptime: '99.8%' }
    },
    {
      id: 4,
      title: 'Умная система безопасности отеля',
      description: 'Интеграция видеонаблюдения, системы контроля доступа и пожарной сигнализации в единую цифровую экосистему для 5-звездочного отеля.',
      image: 'https://images.unsplash.com/photo-1665848383782-1ea74efde68f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHxDQ1RWJTIwc3VydmVpbGxhbmNlfGVufDB8fHx8MTc1NTc2MTAwMHww&ixlib=rb-4.1.0&q=85',
      category: 'surveillance',
      year: '2024',
      client: 'Гранд Отель Премиум',
      tags: ['Интеграция систем', 'Контроль доступа', 'Аналитика', 'Автоматизация'],
      stats: { rooms: '150', cameras: '80+', zones: '25' }
    },
    {
      id: 5,
      title: 'Сетевая инфраструктура завода',
      description: 'Проектирование и внедрение промышленной сети Ethernet с резервированием для автоматизированной системы управления производством.',
      image: 'https://images.unsplash.com/photo-1691435828932-911a7801adfb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMG5ldHdvcmtpbmd8ZW58MHx8fHwxNzU1NzYxMDA2fDA&ixlib=rb-4.1.0&q=85',
      category: 'networking',
      year: '2023',
      client: 'Металлургический комбинат',
      tags: ['Промышленная сеть', 'Резервирование', 'SCADA', 'Высокая надежность'],
      stats: { lines: '5км', nodes: '500+', reliability: '99.95%' }
    },
    {
      id: 6,
      title: 'Цифровая трансформация офиса',
      description: 'Полная модернизация IT-инфраструктуры: замена серверов, настройка облачных сервисов, внедрение системы управления документооборотом.',
      image: 'https://images.unsplash.com/photo-1485740112426-0c2549fa8c86?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neXxlbnwwfHx8fDE3NTU3NjA5OTZ8MA&ixlib=rb-4.1.0&q=85',
      category: 'pc-setup',
      year: '2024',
      client: 'Консалтинговая группа',
      tags: ['Облачные решения', 'Документооборот', 'Безопасность', 'Автоматизация'],
      stats: { users: '100+', storage: '50ТБ', apps: '25+' }
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Наше</span>{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              портфолио
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Реальные проекты, реальные результаты. Каждое решение создано с учетом 
            уникальных потребностей клиента и требований отрасли.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-lg'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-600/50'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="bg-slate-900/80 backdrop-blur border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden h-full">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                    
                    {/* Year Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-violet-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.year}
                      </span>
                    </div>

                    {/* View Project Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-slate-900/90 flex items-center justify-center"
                    >
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600 text-white border-0"
                      >
                        Подробнее
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </Button>
                    </motion.div>
                  </div>

                  <div className="p-6 space-y-4">
                    {/* Title and Client */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-400 flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {project.client}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-slate-800/50 text-slate-300 px-2 py-1 rounded-lg text-xs flex items-center"
                        >
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-cyan-400 px-2 py-1 rounded-lg text-xs">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-700/50">
                      {Object.entries(project.stats).map(([key, value], statIndex) => (
                        <div key={statIndex} className="text-center">
                          <div className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                            {value}
                          </div>
                          <div className="text-xs text-slate-400 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Готовы реализовать ваш проект?
          </h3>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Каждый проект уникален. Обсудим ваши задачи и предложим оптимальное решение.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600 text-white border-0 shadow-lg group"
          >
            Обсудить проект
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;