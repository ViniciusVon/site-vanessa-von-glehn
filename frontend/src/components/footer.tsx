import { Instagram, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full mt-10 border-t py-6 px-4 bg-background text-sm text-muted-foreground">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Contato */}
        <div>
          <h4 className="text-base font-semibold mb-2">Contato</h4>
          <p className="flex items-center gap-2">
            <Mail className="w-4 h-4" /> vanessarquiteta@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <FaWhatsapp className="w-4 h-4" /> (61) 99970-9669
          </p>
        </div>

        {/* Endereço */}
        <div>
          <h4 className="text-base font-semibold mb-2">Endereço</h4>
          <p className="flex items-start gap-2">
            <MapPin className="w-4 h-4 mt-0.5" />
            QN 1 Conjunto B, Riacho Fundo I - DF, CEP 71800-100
          </p>
        </div>

        {/* Redes Sociais */}
        <div className="flex flex-col items-center text-center">
            <h4 className="text-base font-semibold mb-2">Redes Sociais</h4>
            <div className="flex gap-4 justify-center">
                <a href="https://wa.me/5561912345678" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="w-5 h-5 hover:text-green-600" />
                </a>
                <a href="https://www.instagram.com/seucliente" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-5 h-5 hover:text-pink-500" />
                </a>
            </div>
        </div>

      </div>

      <div className="text-center mt-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Vanessa von Glehn. Todos os direitos reservados.
      </div>
    </footer>
  );
}
