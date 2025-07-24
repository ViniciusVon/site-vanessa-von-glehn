import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export interface Product {
  id: string;
  name: string;
  price: string;
  img: string;
}

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Luxury Sofa',
    price: '$320.00',
    img: 'https://source.unsplash.com/300x300/?sofa',
  },
  {
    id: '2',
    name: 'Premium Lamp',
    price: '$70.00',
    img: 'https://source.unsplash.com/300x300/?lamp',
  },
  {
    id: '3',
    name: 'Accent Chair',
    price: '$90.00',
    img: 'https://source.unsplash.com/300x300/?chair',
  },
  {
    id: '4',
    name: 'Soft Pom Sofa',
    price: '$130.00',
    img: 'https://source.unsplash.com/300x300/?couch',
  },
];

export function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(mockProducts);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6">
      <Card>
        <CardHeader>
          <CardTitle>Our Best Selling Products</CardTitle>
        </CardHeader>
        <CardContent>
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            navigation
            modules={[Navigation]}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {products.map(p => (
              <SwiperSlide key={p.id}>
                <Card className="p-4 text-center">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <h3 className="font-medium text-lg mb-1">{p.name}</h3>
                  <p className="text-gray-600 mb-2">{p.price}</p>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </CardContent>
      </Card>
    </section>
  );
}
