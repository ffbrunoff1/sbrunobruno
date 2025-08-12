import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Mail, Phone, MapPin, Clock, Shield, Award, Users } from 'lucide-react'

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const footerLinks = {
    'Navegação': [
      { name: 'Início', id: 'hero' },
      { name: 'Sobre Nós', id: 'about' },
      { name: 'Serviços', id: 'services' },
      { name: 'Contato', id: 'contact' }
    ],
    'Serviços': [
      { name: 'Consultas Especializadas', action: () => scrollToSection('services') },
      { name: 'Diagnóstico Avançado', action: () => scrollToSection('services') },
      { name: 'Medicina Preventiva', action: () => scrollToSection('services') },
      { name: 'Atendimento de Urgência', action: () => scrollToSection('contact') }
    ],
    'Informações': [
      { name: 'Agendamento', action: () => scrollToSection('contact') },
      { name: 'Horários de Funcionamento', action: () => scrollToSection('contact') },
      { name: 'Localização', action: () => scrollToSection('contact') },
      { name: 'Política de Privacidade', action: () => {} }
    ]
  }

  const contactInfo = [
    {
      icon: Phone,
      text: 'Entre em contato conosco',
      subtext: 'Atendimento personalizado'
    },
    {
      icon: Mail,
      text: 'Envie sua mensagem',
      subtext: 'Resposta em até 24h'
    },
    {
      icon: Clock,
      text: 'Seg-Sex: 8h às 18h',
      subtext: 'Sáb: 8h às 12h'
    },
    {
      icon: MapPin,
      text: 'Atendimento de qualidade',
      subtext: 'Ambiente acolhedor'
    }
  ]

  const features = [
    { icon: Heart, text: 'Atendimento Humanizado' },
    { icon: Shield, text: 'Segurança e Confiança' },
    { icon: Award, text: 'Excelência Médica' },
    { icon: Users, text: 'Equipe Especializada' }
  ]

  return (
    <footer className="bg-primary-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/sbrunobruno/sbrunobruno-logo-full-2025-08-12T01-27-33-261Z.svg"
                alt="sbrunobruno"
                className="h-16 w-auto filter brightness-0 invert"
              />
            </motion.div>
            
            <p className="text-primary-200 leading-relaxed mb-6">
              Transformando cuidados médicos em experiências humanas. 
              Cuidando da sua saúde com dedicação e excelência.
            </p>

            {/* Features */}
            <div className="space-y-3">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 text-primary-200"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <IconComponent className="w-4 h-4 text-accent-400" />
                    <span className="text-sm">{feature.text}</span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-6 text-accent-300">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  >
                    <button
                      onClick={link.id ? () => scrollToSection(link.id) : link.action}
                      className="text-primary-200 hover:text-accent-300 transition-colors duration-300 text-left block"
                    >
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6 text-accent-300">Contato</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <motion.div
                      className="bg-accent-600 rounded-full p-2 mt-1"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent className="w-4 h-4 text-white" />
                    </motion.div>
                    <div>
                      <p className="text-primary-200 font-medium">{info.text}</p>
                      <p className="text-primary-300 text-sm">{info.subtext}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Call to Action Section */}
      <motion.div
        className="bg-primary-800 py-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container-custom text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-4 text-accent-300">
              Pronto para Cuidar da Sua Saúde?
            </h3>
            <p className="text-xl text-primary-200 mb-8">
              Entre em contato conosco e agende sua consulta. Estamos aqui para cuidar de você.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className="w-5 h-5" />
                <span>Agendar Consulta</span>
              </motion.button>
              
              <motion.button
                onClick={() => scrollToSection('about')}
                className="border-2 border-accent-400 text-accent-400 hover:bg-accent-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Conheça Nossa História
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Footer */}
      <motion.div
        className="bg-primary-950 py-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              className="text-primary-300 text-sm mb-4 md:mb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              © 2024 sbrunobruno. Todos os direitos reservados.
            </motion.div>
            
            <motion.div
              className="flex items-center space-x-2 text-primary-300 text-sm"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span>Criado com</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-accent-400" />
              </motion.div>
              <a 
                href="https://papum.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent-400 hover:text-accent-300 transition-colors"
              >
                Papum
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}