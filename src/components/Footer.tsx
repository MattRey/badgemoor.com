import LocationWidget from './LocationWidget';
import TestimonialsWidget from './TestimonialsWidget';

const Footer = () => {
  return (
    <footer id="footer" className="bg-[var(--background)] border-t-2 border-[var(--primary)] py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between flex-wrap gap-8">
          <LocationWidget />
          <TestimonialsWidget />
        </div>
        <div className="text-gray-500 text-sm mt-8 text-center">
          © {new Date().getFullYear()} Badgemoor Ltd. Site design by Matter Web
        </div>
      </div>
    </footer>
  );
};

export default Footer;
