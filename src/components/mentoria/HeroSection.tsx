import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import LookingShowingInterest from '../../assets/images/Professional/LookingShowingInterest.jpg';

export function HeroSection() {
  return (
    <section className="bg-gray-900 py-16 px-6 md:px-12 rounded-xl">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Conteúdo à esquerda */}
        <div className="text-center md:text-left space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent leading-tight"
          >
            Mentoria Premium <br className="hidden md:inline" /> com Vanessa von
            Glehn
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-xl"
          >
            Transforme sua carreira em 90 dias com um plano de ação estratégico
            e acompanhamento exclusivo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Button className="px-8 py-4 text-lg bg-yellow-500 text-gray-900 hover:bg-yellow-600 hover:text-white transition">
              Quero me inscrever
            </Button>
          </motion.div>
        </div>

        {/* Imagem à direita */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src={LookingShowingInterest}
            alt="Mockup aleatório"
            width={500}
            height={500}
            className="rounded-xl shadow-xl object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
