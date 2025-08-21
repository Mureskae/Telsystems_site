import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'VK', url: 'https://vk.com/tls_pro', color: 'hover:text-blue-400' },
    { name: 'Avito', url: 'https://www.avito.ru/profile/pro/items', color: 'hover:text-green-400' },
    { name: 'Profi.ru', url: 'https://profi.ru/profile/PanovAA80', color: 'hover:text-orange-400' }
  ];

  const services = [
    'Видеонаблюдение под ключ',
    'Настройка компьютеров',
    'Компьютерные сети',
    'Wi-Fi решения',
    'Техническая поддержка'
  ];

  const companyInfo = {
    fullName: 'ООО "ТЕЛСИСТЕМСПРО"',
    ogrn: '1257700005012',
    inn: '7743463516',
    kpp: '774301001'
  };

  return (
    <footer className="bg-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">TS</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                    TelSystemsPro
                  </h3>
                  <p className="text-xs text-slate-400">Технологии будущего</p>
                </div>
              </div>

              <p className="text-slate-300 mb-6 max-w-md leading-relaxed">
                Мы создаем передовые IT-решения, которые помогают бизнесу и частным клиентам 
                оставаться на шаг впереди в мире высоких технологий.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-slate-300">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div>+7(999)593-68-58</div>
                    <div>+7(999)349-68-58</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span>info@telsystems.pro</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <span>Работаем круглосуточно</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`flex items-center space-x-2 px-4 py-2 bg-slate-900/50 rounded-lg text-slate-300 ${link.color} transition-colors border border-slate-700/50 hover:border-cyan-500/50`}
                  >
                    <span className="text-sm">{link.name}</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-6">Услуги</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <motion.a
                      href="#services"
                      whileHover={{ x: 5 }}
                      className="text-slate-300 hover:text-cyan-400 transition-colors flex items-center space-x-2"
                    >
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                      <span>{service}</span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-6">Реквизиты</h4>
              <div className="space-y-3 text-slate-300">
                <div>
                  <div className="text-sm text-slate-400">Полное наименование</div>
                  <div className="font-medium">{companyInfo.fullName}</div>
                </div>
                <div>
                  <div className="text-sm text-slate-400">ОГРН</div>
                  <div className="font-mono">{companyInfo.ogrn}</div>
                </div>
                <div>
                  <div className="text-sm text-slate-400">ИНН</div>
                  <div className="font-mono">{companyInfo.inn}</div>
                </div>
                <div>
                  <div className="text-sm text-slate-400">КПП</div>
                  <div className="font-mono">{companyInfo.kpp}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2025 TelSystemsPro. Все права защищены.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#terms" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;