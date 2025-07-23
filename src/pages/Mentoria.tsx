import { useState, useEffect } from "react";
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { CheckCircle, Users, Star, Clock } from 'lucide-react';
import { toast, Toaster } from 'sonner';

export default function Mentoria() {
  const features = [
    { icon: CheckCircle, label: "Acompanhamento personalizado" },
    { icon: Users, label: "Networking e comunidade exclusiva" },
    { icon: Star, label: "Feedback contínuo e avaliação" },
    { icon: Clock, label: "Sessões ao vivo e gravadas" },
    { icon: CheckCircle, label: "Planos de ação práticos" },
  ];

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
      answer: 'As aulas são transmitidas ao vivo e ficam gravadas para revisão ilimitada.',
    },
    {
      question: 'Qual o suporte entre as sessões?',
      answer: 'Você tem acesso a um grupo exclusivo e suporte por e-mail.',
    },
  ];

  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 5);
    const interval = setInterval(() => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();
      if (diff < 0) return clearInterval(interval);
      setCountdown({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  async function handleBuy() {
    try {
      //const res = await fetch('/api/mercadopago', { method: 'POST' });
      //const { init_point } = await res.json();
      //window.location.href = init_point;
      window.location.href = 'https://mpago.la/2iSQEfH';
    } catch (error) {
      console.error(error);
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

      <main className="max-w-5xl mx-auto p-8 space-y-16">
        {/* Hero */}
        <section className="text-center space-y-4">
          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Mentoria Premium com Vanessa von Glehn
          </h1>
          <Card className="inline-block mt-4">
            <CardContent>
              <CardDescription>Transforme sua carreira em 90 dias com plano de ação estratégico.</CardDescription>
            </CardContent>
          </Card>
        </section>

        {/* Features & Countdown */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">O que você vai conquistar</h2>
            <ul className="space-y-4">
              {features.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 text-lg">
                  <Icon className="w-6 h-6 text-green-500" />
                  {label}
                  <Badge variant="secondary" className="ml-auto">Top</Badge>
                </li>
              ))}
            </ul>
          </div>
          <Card>
            <CardHeader className="text-center">
              <CardTitle>Vagas restantes</CardTitle>
              <CardDescription>Oferta expira em:</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center gap-8 font-mono text-2xl">
              <div>
                <div className="text-5xl">{countdown.days}</div>
                dias
              </div>
              <div>
                <div className="text-5xl">{countdown.hours}</div>
                h
              </div>
              <div>
                <div className="text-5xl">{countdown.minutes}</div>
                m
              </div>
              <div>
                <div className="text-5xl">{countdown.seconds}</div>
                s
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Testimonials */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Depoimentos</h2>
          <Tabs defaultValue="alice">
            <TabsList className="justify-center">
              {testimonials.map((t) => (
                <TabsTrigger key={t.author} value={t.author.toLowerCase()}>
                  {t.author}
                </TabsTrigger>
              ))}
            </TabsList>
            {testimonials.map((t) => (
              <TabsContent key={t.author} value={t.author.toLowerCase()}>
                <Card>
                  <CardContent>
                    <p className="italic mb-4">“{t.text}”</p>
                    <CardDescription className="text-right">— {t.author}</CardDescription>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        {/* Pricing & CTA */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="text-center py-12">
            <CardHeader>
              <CardTitle className="text-4xl font-bold mb-2">Invista em você</CardTitle>
              <CardDescription className="text-xl">Parcelamento em até 5x sem juros</CardDescription>
            </CardHeader>
            <p className="text-2xl mb-6">R$ 499,00 à vista ou 5x de R$ 105,00</p>
            <Button size="lg" onClick={handleBuy} className="bg-white text-blue-600 hover:bg-gray-100">
              Quero Assinar Agora
            </Button>
          </CardContent>
        </Card>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Perguntas Frequentes</h2>
          <Accordion type="multiple" className="space-y-4">
            {faq.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>
    </>
  );
}