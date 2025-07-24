import { Instagram, Mail, MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

export default function Footer() {
  return (
    <footer className="w-full mt-10 border-t py-6 px-4 bg-background text-sm text-muted-foreground">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Contato */}
        <div>
          <h4 className="text-base font-semibold mb-2">Contato</h4>
          <a
            href="mailto:vanessarquiteta@gmail.com"
            className="flex justify-center items-center gap-2 hover:underline text-muted-foreground"
          >
            <Mail className="w-4 h-4" /> vanessa.neuroarquiteta@gmail.com
          </a>
        </div>

        {/* Endereço */}
        <div>
          <h4 className="text-base font-semibold mb-2">Endereço</h4>
          <a
            href="https://www.google.com/maps?q=Rua+01,+Chacara+25/2B,+Spazio+Villa+Régia,+DF,+72005-213"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 hover:underline text-muted-foreground"
          >
            <MapPin className="w-4 h-4 mt-0.5" />
            Rua 01, Chacara 25/2B, Spazio Villa Régia, CEP: 72005-213
          </a>
        </div>

        {/* Redes Sociais */}
        <div className="flex flex-col items-center text-center">
          <h4 className="text-base font-semibold mb-2">Redes Sociais</h4>
          <div className="flex gap-4 justify-center">
            {/* WhatsApp com HoverCard */}
            <HoverCard>
              <HoverCardTrigger asChild>
                <a
                  href="https://wa.me/5561999709669"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <FaWhatsapp className="w-5 h-5 hover:text-green-600" />
                </a>
              </HoverCardTrigger>
              <HoverCardContent className="w-56 text-sm">
                <p className="font-semibold">WhatsApp</p>
                <p>Converse conosco pelo WhatsApp para dúvidas e orçamentos.</p>
              </HoverCardContent>
            </HoverCard>

            {/* Instagram com HoverCard */}
            <HoverCard>
              <HoverCardTrigger asChild>
                <a
                  href="https://www.instagram.com/vanessavonglehnarquiteta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <Instagram className="w-5 h-5 hover:text-pink-500" />
                </a>
              </HoverCardTrigger>
              <HoverCardContent className="w-56 text-sm">
                <p className="font-semibold">@vanessavonglehnarquiteta</p>
                <p>Veja nossos projetos e bastidores no Instagram.</p>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </div>

      <div className="text-center mt-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Vanessa von Glehn. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
