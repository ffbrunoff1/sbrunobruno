import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Award, Users, Target, CheckCircle, Stethoscope, Brain, Shield } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Humanização',
      description: 'Colocamos o paciente no centro de tudo, tratando cada pessoa com carinho, respeito e atenção individualizada.'
    },
    {
      icon: Award,
      title: 'Excelência',
      description: 'Buscamos constantemente a melhoria contínua em nossos processos, tratamentos e atendimento.'
    },
    {
      icon: Shield,
      title: 'Confiança',
      description: 'Construímos relacionamentos duradouros baseados na transparência, ética e responsabilidade.'
    },
    {
      icon: Target,
      title: 'Inovação',
      description: 'Utilizamos tecnologias avançadas e métodos inovadores para oferecer os melhores resultados.'
    }
  ]

  const features = [
    'Atendimento personalizado e humanizado',
    'Tecnologia de última geração',
    'Equipe multidisciplinar especializada',
    'Ambiente acolhedor e moderno',
    'Protocolos de segurança rigorosos',
    'Acompanhamento contínuo do paciente'
  ]

  const stats = [
    { number: '10+', label: 'Anos de Experiência', icon: Award },
    { number: '1000+', label: 'Pacientes Atendidos', icon: Users },
    { number: '95%', label: 'Satisfação dos Pacientes', icon: Heart },
    { number: '24/7', label: 'Suporte Disponível', icon: Shield }
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-white">
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
            <span className="font-medium">Sobre a sbrunobruno</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Transformando Cuidados em Experiências
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Na sbrunobruno, acreditamos que cada paciente merece um atendimento excepcional. 
            Nossa missão é transformar cuidados médicos em experiências verdadeiramente humanas, 
            combinando expertise técnica com carinho genuíno.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="text-3xl font-bold text-primary-800 mb-6">
                Nossa Filosofia de Cuidado
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Entendemos que cada pessoa é única, com necessidades específicas e histórias particulares. 
                Por isso, desenvolvemos um modelo de atendimento que vai além do diagnóstico e tratamento, 
                focando no bem-estar integral do paciente.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nossa abordagem humanizada significa ouvir atentamente, compreender profundamente e 
                cuidar de forma genuína, criando um ambiente de confiança e segurança para todos.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-primary-100 rounded-full p-1">
                    <CheckCircle className="w-5 h-5 text-primary-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Visual Element */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative bg-medical-gradient rounded-2xl p-8 text-white medical-shadow">
              <motion.div
                className="absolute -top-4 -right-4 bg-accent-400 rounded-full p-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <Brain className="w-8 h-8 text-white" />
              </motion.div>
              
              <h4 className="text-2xl font-bold mb-6">Nossa Missão</h4>
              <p className="text-lg leading-relaxed mb-6">
                "Cuidar da sua saúde com dedicação e excelência, transformando cada consulta 
                em uma experiência de cuidado verdadeiramente humana."
              </p>
              
              <div className="border-t border-white/20 pt-6">
                <p className="text-accent-200 font-semibold">
                  Comprometidos com o seu bem-estar integral
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold gradient-text mb-4">Nossos Valores</h3>
            <p className="text-lg text-gray-600">Os pilares que guiam nosso trabalho diário</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center card-hover medical-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="w-8 h-8 text-primary-600" />
                  </motion.div>
                  
                  <h4 className="text-xl font-bold text-primary-800 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="bg-primary-800 rounded-2xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Números que Falam por Si</h3>
            <p className="text-xl text-primary-200">Resultados que demonstram nosso compromisso</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <motion.div
                    className="bg-accent-400 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <motion.div
                    className="text-4xl font-bold text-white mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    {stat.number}
                  </motion.div>
                  
                  <div className="text-primary-200 font-medium">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}