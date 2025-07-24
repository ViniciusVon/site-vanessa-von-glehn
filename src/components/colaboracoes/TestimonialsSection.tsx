import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Card } from '@/components/ui/card';

interface Testimonial {
  id: string;
  author: string;
  role: string;
  text: string;
  avatar: string;
}

const mockTestimonials: Testimonial[] = [
  {
    id: 't1',
    author: 'Hamida Jannat',
    role: 'UX Designer',
    text: 'The collaboration platform boosted my career with amazing projects.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 't2',
    author: 'John Doe',
    role: 'Developer',
    text: 'I found my dream team here!',
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-8">
          Our Clients Beautiful Words
        </h2>
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 } }}
        >
          {mockTestimonials.map(item => (
            <SwiperSlide key={item.id}>
              <Card className="p-6 text-center">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                />
                <p className="italic mb-4">“{item.text}”</p>
                <div className="font-semibold">{item.author}</div>
                <div className="text-sm text-gray-500">{item.role}</div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
