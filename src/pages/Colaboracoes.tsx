import { HeroSection } from '@/components/colaboracoes/HeroSection';
import { BenefitsGrid } from '@/components/colaboracoes/BenefitsGrid';
import { CategoriesSection } from '@/components/colaboracoes/CategoriesSection';
import { PromoSection } from '@/components/colaboracoes/PromoSection';
import { FeaturedProducts } from '@/components/colaboracoes/FeaturedProducts';
import { InspirationSection } from '@/components/colaboracoes/InspirationSection';
import { TestimonialsSection } from '@/components/colaboracoes/TestimonialsSection';

export default function Colaboracoes() {
  return (
    <div className="space-y-32">
      <HeroSection />
      <BenefitsGrid />
      <CategoriesSection />
      <PromoSection />
      <FeaturedProducts />
      <InspirationSection />
      <TestimonialsSection />
    </div>
  );
}
