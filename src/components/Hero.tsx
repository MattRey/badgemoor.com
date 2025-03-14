import Image from 'next/image';
import { ReactNode } from 'react';

type TextPosition = 'centre' | 'left';

interface HeroProps {
  image: string;
  fullScreen: boolean;
  text: string;
  textPosition: TextPosition;
  imageAlt?: string;
  textBackground?: boolean;
  children?: ReactNode;
  id?: string;
}

export default function Hero({ 
  image, 
  fullScreen, 
  text, 
  textPosition,
  imageAlt = "",
  textBackground = false,
  children,
  id
}: HeroProps) {
  return (
    <div 
      id={id}
      className={`
        relative w-full
        ${fullScreen ? 'h-screen' : 'h-[400px]'}
        py-[30px]
        bg-[var(--background)]
      `}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover opacity-50"
        loading="eager"
        quality={50}
        priority
      />
      
      <div className="relative z-10 container h-full flex flex-col">
        <div className={`
          flex flex-grow
          ${textPosition === 'centre' 
            ? 'items-center justify-center' 
            : 'items-end justify-start'
          }
        `}>
          <h1 className={`
            flex text-white text-4xl md:text-5xl lg:text-6xl
            ${textBackground ? 'p-4 bg-[#2c2c2c66]' : ''}
          `}>
            <span className="text-[#d33520] pr-5">{"//"}</span>
            {text}
          </h1>
        </div>
        
        {children && (
          <div className="flex justify-center pb-12">
            {children}
          </div>
        )}
      </div>
    </div>
  );
} 