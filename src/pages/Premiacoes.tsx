'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { motion } from 'framer-motion';
import { Award, Star } from 'lucide-react';
import Yellow from '@/assets/images/Professional/Yellow.jpg';
import Medal from '@/assets/images/Professional/medalha.jpg';
import Trophies from '@/assets/images/Professional/Trofeus.jpg';

function Modal({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 cursor-pointer"
    >
      <img
        src={src}
        alt={alt}
        className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
      />
    </div>
  );
}

const premiacoes = [
  {
    titulo: 'Casa Cor Brasília',
    ano: 2022,
    descricao:
      'Ambiente premiado pela inovação e sofisticação no design de interiores.',
    imagem: Trophies,
    icon: <Award className="w-6 h-6 text-primary" />,
  },
  {
    titulo: 'Prêmio Decor Destaque',
    ano: 2021,
    descricao:
      'Reconhecimento pelo uso criativo de elementos naturais na decoração.',
    imagem: Medal,
    icon: <Star className="w-6 h-6 text-yellow-500" />,
  },
  {
    titulo: 'Top Design Interiores',
    ano: 2020,
    descricao:
      'Premiação nacional destacando projetos que unem estética e funcionalidade.',
    imagem: Yellow,
    icon: <Award className="w-6 h-6 text-indigo-600" />,
  },
];

const depoimentos = [
  {
    nome: 'Maria Silva',
    texto:
      'A Vanessa é uma profissional incrível! Seu trabalho tem uma sensibilidade única e resultado impecável.',
  },
  {
    nome: 'Carlos Alberto',
    texto:
      'Já recomendei vários projetos da Vanessa. A dedicação dela é visível em cada detalhe.',
  },
  {
    nome: 'Fernanda Costa',
    texto:
      'Uma arquiteta que entende o que o cliente quer e supera expectativas com projetos sofisticados.',
  },
];

export default function Premiacoes() {
  const [modalInfo, setModalInfo] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 mt-10">
      {/* Título e descrição */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-[var(--primary)] mb-4">
          Premiações & Reconhecimentos
        </h1>
        <p className="text-muted-foreground text-lg">
          Ao longo dos anos, nossa dedicação e excelência têm sido reconhecidas
          em diversos eventos e premiações de destaque no mundo da arquitetura e
          design de interiores.
        </p>
      </div>

      <Separator className="my-12 w-24 mx-auto bg-[var(--muted-foreground)]" />

      {/* Cards de premiações */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {premiacoes.map(({ titulo, ano, descricao, imagem, icon }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.25 }}
            viewport={{ once: true }}
          >
            <Card
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setModalInfo({ src: imagem, alt: titulo })}
            >
              <AspectRatio ratio={4 / 5} className="w-full">
                <img
                  src={imagem}
                  alt={titulo}
                  className="object-cover rounded-t-2xl"
                  style={{ width: '100%', height: '100%' }}
                />
              </AspectRatio>
              <CardHeader>
                <CardTitle className="flex justify-between items-center gap-2">
                  <span className="flex items-center gap-1 text-[var(--foreground)] font-semibold text-lg">
                    {icon} {titulo}
                  </span>
                  <Badge variant="outline" className="text-sm font-medium">
                    {ano}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{descricao}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Modal de imagem */}
      {modalInfo && (
        <Modal
          src={modalInfo.src}
          alt={modalInfo.alt}
          onClose={() => setModalInfo(null)}
        />
      )}

      <Separator className="my-20 w-24 mx-auto bg-[var(--muted-foreground)]" />

      {/* Seção de Depoimentos */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[var(--primary)] mb-8">
          O que dizem sobre nós
        </h2>

        <div className="space-y-8">
          {depoimentos.map(({ nome, texto }, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.3 }}
              viewport={{ once: true }}
              className="border-l-4 border-[var(--primary)] pl-6 italic text-[var(--muted-foreground)] text-lg"
            >
              <p>"{texto}"</p>
              <footer className="mt-2 font-semibold text-[var(--foreground)]">
                — {nome}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </section>
    </section>
  );
}
