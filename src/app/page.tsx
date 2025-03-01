import Hero from './components/pages/Hero';

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-cormorant-garamond)]">
      <main className="flex flex-col gap-8">
        <Hero
          image="/main_bridge.jpg"
          fullScreen={true}
          text="Putting an expert in your corner."
          textPosition="centre"
        />
      </main>
    </div>
  );
}
