import React from 'react'
import { motion } from 'framer-motion'
import { 
  Heart, 
  Brain, 
  Shield, 
  Clock, 
  Users, 
  Award,
  Stethoscope,
  Activity,
  Eye,
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

export default function Services() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const mainServices = [
    {
      icon: Heart,
      title: 'Consultas Especializadas',
      description: 'Atendimento médico personalizado com foco na sua saúde integral. Consultas detalhadas e humanizadas.',
      features: ['Anamnese completa', 'Exame físico detalhado', 'Plano terapêutico personalizado', 'Acompanhamento contínuo'],
      highlight: 'Mais Popular'
    },
    {
      icon: Brain,
      title: 'Diagnóstico Avançado',
      description: 'Tecnologia de ponta para diagnósticos precisos e tratamentos eficazes com resultados rápidos.',
      features: ['Equipamentos modernos', 'Análises laboratoriais', 'Laudos especializados', 'Segunda opinião médica'],
      highlight: null
    },
    {
      icon: Shield,
      title: 'Medicina Preventiva',
      description: 'Programas de prevenção e promoção da saúde para manter seu bem-estar em dia.',
      features: ['Check-ups regulares', 'Vacinação atualizada', 'Orientações de estilo de vida', 'Monitoramento de riscos'],
      highlight: 'Recomendado'
    }
  ]

  const additionalServices = [
    {
      icon: Clock,
      title: 'Atendimento de Urgência',
      description: 'Suporte médico quando você mais precisa, com agilidade e eficiência.'
    },
    {
      icon: Users,
      title: 'Medicina Familiar',
      description: 'Cuidados médicos para toda a família, do nascimento à terceira idade.'
    },
    {
      icon: Activity,
      title: 'Monitoramento Contínuo',
      description: 'Acompanhamento regular da sua saúde com tecnologia avançada.'
    },
    {
      icon: Eye,
      title: 'Exames Especializados',
      description: 'Ampla gama de exames diagnósticos com resultados precisos.'
    },
    {
      icon: Zap,
      title: 'Telemedicina',
      description: 'Consultas remotas seguras e convenientes quando necessário.'
    },
    {
      icon: Award,
      title: 'Segunda Opinião',
      description: 'Avaliação adicional para casos complexos e decisões importantes.'
    }
  ]

  const benefits = [
    'Agendamento flexível e conveniente',
    'Atendimento humanizado e personalizado',
    'Tecnologia de última geração',
    'Equipe médica altamente qualificada',
    'Ambiente acolhedor e moderno',
    'Acompanhamento pós-consulta'
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 rounded-full px-6 py-2 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Stethoscope className="w-5 h-5" />
            <span className="font-medium">Nossos Serviços</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Cuidados Médicos Completos
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma gama completa de serviços médicos com foco na humanização do atendimento 
            e na excelência técnica para cuidar da sua saúde de forma integral.
          </p>
        </motion.div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {mainServices.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                className="relative bg-white rounded-2xl p-8 card-hover medical-shadow border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Highlight Badge */}
                {service.highlight && (
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent-500 text-white px-4 py-1 rounded-full text-sm font-medium"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    {service.highlight}
                  </motion.div>
                )}

                {/* Icon */}
                <motion.div
                  className="bg-primary-100 rounded-full w-20 h-20 flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <IconComponent className="w-10 h-10 text-primary-600" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-primary-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 + featureIndex * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Agendar Consulta</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Services */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold gradient-text mb-4">Serviços Complementares</h3>
            <p className="text-lg text-gray-600">Uma gama completa de cuidados para sua saúde</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 card-hover border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, backgroundColor: '#f8fafc' }}
                >
                  <motion.div
                    className="bg-accent-100 rounded-full w-12 h-12 flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="w-6 h-6 text-accent-600" />
                  </motion.div>
                  
                  <h4 className="text-lg font-bold text-primary-800 mb-2">{service.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          className="bg-gradient-to-r from-primary-800 to-primary-600 rounded-2xl p-8 lg:p-12 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <motion.h3
                className="text-3xl font-bold mb-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Por que Escolher a sbrunobruno?
              </motion.h3>
              
              <motion.p
                className="text-xl text-primary-100 leading-relaxed mb-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Nossa abordagem única combina tecnologia avançada com o cuidado humano 
                que você merece, criando uma experiência médica verdadeiramente excepcional.
              </motion.p>

              <motion.button
                onClick={() => scrollToSection('contact')}
                className="bg-white text-primary-700 font-bold py-4 px-8 rounded-lg hover:bg-accent-50 transition-all duration-300 flex items-center space-x-2 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Entre em Contato Agora</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>

            {/* Right Content - Benefits */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <div className="bg-accent-400 rounded-full p-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg text-primary-100">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}