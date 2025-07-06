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
            Arquiteta e poetisa, traduzo sentimentos em formas, espaços e atmosferas. Cada linha traçada no papel carrega a poesia de um lugar onde o ser humano se sente pertencente e acolhido.  
            Minha essência está na criação de ambientes que vão além da estética — que tocam, conectam e curam.
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
              alt="Filosofia da arquiteta"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>

          {/* Texto */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Filosofia</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Acredito que a arquitetura deve emocionar, proteger e provocar. A estética por si só não basta — o espaço precisa dialogar com a alma.
              Por isso, utilizo a <span className="font-semibold text-indigo-600">neuroarquitetura</span> como pilar dos meus projetos, explorando como o ambiente impacta diretamente nossas emoções, bem-estar e comportamento.
            </p>
            <blockquote className="border-l-4 border-indigo-600 pl-4 italic text-gray-600">
              “Projetar é compreender como a luz, as formas e os vazios influenciam o sentir.”
            </blockquote>
          </div>
        </div>
      </section>

      {/* Seção: Conquistas */}
        <section className="w-full py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Minha Trajetória
            </h2>

            <div className="relative border-l-2 border-indigo-600 pl-6">
            {/* Evento 1 */}
            <div className="mb-10">
                <div className="text-sm text-gray-500">2014</div>
                <h3 className="text-xl font-semibold text-gray-800">Formação em Arquitetura e Urbanismo</h3>
                <p className="text-gray-600">
                Início de uma jornada profissional marcada por sensibilidade e técnica.
                </p>
            </div>

            {/* Evento 2 */}
            <div className="mb-10">
                <div className="text-sm text-gray-500">2017</div>
                <h3 className="text-xl font-semibold text-gray-800">Primeiro Projeto Residencial</h3>
                <p className="text-gray-600">
                Um projeto que uniu funcionalidade e emoção, transformando a vivência de uma família inteira.
                </p>
            </div>

            {/* Evento 3 */}
            <div className="mb-10">
                <div className="text-sm text-gray-500">2019</div>
                <h3 className="text-xl font-semibold text-gray-800">Especialização em Neuroarquitetura</h3>
                <p className="text-gray-600">
                Aprofundamento em como ambientes impactam o cérebro humano — base para todos os projetos desde então.
                </p>
            </div>

            {/* Evento 4 */}
            <div className="mb-10">
                <div className="text-sm text-gray-500">2021</div>
                <h3 className="text-xl font-semibold text-gray-800">Prêmio Destaque em Design Humanizado</h3>
                <p className="text-gray-600">
                Reconhecimento por criar espaços que acolhem, inspiram e transformam a experiência cotidiana.
                </p>
            </div>

            {/* Evento 5 */}
            <div>
                <div className="text-sm text-gray-500">2023</div>
                <h3 className="text-xl font-semibold text-gray-800">Criação do Estúdio próprio</h3>
                <p className="text-gray-600">
                Um sonho realizado: um espaço para unir arquitetura, arte e poesia em cada detalhe.
                </p>
            </div>
            </div>
        </div>
        </section>

    </>
  );
}
