import Hero from '../../components/Hero';
import PageContent from '../../components/PageContent';
export default function PropertyManagement() {
  return (
    <div className="font-[family-name:var(--font-cormorant-garamond)]">
      <main className="flex flex-col">
        <Hero
          image="/building_with_leaves.webp"
          fullScreen={false}
          text="Lettings & Property Management"
          textPosition="left"
          textBackground={true}
          imageAlt='Photo of building with leaves'
        />
        <PageContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </PageContent>
      </main>
    </div>
  );
} 