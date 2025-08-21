import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Cpu, Wifi, Zap } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const features = [
    { icon: Shield, text: 'Надежная защита' },
    { icon: Cpu, text: 'Высокие технологии' },
    { icon: Wifi, text: 'Быстрое подключение' },
    { icon: Zap, text: 'Круглосуточная поддержка' }
  ];

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-slate-950">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-white/5 bg-grid-16"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Будущее</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                  IT-технологий
                </span>
                <br />
                <span className="text-white">уже здесь</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-slate-300 leading-relaxed max-w-2xl"
            >
              Передовые решения в области видеонаблюдения, настройки компьютеров и сетевых технологий. 
              Превосходим ожидания клиентов с помощью инновационных подходов и профессионального сервиса.
            </motion.p>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-2 gap-4 py-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center space-x-3 p-4 bg-slate-900/50 backdrop-blur border border-slate-700/50 rounded-xl hover:border-cyan-500/50 transition-all duration-300"
                >
                  <feature.icon className="w-6 h-6 text-cyan-400" />
                  <span className="text-slate-200 font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 shadow-2xl hover:shadow-cyan-500/25 group"
              >
                Получить консультацию
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400"
              >
                Наши услуги
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-700/50"
            >
              {[
                { number: '500+', label: 'Проектов' },
                { number: '24/7', label: 'Поддержка' },
                { number: '5+', label: 'Лет опыта' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-cyan-500/30 rounded-full"
              ></motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border-2 border-dashed border-blue-500/30 rounded-full"
              ></motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 border border-violet-500/30 rounded-full"
              ></motion.div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl">
                  <div className="text-4xl font-bold text-white">TS</div>
                </div>
              </div>
              
              {/* Floating Elements */}
              {[Shield, Cpu, Wifi].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="absolute w-16 h-16 bg-slate-900/80 backdrop-blur border border-cyan-500/30 rounded-2xl flex items-center justify-center"
                  style={{
                    top: `${20 + Math.sin(index * 2.1) * 30}%`,
                    left: `${20 + Math.cos(index * 2.1) * 30}%`,
                  }}
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 3 + index,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  <Icon className="w-8 h-8 text-cyan-400" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;