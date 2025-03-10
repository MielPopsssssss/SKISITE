import { Shield, Lock, Code, GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: <Shield className="w-12 h-12 text-cyan-400" />,
    title: 'SOCaaS',
    description: '24/7 Security Monitoring with AI-Powered Threat Detection',
    link: '#socaas'
  },
  {
    icon: <Lock className="w-12 h-12 text-cyan-400" />,
    title: 'Pentesting',
    description: 'Identify & Fix Security Gaps in Your Infrastructure',
    link: '#pentesting'
  },
  {
    icon: <Code className="w-12 h-12 text-cyan-400" />,
    title: 'Development',
    description: 'Secure Software Solutions with Security-First Approach',
    link: '#development'
  },
  {
    icon: <GraduationCap className="w-12 h-12 text-cyan-400" />,
    title: 'Student Program',
    description: 'Real-World Cybersecurity Training & Mentorship',
    link: '#student-program'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Core Services</h2>
          <p className="text-xl text-gray-400">Comprehensive Cybersecurity Solutions for Modern Businesses</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-colors duration-200"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <a href={service.link} className="text-cyan-400 hover:text-cyan-500 transition-colors duration-200">
                Learn More →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
