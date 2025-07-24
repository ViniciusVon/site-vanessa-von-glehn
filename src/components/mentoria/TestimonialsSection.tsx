import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription } from '@/components/ui/card';
import type { Testimonial } from './types';

type TestimonialsSectionProps = {
  testimonials: Testimonial[];
};

export function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  return (
    <section className="bg-green-50 p-8 rounded-xl">
      <h2 className="text-3xl font-bold text-center mb-8">Depoimentos</h2>
      <Tabs defaultValue={testimonials[0].author.toLowerCase()}>
        <TabsList className="justify-center">
          {testimonials.map(t => (
            <TabsTrigger key={t.author} value={t.author.toLowerCase()}>
              {t.author}
            </TabsTrigger>
          ))}
        </TabsList>
        {testimonials.map(t => (
          <TabsContent key={t.author} value={t.author.toLowerCase()}>
            <Card>
              <CardContent>
                <p className="italic mb-4">“{t.text}”</p>
                <CardDescription className="text-right">
                  — {t.author}
                </CardDescription>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
