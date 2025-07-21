import { Link } from "react-router-dom";

const cards = ["Casa Cor", "Decor Year Book", "Clientes"];
const endpoints = ["casa-cor", "decor-year-book", "clientes"];

export default function ProjetosSection() {
  return (
    <section className="w-full py-16 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[var(--foreground)] mb-10">
          Projetos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {cards.map((title, index) => {
            const urlPath = "/projetos/" + endpoints[index];

            return (
              <Link to={urlPath} key={title} className="block">
                <div className="
                  h-full group p-12
                  bg-white/5 hover:bg-white/10
                  border border-white/20
                  rounded-xl shadow-md
                  flex items-center justify-center
                  text-center transition-all duration-300
                  cursor-pointer
                ">
                  <h3 className="text-xl font-semibold text-[var(--foreground)] group-hover:underline">
                    {title}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
