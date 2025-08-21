import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card } from './ui/card';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const services = [
    'Видеонаблюдение под ключ',
    'Настройка компьютеров',
    'Сети и Wi-Fi',
    'Комплексные IT-решения',
    'Техническая поддержка',
    'Консультация'
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: 'Телефон',
      value: '+7(999)593-68-58',
      href: 'tel:+79995936858',
      description: 'Основной номер'
    },
    {
      icon: Phone,
      label: 'Дополнительный',
      value: '+7(999)349-68-58', 
      href: 'tel:+79993496858',
      description: 'Резервный номер'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@telsystems.pro',
      href: 'mailto:info@telsystems.pro',
      description: 'Основная почта'
    },
    {
      icon: Clock,
      label: 'Режим работы',
      value: 'Круглосуточно',
      href: null,
      description: '24/7 техподдержка'
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в течение 15 минут.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 2000);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="contacts" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"></div>
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
            <span className="text-white">Свяжитесь</span>{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              с нами
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Готовы обсудить ваш проект? Получите бесплатную консультацию и персональное предложение уже сегодня.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-900/80 backdrop-blur border-slate-700/50 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Оставьте заявку
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Ваше имя *
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="Александр Иванов"
                      className="bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="ivan@company.com"
                      className="bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-400"
                      required
                    />
                  </div>
                </div>

                {/* Phone and Service */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Телефон *
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="+7 (999) 123-45-67"
                      className="bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Интересующая услуга
                    </label>
                    <Select value={formData.service} onValueChange={(value) => handleChange('service', value)}>
                      <SelectTrigger className="bg-slate-800/50 border-slate-600/50 text-white">
                        <SelectValue placeholder="Выберите услугу" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-600">
                        {services.map((service) => (
                          <SelectItem key={service} value={service} className="text-white hover:bg-slate-700">
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Описание проекта *
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Расскажите подробнее о ваших потребностях и требованиях к проекту..."
                    className="bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-400 min-h-[120px]"
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600 text-white border-0 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Отправляем...
                    </>
                  ) : (
                    <>
                      Отправить заявку
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-slate-400 text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="group"
                >
                  <Card className="bg-slate-900/50 backdrop-blur border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white">{info.label}</h4>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-cyan-400 font-medium">{info.value}</span>
                        )}
                        <p className="text-sm text-slate-400">{info.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Response Time */}
            <Card className="bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border-cyan-500/30 p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Быстрый ответ</h4>
                  <p className="text-slate-300">Отвечаем на заявки в течение 15 минут в рабочее время</p>
                </div>
              </div>
            </Card>

            {/* Company Info */}
            <Card className="bg-slate-900/50 backdrop-blur border-slate-700/50 p-6">
              <h4 className="font-semibold text-white mb-4">Реквизиты компании</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">ООО "ТЕЛСИСТЕМСПРО"</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">ОГРН:</span>
                  <span className="text-slate-300 font-mono">1257700005012</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">ИНН:</span>
                  <span className="text-slate-300 font-mono">7743463516</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">КПП:</span>
                  <span className="text-slate-300 font-mono">774301001</span>
                </div>
              </div>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-500/30 p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Экстренная связь</h4>
                  <p className="text-slate-300 text-sm mb-2">
                    При критических проблемах с системами безопасности звоните немедленно
                  </p>
                  <a href="tel:+79995936858" className="text-red-400 hover:text-red-300 font-semibold">
                    +7(999)593-68-58
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;