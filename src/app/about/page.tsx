import Hero from '../../components/pages/Hero';

export default function About() {
  return (
    <div className="font-[family-name:var(--font-cormorant-garamond)]">
      <main className="flex flex-col gap-8">
        <Hero
          image="/blossom.jpeg"
          fullScreen={true}
          text="About us"
          textPosition="centre"
        />
      </main>
    </div>
  );
} 