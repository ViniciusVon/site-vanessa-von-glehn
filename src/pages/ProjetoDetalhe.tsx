import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface Projeto {
  titulo: string;
  descricao?: string;
  imagem?: string;
}

export default function ProjetoDetalhe() {
  const { slug } = useParams();
  const [projeto, setProjeto] = useState<Projeto | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${import.meta.env.VITE_API_URL}/api/projetos`)
      .then(res => res.json())
      .then((data: Projeto[]) => {
        const projetoEncontrado = data.find(proj => {
          const projetoSlug = proj.titulo.toLowerCase().replace(/\s+/g, '-');
          return projetoSlug === slug;
        });
        setProjeto(projetoEncontrado || null);
      })
      .finally(() => setIsLoading(false));
  }, [slug]);

  return (
    <div className="max-w-4xl mx-auto mt-36 px-6 py-16">
      {isLoading ? (
        <>
          <Skeleton className="h-10 w-3/4 mb-6" />
          <Skeleton className="h-[300px] w-full rounded-lg mb-6" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </>
      ) : projeto ? (
        <>
          <h1 className="text-4xl font-bold mb-6">{projeto.titulo}</h1>
          {projeto.imagem && (
            <img
              src={projeto.imagem}
              alt={projeto.titulo}
              className="w-full rounded-lg shadow mb-6"
            />
          )}
          {projeto.descricao && (
            <p className="text-lg text-muted-foreground">{projeto.descricao}</p>
          )}
        </>
      ) : (
        <div className="text-center py-20 text-muted-foreground">
          Projeto não encontrado.
        </div>
      )}
    </div>
  );
}
