import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import type { EmblaOptionsType } from 'embla-carousel';
import Autoplay from "embla-carousel-autoplay";
import ProjetosSection from '@/components/ProjetosSection';

// Importacao das imagens de projetos
import ambiente1 from '../assets/images/Projects/Ambiente1_angulo2.jpg';
import Ambiente1_angulo4 from '../assets/images/Projects/Ambiente1_angulo4.jpg';
import mostra_lider from '../assets/images/Projects/mostra_lider.jpg';
import Moda_antiga from '../assets/images/Projects/Moda_antiga.jpg';
import decor_year_book from '../assets/images/Projects/decor_year_book.jpg';
import ambiente5_angulo2 from '../assets/images/Projects/ambiente5_angulo2.jpg';
import casacor_jardins_fonte from '../assets/images/Projects/casacor_jardins_fonte.jpg';
import casacor_jardins_titulo from '../assets/images/Projects/casacor_jardins_titulo.jpg';

// Importacao das imagens profissionais
import LookingShowingInterest from '../assets/images/Professional/LookingShowingInterest.jpg';

export default function Projetos() {
  const emblaOptions: EmblaOptionsType = { loop: true };

  const projectImages = [ambiente1, 
    mostra_lider, 
    Moda_antiga, 
    decor_year_book, 
    ambiente5_angulo2, 
    casacor_jardins_fonte, 
    casacor_jardins_titulo, 
    Ambiente1_angulo4
  ]
    .sort(() => Math.random() - 0.5);
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
      >
        <CarouselContent>
          {projectImages.map((src, index) => (
            <CarouselItem key={index}>
              <img
                src={src}
                alt={`Projeto Arquiteta Vanessa ${index}`}
                style={{
                  width: '100%',
                  maxHeight: '750px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  display: 'block',
                  margin: '0 auto',
                }}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Nova seção de Projetos */}
      <ProjetosSection />

      {/* Seção: Filosofia e Propósito */}
      <section className="w-full py-16 bg-[var(--muted)]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          {/* Imagem */}
          <div>
            <img
              src={LookingShowingInterest}
              alt="Filosofia da arquiteta"
              className="rounded-lg shadow-lg w-full object-cover max-h-[700px]"
            />
          </div>

          {/* Texto */}
          <div>
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">Filosofia</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Acredito que a arquitetura deve emocionar, proteger e provocar. A estética por si só não basta — o espaço precisa dialogar com a alma.
              Por isso, utilizo a <span className="font-semibold text-indigo-600">neuroarquitetura</span> como pilar dos meus projetos, explorando como o ambiente impacta diretamente nossas emoções, bem-estar e comportamento.
            </p>
            <blockquote className="border-l-4 border-[var(--border)] pl-4 italic text-[var(--muted-foreground)]">
              “Projetar é compreender como a luz, as formas e os vazios influenciam o sentir.”
            </blockquote>
          </div>
        </div>
      </section>

      {/* Seção: Conquistas */}
        <section className="w-full py-16 bg-[var(--background)]">
        <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-[var(--foreground)] mb-12">
            Minha Trajetória
            </h2>

            <div className="relative border-l-2 border-[var(--border)] pl-6">
            {/* Evento 1 */}
            <div className="mb-10">
                <div className="text-sm text-gray-500">2014</div>
                <h3 className="text-xl font-semibold text-[var(--foreground)]">Formação em Arquitetura e Urbanismo</h3>
                <p className="text-[var(--muted-foreground)]">
                Início de uma jornada profissional marcada por sensibilidade e técnica.
                </p>
            </div>

            {/* Evento 2 */}
            <div className="mb-10">
                <div className="text-sm text-gray-500">2017</div>
                <h3 className="text-xl font-semibold text-[var(--foreground)]">Primeiro Projeto Residencial</h3>
                <p className="text-[var(--muted-foreground)]">
                Um projeto que uniu funcionalidade e emoção, transformando a vivência de uma família inteira.
                </p>
            </div>

            {/* Evento 3 */}
            <div className="mb-10">
                <div className="text-sm text-gray-500">2019</div>
                <h3 className="text-xl font-semibold text-[var(--foreground)]">Especialização em Neuroarquitetura</h3>
                <p className="text-[var(--muted-foreground)]">
                Aprofundamento em como ambientes impactam o cérebro humano — base para todos os projetos desde então.
                </p>
            </div>

            {/* Evento 4 */}
            <div className="mb-10">
                <div className="text-sm text-gray-500">2021</div>
                <h3 className="text-xl font-semibold text-[var(--foreground)]">Prêmio Destaque em Design Humanizado</h3>
                <p className="text-[var(--muted-foreground)]">
                Reconhecimento por criar espaços que acolhem, inspiram e transformam a experiência cotidiana.
                </p>
            </div>

            {/* Evento 5 */}
            <div>
                <div className="text-sm text-gray-500">2023</div>
                <h3 className="text-xl font-semibold text-[var(--foreground)]">Criação do Estúdio próprio</h3>
                <p className="text-[var(--muted-foreground)]">
                Um sonho realizado: um espaço para unir arquitetura, arte e poesia em cada detalhe.
                </p>
            </div>
            </div>
        </div>
        </section>
    </>
  );
}
