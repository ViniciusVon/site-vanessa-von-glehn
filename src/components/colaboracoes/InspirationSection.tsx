import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const inspirations = [
  {
    id: 'i1',
    img: 'https://source.unsplash.com/400x300/?interior',
    label: 'Dream Design',
  },
  {
    id: 'i2',
    img: 'https://source.unsplash.com/400x300/?living-room',
    label: 'Living Room',
  },
  {
    id: 'i3',
    img: 'https://source.unsplash.com/400x300/?bedroom',
    label: 'Bedroom',
  },
];

export function InspirationSection() {
  return (
    <section className="max-w-7xl mx-auto px-6">
      <div className="flex items-center justify-between mb-6">
        <CardTitle className="text-2xl font-bold">
          70+ Unique Furniture Inspirations
        </CardTitle>
        <Button variant="link">Explore More</Button>
      </div>
      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
      >
        {inspirations.map(item => (
          <SwiperSlide key={item.id}>
            <Card className="overflow-hidden">
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-48 object-cover"
              />
              <CardContent>
                <div className="text-center font-medium">{item.label}</div>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
