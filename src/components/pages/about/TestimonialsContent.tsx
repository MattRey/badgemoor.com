import { testimonials } from "@/data/testimonials";

interface TestimonialsContentProps {
  id?: string;
}

export default function TestimonialsContent({ id }: TestimonialsContentProps) {
  return (
    <div id={id} className="max-w-7xl mx-auto py-16">
      <h2 className="text-4xl md:text-5xl font-light mb-12">
        <span className="text-[#d33520] pr-5">{"//"}</span>
        Clients
      </h2>

      <div className="space-y-12 text-xl">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="space-y-4">
            <p>&quot;{testimonial.text}&quot;</p>
            <p className="text-right">— {testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 