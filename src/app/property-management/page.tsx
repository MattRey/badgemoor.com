import Hero from '../../components/Hero';

export default function PropertyManagement() {
  return (
    <div className="font-[family-name:var(--font-cormorant-garamond)]">
      <main className="flex flex-col gap-8">
        <Hero
          image="/building_with_leaves.jpeg"
          fullScreen={false}
          text="Lettings & Property Management"
          textPosition="left"
          textBackground={true}
          imageAlt='Photo of building with leaves'
        />
      </main>
    </div>
  );
} 