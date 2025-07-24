import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import type { FAQItem } from './types';

type FAQSectionProps = {
  faq: FAQItem[];
};

export function FAQSection({ faq }: FAQSectionProps) {
  return (
    <section className="bg-yellow-50 p-8 rounded-xl">
      <h2 className="text-3xl font-bold text-center mb-8">
        Perguntas Frequentes
      </h2>
      <Accordion type="multiple" className="space-y-4 max-w-3xl mx-auto">
        {faq.map(item => (
          <AccordionItem
            key={item.question}
            value={item.question}
            className="p-4 bg-white rounded shadow"
          >
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
