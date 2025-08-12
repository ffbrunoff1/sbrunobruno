import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Shield, Star, Users, ArrowRight, CheckCircle } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const features = [
    { icon: Heart, text: 'Atendimento Humanizado' },
    { icon: Shield, text: 'Segurança e Confiança' },
    { icon: Star, text: 'Excelência em Cuidados' },
    { icon: Users, text: 'Equipe Especializada' }
  ]

  const benefits = [
    'Consultas personalizadas e detalhadas',
    'Ambiente acolhedor e moderno',
    'Tecnologia de ponta em diagnósticos',
    'Acompanhamento contínuo da sua saúde'
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-medical-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern"></div>
      
      {/* Floating Medical Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 text-white/10"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Heart className="w-16 h-16" />
        </motion.div>
        
        <motion.div
          className="absolute top-40 right-20 text-white/10"
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <Shield className="w-12 h-12" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-40 left-20 text-white/10"
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        >
          <Star className="w-14 h-14" />
        </motion.div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Heart className="w-5 h-5" />
              <span className="text-sm font-medium">Transformando Cuidados Médicos</span>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-7xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="block">Bem-vindo à</span>
              <span className="block bg-gradient-to-r from-accent-200 to-white bg-clip-text text-transparent">
                sbrunobruno
              </span>
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transformando cuidados médicos em experiências humanas. 
              <span className="block mt-2 font-semibold text-accent-200">
                Cuidando da sua saúde com dedicação e excelência.
              </span>
            </motion.p>

            {/* Benefits List */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 text-white/90"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-accent-300 flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="bg-white text-primary-700 font-bold py-4 px-8 rounded-lg hover:bg-accent-50 transition-all duration-300 flex items-center justify-center space-x-2 group medical-shadow"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Entre em Contato Conosco</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                onClick={() => scrollToSection('about')}
                className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-primary-700 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Conheça Nossa História
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Features */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white card-hover"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                  >
                    <motion.div
                      className="bg-accent-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="font-semibold text-lg">{feature.text}</h3>
                  </motion.div>
                )
              })}
            </div>

            {/* Trust Indicators */}
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <motion.div
                    className="text-3xl font-bold text-accent-300"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                  >
                    100%
                  </motion.div>
                  <div className="text-sm opacity-90">Dedicação</div>
                </div>
                <div>
                  <motion.div
                    className="text-3xl font-bold text-accent-300"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.5 }}
                  >
                    24/7
                  </motion.div>
                  <div className="text-sm opacity-90">Suporte</div>
                </div>
                <div>
                  <motion.div
                    className="text-3xl font-bold text-accent-300"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.6 }}
                  >
                    ∞
                  </motion.div>
                  <div className="text-sm opacity-90">Cuidado</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}