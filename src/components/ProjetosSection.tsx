import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

import { Link } from 'react-router-dom';

interface Projeto {
  titulo: string;
  descricao?: string;
  imagem?: string;
}

interface ProjetosSectionProps {
  projetos: Projeto[];
}

export default function ProjetosSection({ projetos }: ProjetosSectionProps) {
  if (!projetos || projetos.length === 0) {
    return <p>Carregando projetos...</p>;
  }

  return (
    <section className="w-full py-16 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[var(--foreground)] mb-10">
          Projetos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {projetos.map(({ titulo, descricao }: Projeto) => {
            const urlPath =
              '/projetos/' + titulo.toLowerCase().replace(/\s+/g, '-');

            return (
              <Link to={urlPath} key={titulo} className="block">
                <div
                  className="
                  h-full group p-12
                  bg-white/5 hover:bg-white/10
                  border border-white/20
                  rounded-xl shadow-md
                  flex items-center justify-center
                  text-center transition-all duration-300
                  cursor-pointer
                "
                >
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <h3 className="text-xl font-semibold text-[var(--foreground)] group-hover:underline">
                        {titulo}
                      </h3>
                    </HoverCardTrigger>
                    {descricao && (
                      <HoverCardContent className="text-sm text-muted-foreground max-w-xs">
                        {descricao}
                      </HoverCardContent>
                    )}
                  </HoverCard>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
