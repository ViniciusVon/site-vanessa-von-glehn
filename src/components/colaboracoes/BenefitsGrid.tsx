export function BenefitsGrid() {
  const items = [
    { icon: '🛠️', label: 'Fácil de usar' },
    { icon: '🚚', label: 'Entrega rápida' },
    { icon: '☎️', label: 'Suporte 24/7' },
    { icon: '🔒', label: 'Garantia de qualidade' },
  ];
  return (
    <section className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
      {items.map(i => (
        <div
          key={i.label}
          className="bg-white p-6 rounded-xl shadow text-center"
        >
          <div className="text-3xl mb-2">{i.icon}</div>
          <div className="font-medium">{i.label}</div>
        </div>
      ))}
    </section>
  );
}
