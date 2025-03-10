import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/60" />
      
      <motion.div 
        className="relative z-10 text-center max-w-4xl px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          The Future of Cybersecurity & Development
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Affordable, Scalable, and AI-Powered Security Operations for Startups and Enterprises
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-cyan-400 text-black px-8 py-3 rounded-md text-lg font-semibold hover:bg-cyan-500 transition-colors duration-200">
            Start Free Trial
          </button>
          <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-md text-lg font-semibold hover:bg-cyan-400 hover:text-black transition-colors duration-200">
            Learn More
          </button>
        </div>
      </motion.div>
    </section>
  )
}
