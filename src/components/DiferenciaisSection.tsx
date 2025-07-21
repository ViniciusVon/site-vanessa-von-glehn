import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

interface Diferencial {
  id: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const diferenciais: Diferencial[] = [
  {
    id: 1,
    title: 'Experiência Reconhecida',
    description:
      'Mais de 10 anos entregando projetos de alta qualidade e elegância.',
    icon: <CheckCircle className="w-6 h-6 text-primary" />,
  },
  {
    id: 2,
    title: 'Soluções Personalizadas',
    description:
      'Cada projeto é adaptado ao estilo e necessidades únicas do cliente.',
    icon: <CheckCircle className="w-6 h-6 text-primary" />,
  },
  {
    id: 3,
    title: 'Sustentabilidade',
    description:
      'Uso de materiais eco-friendly e práticas sustentáveis em todas as fases.',
    icon: <CheckCircle className="w-6 h-6 text-primary" />,
  },
];

export default function DiferenciaisSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 mt-16">
      <h2 className="text-3xl font-bold text-center text-[var(--foreground)] mb-6">
        Por que escolher a Vanessa?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {diferenciais.map(({ id, title, description, icon }) => (
          <Card
            key={id}
            className="p-6 shadow-lg hover:shadow-xl transition-shadow rounded-lg"
          >
            <div className="flex items-center mb-4">
              {icon}
              <h3 className="ml-3 text-xl font-semibold text-[var(--foreground)]">
                {title}
              </h3>
            </div>
            <CardContent className="text-muted-foreground">
              {description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
