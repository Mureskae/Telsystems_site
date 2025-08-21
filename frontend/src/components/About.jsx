import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Target, Zap, TrendingUp, Shield } from 'lucide-react';
import { Card } from './ui/card';

const About = () => {
  const stats = [
    { number: '500+', label: 'Завершенных проектов', icon: Target },
    { number: '50+', label: 'Корпоративных клиентов', icon: Users },
    { number: '99.8%', label: 'Время работы систем', icon: TrendingUp },
    { number: '24/7', label: 'Техническая поддержка', icon: Shield }
  ];

  const advantages = [
    {
      icon: Award,
      title: 'Сертифицированные специалисты',
      description: 'Команда из 15+ экспертов с международными сертификатами в области IT и безопасности'
    },
    {
      icon: Zap,
      title: 'Быстрая реализация',
      description: 'Средний срок реализации проекта — 3-7 дней с полным циклом тестирования'
    },
    {
      icon: Shield,
      title: 'Гарантия качества',
      description: 'Расширенная гарантия до 3 лет на оборудование и 1 год бесплатного обслуживания'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
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
            <span className="text-white">О компании</span>{' '}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              TelSystemsPro
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Мы не просто устанавливаем оборудование — мы создаем технологические экосистемы, 
            которые работают безупречно годами и адаптируются к будущим потребностям вашего бизнеса.
          </p>
        </motion.div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Инновации с первого дня
            </h3>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Основанная в 2020 году, TelSystemsPro быстро стала лидером в сфере комплексных 
                IT-решений. Мы начали с небольшой команды энтузиастов и выросли в признанную 
                компанию с портфолио из 500+ успешных проектов.
              </p>
              <p>
                Наша философия основана на принципах инновационности, надежности и 
                клиентоориентированности. Каждый проект мы рассматриваем как возможность 
                создать нечто выдающееся.
              </p>
              <p>
                Сегодня мы гордимся тем, что наши решения обеспечивают безопасность и 
                эффективность для ведущих компаний России.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1698047682129-c3e217ac08b7"
                alt="Наша команда"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              
              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute top-6 left-6"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-white">5+</div>
                  <div className="text-sm text-slate-200">Лет опыта</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
                className="absolute bottom-6 right-6"
              >
                <div className="bg-gradient-to-r from-cyan-500/20 to-violet-500/20 backdrop-blur-md rounded-2xl p-4 border border-cyan-400/30">
                  <div className="text-2xl font-bold text-white">15+</div>
                  <div className="text-sm text-slate-200">Специалистов</div>
                </div>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-r from-cyan-500/30 to-violet-500/30 rounded-full blur-xl"></div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center"
            >
              <Card className="bg-slate-900/50 backdrop-blur border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 p-8">
                <motion.div
                  whileHover={{ rotate: 5 }}
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-2xl flex items-center justify-center"
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-300 text-sm leading-tight">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Почему выбирают нас
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 p-8 h-full">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <advantage.icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white">{advantage.title}</h4>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{advantage.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;