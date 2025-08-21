import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Search, Cog, Rocket, CheckCircle, Headphones } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      id: 1,
      icon: MessageCircle,
      title: 'Консультация и анализ',
      description: 'Детально изучаем ваши потребности, проводим аудит существующей инфраструктуры и определяем оптимальные решения.',
      details: ['Бесплатная консультация', 'Аудит инфраструктуры', 'Техническое задание', 'Коммерческое предложение'],
      duration: '1-2 дня',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      icon: Search,
      title: 'Проектирование решения',
      description: 'Разрабатываем детальный проект с 3D-визуализацией, схемами подключений и спецификацией оборудования.',
      details: ['3D-проектирование', 'Схемы подключений', 'Спецификация оборудования', 'Калькуляция стоимости'],
      duration: '3-5 дней',
      color: 'from-cyan-500 to-teal-500'
    },
    {
      id: 3,
      icon: Cog,
      title: 'Поставка и настройка',
      description: 'Поставляем оригинальное оборудование, выполняем профессиональный монтаж и тонкую настройку всех систем.',
      details: ['Поставка оборудования', 'Профессиональный монтаж', 'Настройка и интеграция', 'Предварительное тестирование'],
      duration: '5-10 дней',
      color: 'from-teal-500 to-emerald-500'
    },
    {
      id: 4,
      icon: Rocket,
      title: 'Тестирование и запуск',
      description: 'Проводим комплексное тестирование, обучаем персонал работе с системами и осуществляем плавный запуск.',
      details: ['Комплексное тестирование', 'Обучение персонала', 'Документация системы', 'Запуск в эксплуатацию'],
      duration: '2-3 дня',
      color: 'from-emerald-500 to-green-500'
    },
    {
      id: 5,
      icon: CheckCircle,
      title: 'Сдача и гарантия',
      description: 'Официально сдаем проект с полным пакетом документов и предоставляем расширенную гарантию на все работы.',
      details: ['Акт сдачи-приемки', 'Гарантийные документы', 'Техническая документация', 'Регистрация в сервисе'],
      duration: '1 день',
      color: 'from-green-500 to-lime-500'
    },
    {
      id: 6,
      icon: Headphones,
      title: 'Поддержка 24/7',
      description: 'Обеспечиваем круглосуточную техническую поддержку, плановое обслуживание и модернизацию систем.',
      details: ['Круглосуточная поддержка', 'Плановое обслуживание', 'Удаленная диагностика', 'Модернизация системы'],
      duration: 'Постоянно',
      color: 'from-lime-500 to-yellow-500'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Как мы</span>{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              работаем
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Проверенная методология работы, которая гарантирует качественный результат 
            в установленные сроки и в рамках бюджета.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center shadow-xl`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Этап {step.id}</div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <p className="text-lg text-slate-300 leading-relaxed">
                  {step.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {step.details.map((detail, detailIndex) => (
                    <motion.div
                      key={detailIndex}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + detailIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color}`} />
                      <span className="text-slate-200">{detail}</span>
                    </motion.div>
                  ))}
                </div>

                <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${step.color} bg-opacity-10 border border-current border-opacity-20 rounded-full`}>
                  <span className={`text-sm font-medium bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                    Срок выполнения: {step.duration}
                  </span>
                </div>
              </div>

              {/* Visual Element */}
              <div className="flex-1 relative">
                <motion.div
                  whileInView={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-full max-w-lg mx-auto"
                >
                  {/* Main Circle */}
                  <div className={`w-80 h-80 mx-auto rounded-full bg-gradient-to-r ${step.color} opacity-20 blur-xl`} />
                  
                  {/* Center Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-32 h-32 rounded-3xl bg-gradient-to-r ${step.color} flex items-center justify-center shadow-2xl`}>
                      <step.icon className="w-16 h-16 text-white" />
                    </div>
                  </div>

                  {/* Floating Elements */}
                  {step.details.slice(0, 4).map((_, detailIndex) => {
                    const angle = (detailIndex * 90) + (index * 15);
                    const radius = 120;
                    const x = Math.cos((angle * Math.PI) / 180) * radius;
                    const y = Math.sin((angle * Math.PI) / 180) * radius;

                    return (
                      <motion.div
                        key={detailIndex}
                        className="absolute w-12 h-12 bg-slate-900/80 backdrop-blur border border-slate-600/50 rounded-2xl flex items-center justify-center"
                        style={{
                          left: '50%',
                          top: '50%',
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                        }}
                        animate={{
                          y: [0, -10, 0],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                          duration: 3 + detailIndex * 0.5,
                          repeat: Infinity,
                          delay: detailIndex * 0.2
                        }}
                      >
                        <div className={`w-6 h-6 rounded-lg bg-gradient-to-r ${step.color}`} />
                      </motion.div>
                    );
                  })}

                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <motion.circle
                      cx="50%"
                      cy="50%"
                      r="120"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 0.5 }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgb(34, 197, 254)" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>

                {/* Step Number */}
                <div className="absolute top-4 right-4 lg:top-8 lg:right-8">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}>
                    <span className="text-2xl font-bold text-white">{step.id}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20 p-12 bg-slate-900/50 backdrop-blur border border-slate-700/50 rounded-3xl"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Готовы начать работу по нашей методологии?
          </h3>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для бесплатной консультации и получите детальный план реализации вашего проекта.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600 text-white px-8 py-4 rounded-full font-semibold shadow-xl transition-all duration-300"
          >
            Получить консультацию
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;