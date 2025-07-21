import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import type { EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import ProjetosSection from '@/components/ProjetosSection';
import { useEffect, useState } from 'react';

import ComentariosSection from '@/components/ComentariosSection';
import type { Comentario } from '@/components/ComentariosSection';

// Importacao das imagens de projetos
import ambiente1 from '../assets/images/Projects/Ambiente1_angulo2.jpg';
import Ambiente1_angulo4 from '../assets/images/Projects/Ambiente1_angulo4.jpg';
import mostra_lider from '../assets/images/Projects/mostra_lider.jpg';
import Moda_antiga from '../assets/images/Projects/Moda_antiga.jpg';
import decor_year_book from '../assets/images/Projects/decor_year_book.jpg';
import ambiente5_angulo2 from '../assets/images/Projects/ambiente5_angulo2.jpg';
import casacor_jardins_fonte from '../assets/images/Projects/casacor_jardins_fonte.jpg';
import casacor_jardins_titulo from '../assets/images/Projects/casacor_jardins_titulo.jpg';
import DiferenciaisSection from '@/components/DiferenciaisSection';
import CallToActionSection from '@/components/CallToActionSection';

const comentariosFake: Comentario[] = [
  {
    id: 1,
    nome: 'Edinaldo Martins',
    redeSocial: 'twitter',
    texto: 'O trabalho da Vanessa é simplesmente incrível! Recomendo demais.',
  },
  {
    id: 2,
    nome: 'Cíntia Lourenço',
    redeSocial: 'instagram',
    texto:
      'Apaixonada pelo projeto que ela fez no meu apartamento, super profissional.',
  },
  {
    id: 3,
    nome: 'Bryan Matheus',
    redeSocial: 'facebook',
    texto: 'Atendimento impecável e resultado maravilhoso, nota 10!',
  },
  {
    id: 4,
    nome: 'Bruna Grazyella',
    redeSocial: 'whatsapp',
    texto: 'Fácil contato e atendimento rápido, adorei o projeto!',
  },
];

export default function Projetos() {
  const emblaOptions: EmblaOptionsType = { loop: true };

  const projectImages = [
    ambiente1,
    mostra_lider,
    Moda_antiga,
    decor_year_book,
    ambiente5_angulo2,
    casacor_jardins_fonte,
    casacor_jardins_titulo,
    Ambiente1_angulo4,
  ].sort(() => Math.random() - 0.5);

  const apiUrl = import.meta.env.VITE_API_URL;
  const [projetosApi, setProjetosApi] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/api/projetos`)
      .then(res => res.json())
      .then(data => setProjetosApi(data))
      .catch(err => console.error('Erro ao buscar projetos:', err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* Carrossel */}
      <Carousel
        className="shadow-lg rounded-xl overflow-hidden mx-auto"
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
                alt={`Projeto Arquiteta Vanessa ${index + 1}`}
                className="w-full max-h-[750px] object-cover rounded-lg mx-auto"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Seção Projetos */}
      {projetosApi.length === 0 ? (
        <p className="text-center text-muted-foreground py-20">
          Carregando projetos...
        </p>
      ) : (
        <ProjetosSection projetos={projetosApi} />
      )}

      <DiferenciaisSection />

      {/* Seção Comentários */}
      <ComentariosSection comentarios={comentariosFake} />

      {/* CTA */}
      <CallToActionSection />
    </>
  );
}
