// components/collaborations/CategoriesSection.tsx
export function CategoriesSection() {
  const cats = [
    { name: 'Mesas', img: 'https://source.unsplash.com/300x300/?table' },
    { name: 'Cadeiras', img: 'https://source.unsplash.com/300x300/?chair' },
    { name: 'Iluminação', img: 'https://source.unsplash.com/300x300/?lamp' },
    { name: 'Decoração', img: 'https://source.unsplash.com/300x300/?decor' },
  ];
  return (
    <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {cats.map(c => (
        <div key={c.name} className="rounded-2xl overflow-hidden shadow-lg">
          <img src={c.img} alt={c.name} className="w-full h-48 object-cover" />
          <div className="p-4 bg-white text-center font-semibold">{c.name}</div>
        </div>
      ))}
    </section>
  );
}
