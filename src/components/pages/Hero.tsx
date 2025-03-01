import Image from 'next/image';

type TextPosition = 'centre' | 'left';

interface HeroProps {
  image: string;
  fullScreen: boolean;
  text: string;
  textPosition: TextPosition;
}

export default function Hero({ image, fullScreen, text, textPosition }: HeroProps) {
  return (
    <div 
      className={`
        relative w-full
        ${fullScreen ? 'h-screen' : 'h-[400px]'}
        px-[30px] py-[30px]
        md:px-[100px]
        xl:px-[200px]
        md:py-[60px]
      `}
    >
      <Image
        src={image}
        alt=""
        fill
        className="object-cover"
        priority
      />
      
      <div className={`
        relative z-10
        flex
        ${textPosition === 'centre' 
          ? 'items-center justify-center h-full' 
          : 'items-end justify-start h-full'
        }
      `}>
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl">
          <span className="text-[#d33520] pr-5">{"//"}</span>
          {text}
        </h1>
      </div>
    </div>
  );
} 