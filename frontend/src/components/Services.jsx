import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Wifi, Camera, Monitor, Network, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

const Services = () => {
  const services = [
    {
      id: 'surveillance',
      icon: Camera,
      title: 'Видеонаблюдение под ключ',
      description: 'Современные системы видеонаблюдения с ИИ-аналитикой, облачным хранением и удаленным доступом. От проектирования до технического обслуживания.',
      image: 'https://images.unsplash.com/photo-1665848383782-1ea74efde68f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHxDQ1RWJTIwc3VydmVpbGxhbmNlfGVufDB8fHx8MTc1NTc2MTAwMHww&ixlib=rb-4.1.0&q=85',
      features: ['IP-камеры 4K/8K', 'ИИ-аналитика', 'Облачное хранение', 'Мобильный доступ', '24/7 мониторинг'],
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 'pc-setup',
      icon: Monitor,
      title: 'Настройка компьютеров',
      description: 'Профессиональная настройка ПК, серверов и рабочих станций. Оптимизация производительности, установка ПО, обновление железа.',
      image: 'https://images.unsplash.com/photo-1485740112426-0c2549fa8c86?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neXxlbnwwfHx8fDE3NTU3NjA5OTZ8MA&ixlib=rb-4.1.0&q=85',
      features: ['Диагностика систем', 'Оптимизация ПО', 'Апгрейд железа', 'Восстановление данных', 'Антивирусная защита'],
      color: 'from-violet-500 to-purple-600'
    },
    {
      id: 'networking',
      icon: Network,
      title: 'Компьютерные сети и Wi-Fi',
      description: 'Построение корпоративных сетей, настройка Wi-Fi 6/7, VPN-решения и сетевая безопасность. Стабильное подключение для бизнеса.',
      image: 'https://images.unsplash.com/photo-1691435828932-911a7801adfb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMG5ldHdvcmtpbmd8ZW58MHx8fHwxNzU1NzYxMDA2fDA&ixlib=rb-4.1.0&q=85',
      features: ['Wi-Fi 6/7 сети', 'VPN настройка', 'Сетевая безопасность', 'Балансировка нагрузки', 'Мониторинг сети'],
      color: 'from-emerald-500 to-teal-600'
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
            <span className="text-white">Наши</span>{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              услуги
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Комплексные IT-решения для бизнеса и частных клиентов. 
            Используем только передовые технологии и проверенное оборудование.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              id={service.id}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} mb-6`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-3xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`} />
                      <span className="text-slate-200">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <Button
                  size="lg"
                  className={`bg-gradient-to-r ${service.color} hover:opacity-90 text-white border-0 shadow-lg group`}
                >
                  Узнать подробнее
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-slate-800">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20`} />
                  
                  {/* Floating Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className="absolute top-6 right-6"
                  >
                    <div className={`px-4 py-2 bg-gradient-to-r ${service.color} rounded-full text-white text-sm font-medium shadow-lg backdrop-blur`}>
                      Премиум качество
                    </div>
                  </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r ${service.color} opacity-20 rounded-full blur-xl`} />
                <div className={`absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r ${service.color} opacity-10 rounded-full blur-2xl`} />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <Card className="bg-slate-900/50 backdrop-blur border-cyan-500/20 p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Готовы начать проект?
            </h3>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Получите бесплатную консультацию и персональное предложение для вашей задачи
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 shadow-lg"
              >
                Бесплатная консультация
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
              >
                Посмотреть портфолио
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;