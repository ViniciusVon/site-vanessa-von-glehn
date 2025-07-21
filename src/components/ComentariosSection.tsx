import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export interface Comentario {
  id: number;
  nome: string;
  redeSocial: 'twitter' | 'instagram' | 'facebook' | 'whatsapp';
  texto: string;
}

const iconesRedeSocial = {
  twitter: <Twitter className="w-4 h-4 text-blue-500" />,
  instagram: <Instagram className="w-4 h-4 text-pink-600" />,
  facebook: <Facebook className="w-4 h-4 text-blue-700" />,
  whatsapp: <FaWhatsapp className="w-4 h-4 text-green-500" />,
};

interface ComentariosSectionProps {
  comentarios: Comentario[];
}

export default function ComentariosSection({
  comentarios,
}: ComentariosSectionProps) {
  if (comentarios.length === 0) {
    return (
      <p className="text-center text-muted-foreground py-10">
        Nenhum comentário ainda.
      </p>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h3 className="text-2xl font-semibold mb-8 text-center text-[var(--foreground)]">
        Comentários nas redes sociais
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {comentarios.map(({ id, nome, redeSocial, texto }) => (
          <Card
            key={id}
            className="flex flex-col p-4 shadow-lg hover:shadow-xl transition-shadow rounded-xl"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {iconesRedeSocial[redeSocial]}
                <Avatar className="w-9 h-9">
                  <AvatarImage
                    src={`https://ui-avatars.com/api/?name=${nome}&background=random`}
                    alt={nome}
                  />

                  <AvatarFallback>{nome.charAt(0)}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-sm font-medium">{nome}</CardTitle>
              </div>
            </div>

            <Separator className="mb-3" />

            <CardContent className="text-sm text-muted-foreground pt-1 px-0">
              {texto}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
