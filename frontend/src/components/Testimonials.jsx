import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, User, Building, CheckCircle } from 'lucide-react';
import { Card } from './ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Александр Петров',
      position: 'Директор по безопасности',
      company: 'ТЦ "Галерея"',
      image: 'https://images.unsplash.com/photo-1743175129533-1a59b078804f',
      rating: 5,
      text: 'TelSystemsPro превзошли все наши ожидания. Система видеонаблюдения работает безупречно уже полтора года. AI-аналитика помогла значительно улучшить безопасность и оптимизировать потоки посетителей. Команда профессиональная, все сроки соблюдены.',
      project: 'Система видеонаблюдения с AI-аналитикой',
      savings: '40% снижение инцидентов'
    },
    {
      id: 2,
      name: 'Мария Соколова',
      position: 'IT-директор',
      company: 'Консалтинговая группа "Прогресс"',
      image: 'https://images.pexels.com/photos/4974920/pexels-photo-4974920.jpeg',
      rating: 5,
      text: 'Полная цифровая трансформация нашего офиса прошла гладко и в срок. Особенно впечатлила интеграция всех систем и качество технической поддержки. Производительность сотрудников выросла на 30%. Рекомендуем как надежного партнера.',
      project: 'Цифровая трансформация офиса',
      savings: '30% рост производительности'
    },
    {
      id: 3,
      name: 'Дмитрий Волков',
      position: 'Технический директор',
      company: 'РосТех Производство',
      image: 'https://images.unsplash.com/photo-1664382951070-70a6e4ef8ed0',
      rating: 5,
      text: 'Сложный проект по настройке IT-инфраструктуры для производства был выполнен на высшем уровне. Система работает стабильно 99.8% времени. Особенно ценим оперативность технической поддержки и глубокие знания специалистов.',
      project: 'IT-инфраструктура производства',
      savings: '99.8% время работы систем'
    },
    {
      id: 4,
      name: 'Елена Морозова',
      position: 'Управляющая',
      company: 'Гранд Отель Премиум',
      image: 'https://images.pexels.com/photos/8815907/pexels-photo-8815907.jpeg',
      rating: 5,
      text: 'Интеграция всех систем безопасности в единую экосистему значительно упростила управление отелем. Гости отмечают высокий уровень безопасности и комфорта. Система окупилась за первый же год эксплуатации.',
      project: 'Умная система безопасности отеля',
      savings: 'ROI 120% за первый год'
    },
    {
      id: 5,
      name: 'Андрей Кузнецов',
      position: 'Главный инженер',
      company: 'Металлургический комбинат',
      image: 'https://images.unsplash.com/photo-1521790797524-b2497295b8a0',
      rating: 5,
      text: 'Промышленная сеть, построенная TelSystemsPro, показывает исключительную надежность в суровых производственных условиях. За 2 года работы - ноль критических отказов. Это позволило нам значительно повысить эффективность производства.',
      project: 'Промышленная сетевая инфраструктура',
      savings: '99.95% надежность сети'
    },
    {
      id: 6,
      name: 'Ольга Смирнова',
      position: 'Заместитель директора',
      company: 'Образовательный центр "Будущее"',
      image: 'https://images.pexels.com/photos/33505504/pexels-photo-33505504.jpeg',
      rating: 5,
      text: 'Современная IT-инфраструктура для нашего образовательного центра была создана с учетом всех специфических требований. Дистанционное обучение теперь работает без сбоев, а административные процессы полностью автоматизированы.',
      project: 'IT-решения для образования',
      savings: '50% экономии времени на админ. задачи'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"></div>
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
            <span className="text-white">Отзывы</span>{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              клиентов
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Более 500 довольных клиентов доверили нам свои IT-проекты. 
            Читайте честные отзывы о нашей работе.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-slate-900/80 backdrop-blur border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 p-8 h-full relative overflow-hidden">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="w-16 h-16 text-cyan-400" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-slate-300 leading-relaxed mb-8 relative z-10">
                  "{testimonial.text}"
                </blockquote>

                {/* Client Info */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 p-0.5">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full rounded-full object-cover bg-slate-800"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-slate-400 text-sm">{testimonial.position}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-slate-400 text-sm">
                    <Building className="w-4 h-4" />
                    <span>{testimonial.company}</span>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-3 pt-4 border-t border-slate-700/50">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{testimonial.project}</span>
                    </div>
                    
                    <div className="bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 rounded-lg p-3">
                      <div className="text-cyan-400 font-semibold text-sm">{testimonial.savings}</div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div className="space-y-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              500+
            </div>
            <div className="text-slate-400 text-sm">Довольных клиентов</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              4.9/5
            </div>
            <div className="text-slate-400 text-sm">Средняя оценка</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              98%
            </div>
            <div className="text-slate-400 text-sm">Рекомендуют нас</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              100%
            </div>
            <div className="text-slate-400 text-sm">Проекты в срок</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;