import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import type { EmblaOptionsType } from 'embla-carousel';
import Autoplay from "embla-carousel-autoplay";

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
                    borderRadius: '8px'
                  }}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Botão */}
        <div style={{ marginTop: "1rem", textAlign: "center" }}>
          <Button>Clique em Mim</Button>
        </div>
    </>
  );
}