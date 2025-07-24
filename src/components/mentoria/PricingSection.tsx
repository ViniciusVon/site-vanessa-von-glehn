import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type PricingSectionProps = {
  onBuy: () => void;
};

export function PricingSection({ onBuy }: PricingSectionProps) {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8">
      <Card className="bg-transparent border-none shadow-none">
        <CardContent className="text-center py-12">
          <CardHeader>
            <CardTitle className="text-4xl font-bold mb-2">
              Invista em você
            </CardTitle>
            <CardDescription className="text-xl">
              Parcelamento em até 5x sem juros
            </CardDescription>
          </CardHeader>
          <p className="text-2xl mb-6">R$ 499,00 à vista ou 5x de R$ 105,00</p>
          <Button
            size="lg"
            onClick={onBuy}
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            Quero Assinar Agora
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
