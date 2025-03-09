interface AnchorLink {
  text?: string;
  href: string;
}

interface AnchorLinksProps {
  links: AnchorLink[];
}

export default function AnchorLinks({ links }: AnchorLinksProps) {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-8 w-full">
      {links.map((link, index) => (
        <a 
          key={index} 
          href={link.href}
          className={`
            flex flex-col items-center
            ${link.text ? 'bg-[#2c2c2c66] w-full md:min-w-40 px-auto md:px-4 py-2 gap-4' : ''}
          `}
        >
          {link.text && (
            <span className="text-white text-2xl mb-2 w-full min-w-40 text-center">{link.text}</span>
          )}
          <svg 
            className="w-10 h-10 text-[#d33520]" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 7l-7 10-7-10"
            />
          </svg>
        </a>
      ))}
    </div>
  );
} 