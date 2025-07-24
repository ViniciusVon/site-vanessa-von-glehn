import { useEffect, useRef, useState } from 'react';
import { Toaster, toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { HeroSection } from '@/components/mentoria/HeroSection';
import { FeaturesSection } from '@/components/mentoria/FeaturesSection';
import { TestimonialsSection } from '@/components/mentoria/TestimonialsSection';
import { PricingSection } from '@/components/mentoria/PricingSection';
import { FAQSection } from '@/components/mentoria/FAQSection';

export default function Mentoria() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const targetRef = useRef<Date | null>(null);

  const testimonials = [
    {
      author: 'Alice Souza',
      text: 'A mentoria da Vanessa foi transformadora — alcancei minhas metas em metade do tempo!',
    },
    {
      author: 'Bruno Lima',
      text: 'Conteúdo top e suporte direto. Meus projetos decolaram!',
    },
  ];

  const faq = [
    {
      question: 'Como funcionam as sessões ao vivo?',
      answer:
        'As aulas são transmitidas ao vivo e ficam gravadas para revisão ilimitada.',
    },
    {
      question: 'Qual o suporte entre as sessões?',
      answer: 'Você tem acesso a um grupo exclusivo e suporte por e-mail.',
    },
  ];

  useEffect(() => {
    if (!targetRef.current) {
      const target = new Date();
      target.setDate(target.getDate() + 5);
      targetRef.current = target;
    }

    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetRef.current!.getTime() - now.getTime();
      if (diff < 0) return clearInterval(interval);

      setCountdown({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function handleBuy() {
    try {
      window.location.href = 'https://mpago.la/2iSQEfH';
    } catch {
      toast.error('Erro ao iniciar pagamento. Tente novamente.');
    }
  }

  return (
    <>
      <Toaster position="top-center" />
      <div className="fixed bottom-6 right-6 z-50">
        <Button onClick={handleBuy} className="bg-green-600 hover:bg-green-700">
          Garanta sua vaga
        </Button>
      </div>

      {/* Container full width com fundo cinza escuro para Hero */}
      <div className="w-full bg-gray-900">
        <main className="max-w-5xl mx-auto p-8 space-y-16">
          <HeroSection />
        </main>
      </div>

      {/* Fundo dourado para FeaturesSection */}
      <div className="w-full bg-yellow-500">
        <main className="max-w-5xl mx-auto p-8 space-y-16">
          <FeaturesSection countdown={countdown} />
        </main>
      </div>

      {/* Fundo cinza escuro para Testimonials */}
      <div className="w-full bg-gray-900">
        <main className="max-w-5xl mx-auto p-8 space-y-16">
          <TestimonialsSection testimonials={testimonials} />
        </main>
      </div>

      {/* Fundo dourado para Pricing */}
      <div className="w-full bg-yellow-500">
        <main className="max-w-5xl mx-auto p-8 space-y-16">
          <PricingSection onBuy={handleBuy} />
        </main>
      </div>

      {/* Fundo cinza escuro para FAQ */}
      <div className="w-full bg-gray-900">
        <main className="max-w-5xl mx-auto p-8 space-y-16">
          <FAQSection faq={faq} />
        </main>
      </div>
    </>
  );
}
