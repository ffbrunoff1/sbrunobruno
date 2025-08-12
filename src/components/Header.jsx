import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Heart, Phone, Mail } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { name: 'Início', id: 'hero' },
    { name: 'Sobre', id: 'about' },
    { name: 'Serviços', id: 'services' },
    { name: 'Contato', id: 'contact' }
  ]

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20 px-4">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/sbrunobruno/sbrunobruno-logo-full-2025-08-12T01-27-33-261Z.svg"
                alt="sbrunobruno"
                className={`h-12 w-auto transition-all duration-300 ${
                  isScrolled ? 'filter-none' : 'brightness-0 invert'
                }`}
              />
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-all duration-300 hover:scale-105 ${
                    isScrolled 
                      ? 'text-primary-800 hover:text-primary-600' 
                      : 'text-white hover:text-primary-200'
                  }`}
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </nav>

            {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <motion.div
                className={`flex items-center space-x-4 ${
                  isScrolled ? 'text-primary-700' : 'text-white'
                }`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-center space-x-2 text-sm">
                  <Heart className="w-4 h-4" />
                  <span className="font-medium">Cuidando de Você</span>
                </div>
              </motion.div>
              
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Agendar Consulta
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-primary-800' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-primary-800' : 'text-white'}`} />
              )}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
            
            <motion.div
              className="absolute top-0 right-0 w-80 h-full bg-white shadow-xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="p-6 pt-24">
                <nav className="space-y-6">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left text-lg font-medium text-primary-800 hover:text-primary-600 transition-colors py-3 border-b border-gray-100"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </nav>

                <motion.div
                  className="mt-8 space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="w-full btn-primary"
                  >
                    Agendar Consulta
                  </button>
                  
                  <div className="flex items-center justify-center space-x-2 text-primary-600">
                    <Heart className="w-5 h-5" />
                    <span className="text-sm font-medium">Cuidando de Você</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}