interface AnchorLink {
  text?: string;
  href: string;
}

interface AnchorLinksProps {
  links: AnchorLink[];
}

export default function AnchorLinks({ links }: AnchorLinksProps) {
  return (
    <div className="flex gap-8">
      {links.map((link, index) => (
        <a 
          key={index} 
          href={link.href}
          className={`
            flex flex-col items-center
            ${link.text ? 'bg-[#2c2c2c66] px-4 py-2' : ''}
          `}
        >
          {link.text && (
            <span className="text-white mb-2">{link.text}</span>
          )}
          <svg 
            className="w-6 h-6 text-[#d33520]" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      ))}
    </div>
  );
} 