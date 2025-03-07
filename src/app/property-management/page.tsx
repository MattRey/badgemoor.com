import PropertyManagementPage from '@/components/pages/property-management/PropertyManagementPage';
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
          <PropertyManagementPage />
        </PageContent>
      </main>
    </div>
  );
} 