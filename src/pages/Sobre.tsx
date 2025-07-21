import { Button } from "@/components/ui/button";

export default function Sobre() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Sobre a Arquiteta</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Vanessa é arquiteta e poetisa, unindo a arte das palavras à técnica de transformar espaços. 
        Especialista em neuroarquitetura, acredita que ambientes têm o poder de influenciar o bem-estar,
        as emoções e a forma como vivemos.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        Seus projetos unem estética, funcionalidade e propósito — tudo com muita sensibilidade e alma.
        Esta página reúne sua história, visão e inspiração por trás de cada traço.
      </p>

      <div className="mt-8">
        <Button asChild>
          <a href="/">Voltar para o Início</a>
        </Button>
      </div>
    </div>
  );
}
