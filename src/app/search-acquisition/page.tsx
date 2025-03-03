import Hero from '../../components/Hero';

export default function SearchAcquisition() {
  return (
    <div className="font-[family-name:var(--font-cormorant-garamond)]">
      <main className="flex flex-col gap-8">
        <Hero
          image="/street.jpeg"
          fullScreen={false}
          text="Search & Acquisition"
          textPosition="left"
          textBackground={true}
          imageAlt='Photo of London street'
        />
      </main>
    </div>
  );
} 