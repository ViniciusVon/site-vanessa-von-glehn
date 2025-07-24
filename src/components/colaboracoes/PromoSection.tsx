// components/collaborations/PromoSection.tsx
import { useState, useEffect } from 'react';

export function PromoSection() {
  const [timer, setTimer] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const end = new Date();
    end.setDate(end.getDate() + 3);
    const iv = setInterval(() => {
      const diff = end.getTime() - Date.now();
      if (diff <= 0) return clearInterval(iv);
      setTimer({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    }, 1000);
    return () => clearInterval(iv);
  }, []);
  return (
    <section className="max-w-7xl mx-auto px-6">
      <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-4">
            Super Oferta de Colaboração!
          </h3>
          <div className="flex gap-4 font-mono text-xl">
            <div>
              <div className="text-3xl">{timer.d}</div>d
            </div>
            <div>
              <div className="text-3xl">{timer.h}</div>h
            </div>
            <div>
              <div className="text-3xl">{timer.m}</div>m
            </div>
            <div>
              <div className="text-3xl">{timer.s}</div>s
            </div>
          </div>
        </div>
        <img
          src="https://source.unsplash.com/200x200/?sale"
          alt="Promoção"
          className="w-40 h-40 object-cover rounded-full"
        />
      </div>
    </section>
  );
}
