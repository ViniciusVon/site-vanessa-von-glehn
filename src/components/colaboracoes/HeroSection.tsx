// components/collaborations/HeroSection.tsx
import { motion } from 'framer-motion';
export function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-16 px-6">
      <div className="space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Descubra sua colaboração perfeita
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-600"
        >
          Conecte-se com profissionais e encontre projetos incríveis para
          crescer junto.
        </motion.p>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          Ver Colaborações
        </motion.button>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="flex justify-center"
      >
        <img
          src="https://source.unsplash.com/600x600/?team,work"
          alt="Mockup colaborações"
          className="rounded-3xl shadow-lg object-cover w-full max-w-md"
        />
      </motion.div>
    </section>
  );
}
