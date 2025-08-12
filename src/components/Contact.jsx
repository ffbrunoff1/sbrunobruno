import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import ReCAPTCHA from 'react-google-recaptcha'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Heart,
  CheckCircle,
  User,
  MessageSquare,
  Calendar
} from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const recaptchaRef = useRef(null)

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      info: 'Entre em contato conosco',
      detail: 'Horário de atendimento: 8h às 18h',
      action: 'Ligar agora'
    },
    {
      icon: Mail,
      title: 'E-mail',
      info: 'Envie sua mensagem',
      detail: 'Resposta em até 24 horas',
      action: 'Enviar e-mail'
    },
    {
      icon: Clock,
      title: 'Horário de Funcionamento',
      info: 'Segunda a Sexta: 8h às 18h',
      detail: 'Sábado: 8h às 12h',
      action: 'Ver agenda'
    },
    {
      icon: MapPin,
      title: 'Localização',
      info: 'Atendimento personalizado',
      detail: 'Ambiente acolhedor e moderno',
      action: 'Como chegar'
    }
  ]

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const token = await recaptchaRef.current.executeAsync()
      
      const response = await fetch('https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          token,
          recipientEmail: ''
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
        recaptchaRef.current.reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-50 to-white">
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
            <Heart className="w-5 h-5" />
            <span className="font-medium">Entre em Contato</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Agende Sua Consulta
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estamos aqui para cuidar de você. Entre em contato conosco e agende sua consulta. 
            Nossa equipe está pronta para oferecer o melhor atendimento médico.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-2xl p-8 medical-shadow"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary-800 mb-4">Envie sua Mensagem</h3>
              <p className="text-gray-600">Preencha o formulário e entraremos em contato em breve.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="Seu nome completo"
                />
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="seu@email.com"
                />
              </motion.div>

              {/* Phone Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="(00) 00000-0000"
                />
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-vertical"
                  placeholder="Descreva como podemos ajudá-lo..."
                />
              </motion.div>

              {/* reCAPTCHA */}
              <div className="mt-4 flex justify-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  size="invisible"
                  sitekey="6Lc7xpsrAAAAAKh0I1boee2JN1oO8iF_yd0ihl79"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <span>Enviar Mensagem</span>
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-2 text-green-700"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Mensagem enviada com sucesso! Entraremos em contato em breve.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-2 text-red-700"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span>Erro ao enviar mensagem. Tente novamente.</span>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-primary-800 mb-6">Informações de Contato</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Nossa equipe está sempre disponível para atendê-lo. Escolha a forma de contato 
                que for mais conveniente para você.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl p-6 card-hover medical-shadow border border-gray-100"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start space-x-4">
                      <motion.div
                        className="bg-primary-100 rounded-full p-3"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <IconComponent className="w-6 h-6 text-primary-600" />
                      </motion.div>
                      
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-primary-800 mb-2">{info.title}</h4>
                        <p className="text-gray-600 mb-1">{info.info}</p>
                        <p className="text-sm text-gray-500 mb-3">{info.detail}</p>
                        <button className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors">
                          {info.action} →
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Emergency Contact */}
            <motion.div
              className="bg-accent-50 border border-accent-200 rounded-xl p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="w-6 h-6 text-accent-600" />
                <h4 className="text-lg font-bold text-accent-800">Agendamento Rápido</h4>
              </div>
              <p className="text-accent-700 mb-4">
                Para agendamentos urgentes ou dúvidas importantes, entre em contato diretamente.
              </p>
              <button className="bg-accent-600 hover:bg-accent-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                Contato Direto
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}