import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import type { EmblaOptionsType } from 'embla-carousel';
import Autoplay from "embla-carousel-autoplay";
import { Link } from 'react-router-dom';

export default function Home() {
  const emblaOptions: EmblaOptionsType = { loop: true };

  return (
    <>
      {/* Carrossel */}
      <Carousel
        opts={emblaOptions}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
          }),
        ]}
        style={{ marginTop: "1em" }}
      >
        <CarouselContent>
          {[1, 2, 3, 4, 5].map((item) => (
            <CarouselItem key={item}>
              <img
                src={`https://picsum.photos/1200/400?random=${item}`}
                alt={`Imagem aleatória ${item}`}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Seção: Sobre Mim */}
      <section className="w-full py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Sobre Mim</h2>
          <p className="text-lg text-gray-600 mb-6">
            Arquiteto apaixonado por transformar espaços em experiências. Com anos de dedicação ao design funcional e estético,
            meu trabalho busca equilibrar inovação, conforto e propósito.
          </p>
          <Link to="/sobre">
            <Button>Saiba Mais</Button>
          </Link>
        </div>
      </section>

      {/* Seção: Filosofia e Propósito */}
      <section className="w-full py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          {/* Imagem */}
          <div>
            <img
              src="https://picsum.photos/600/400?grayscale&blur=1"
              alt="Filosofia do arquiteto"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>

          {/* Texto */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Filosofia & Propósito</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Acredito que arquitetura é mais do que construir — é **criar significado**. Cada projeto é uma extensão da identidade
              de quem o habita, e meu propósito é interpretar essas histórias com sensibilidade e precisão. Sustentabilidade, estética
              e funcionalidade caminham juntas em tudo que faço.
            </p>
          </div>
        </div>
      </section>

      {/* Botão extra (se quiser manter) */}
      <div className="mt-8 text-center">
        <Button>Clique em Mim</Button>
      </div>
    </>
  );
}
