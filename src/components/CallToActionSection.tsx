import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import SmillingBlack from '@/assets/images/Professional/SmillingBlack.jpg';

export default function CallToActionSection() {
  return (
    <Card className="max-w-6xl mx-auto mt-16 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-2xl overflow-hidden">
      <CardContent className="p-0 flex flex-col md:flex-row">
        {/* Imagem do lado esquerdo */}
        <div className="md:w-1/2 w-full p-4 md:p-6 rounded-2xl overflow-hidden">
          <AspectRatio ratio={4 / 3}>
            <img
              src={SmillingBlack}
              alt="Imagem profissional"
              className="object-cover w-full h-full rounded-2xl"
              style={{ objectPosition: 'top center' }}
            />
          </AspectRatio>
        </div>

        {/* Texto do lado direito */}
        <div className="md:w-1/2 w-full px-6 py-12 flex flex-col justify-center text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">
            Quer transformar seu espaço?
          </h2>

          <p className="text-lg mb-6">
            Entre em contato para uma consulta personalizada e gratuita.
          </p>

          <Separator className="my-8 bg-[var(--primary-foreground)/20]" />

          <Button
            variant="secondary"
            size="lg"
            className="text-base font-semibold px-8 py-4 self-center md:self-start"
            asChild
          >
            <a href="/contato">Fale com a Vanessa</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
