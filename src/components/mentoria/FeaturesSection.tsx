import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { CheckCircle, Users, Star, Clock } from 'lucide-react';
import type { Countdown } from './types';

type FeaturesSectionProps = {
  countdown: Countdown;
};

export function FeaturesSection({ countdown }: FeaturesSectionProps) {
  const features = [
    { icon: CheckCircle, label: 'Acompanhamento personalizado' },
    { icon: Users, label: 'Networking e comunidade exclusiva' },
    { icon: Star, label: 'Feedback contínuo e avaliação' },
    { icon: Clock, label: 'Sessões ao vivo e gravadas' },
    { icon: CheckCircle, label: 'Planos de ação práticos' },
  ];

  return (
    <section className="grid lg:grid-cols-2 gap-12 items-center bg-blue-50 p-8 rounded-xl">
      <div>
        <h2 className="text-3xl font-bold mb-6">O que você vai conquistar</h2>
        <ul className="space-y-4">
          {features.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3 text-lg">
              <Icon className="w-6 h-6 text-green-500" />
              {label}
              <Badge variant="secondary" className="ml-auto">
                Top
              </Badge>
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
            <div className="text-5xl">{countdown.days}</div>dias
          </div>
          <div>
            <div className="text-5xl">{countdown.hours}</div>h
          </div>
          <div>
            <div className="text-5xl">{countdown.minutes}</div>m
          </div>
          <div>
            <div className="text-5xl">{countdown.seconds}</div>s
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
