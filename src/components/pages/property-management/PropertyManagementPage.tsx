import React from "react";
import { Tabs } from "radix-ui";
import Image from "next/image";
import Link from "next/link";

const PropertyManagementPage = () => {
  return (
    <div className="flex flex-col gap-16 items-start text-xl">
      <Tabs.Root className="w-full" defaultValue="lettings">
        <Tabs.List className="flex border-b border-[var(--primary)] mb-8">
          <Tabs.Trigger
            className="px-6 py-3 text-lg border border-white data-[state=active]:pointer-events-none data-[state=active]:border-[var(--primary)] data-[state=active]:bg-[var(--primary)] data-[state=active]:font-medium hover:data-[state=inactive]:text-[var(--primary)] hover:data-[state=inactive]:bg-white hover:data-[state=inactive]:border-white"
            value="lettings"
          >
            Lettings
          </Tabs.Trigger>
          <Tabs.Trigger
            className="px-6 py-3 text-lg border border-white data-[state=active]:pointer-events-none data-[state=active]:border-[var(--primary)] data-[state=active]:bg-[var(--primary)] data-[state=active]:font-medium hover:data-[state=inactive]:text-[var(--primary)] hover:data-[state=inactive]:bg-white hover:data-[state=inactive]:border-white"
            value="property-management"
          >
            Property Management
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="lettings" className="flex flex-col gap-8">
          <p className="text-2xl">
            We understand that finding the perfect home or ideal tenant in
            London can be a nerve-wracking, complex and time-consuming process.
            That&apos;s why we&apos;re dedicated to providing a comprehensive
            and personalised service to offer certainty and remove stress.
          </p>
          <p className="text-2xl">
            Whether you&apos;re a landlord or a tenant, Badgemoor is your
            trusted partner in London lettings. Contact us today to discuss your
            requirements and experience the difference.
          </p>
          <section>
            <h4 className="text-xl font-medium mb-2">Our Experience</h4>
            <p>
              With more than 60 years of combined experience in the London
              property market, our team possesses an in-depth understanding of
              local trends, rental values, and tenant expectations. Our team of
              highly skilled and ARLA-qualified professionals is committed to
              delivering exceptional service, whether you&apos;re a landlord
              seeking reliable tenants or a tenant searching for your dream
              home.
            </p>
          </section>
          <section>
            <h4 className="text-xl font-medium mb-2">Landlords</h4>
            <p>
              At our heart we are an advisory service, helping our clients make
              the best decisions to suit their long term plans. With a range of
              tailored services designed to maximise your investment and
              minimise your hassle. From valuation and marketing to tenant
              referencing, rent collection, and full property management. We
              handle every aspect of the process with professionalism,
              efficiency and good humour.
            </p>
          </section>
          <section>
            <h4 className="text-xl font-medium mb-2">Tenants</h4>
            <p>
              Renting a Badgemoor property is more than just collecting keys and
              saying goodbye. We&apos;re committed to ensuring that our
              properties meet your needs and expectations. We offer a diverse
              portfolio of properties across London, from stylish bijou
              apartments to spacious family houses. Our team will guide you
              through the viewing and application process, ensuring a
              transparent and straightforward experience. We&apos;re here to
              support you throughout your tenancy, addressing any queries or
              concerns promptly and efficiently.
            </p>
          </section>
        </Tabs.Content>

        <Tabs.Content value="property-management" className="w-full">
          <p className="text-2xl">
            Be it keeping your pied-a-terre hotel-ready for your arrival or
            helping build and manage your investment portfolio, we&apos;re here
            to ensure you can relax in the knowledge that your property is in
            safe hands.
          </p>
          <p className="mt-8">
            Being an active landlord isn&apos;t for everyone, it can be time
            consuming and stressful. In a changing legal climate it can also be
            confusing and worrying. At Badgemoor we manage a portfolio of
            properties for both professional and amateur landlords, applying our
            focus where we can add the most value for our clients. With over 60
            years combined experience in the property industry, there
            aren&apos;t many situations that the team hasn&apos;t come across
            before. Please call for a chat but to give an idea of the service,
            below we&apos;ve listed some elements that our clients have valued
            highly:
          </p>
          <ul className="list-disc ml-8 mt-8 flex flex-col gap-2">
            <li>One consistent point of contact from day one</li>
            <li>
              A small team with a long term client focus and advisory culture
            </li>
            <li>A degree of professional separation from your tenant</li>
            <li>
              Access to our large network of vetted and trusted contractors and
              specialists
            </li>
            <li>
              A preemptive-maintenance approach to reduce the likelihood of
              unexpected repairs
            </li>
            <li>No void/management fee between tenancies</li>
            <li>Simplified, attractive fee structure</li>
            <li>
              Empty Property Management giving you peace of mind for second
              homes
            </li>
            <li>
              Notable experience in refurbishment/ elective project management
            </li>
            <li>
              Market intelligence and objective long term strategic advice
            </li>
          </ul>
        </Tabs.Content>
      </Tabs.Root>
      <div className="flex flex-row justify-center gap-4 mx-auto">
        <Image
          src="/ombudsman_tsi.webp"
          alt="Ombudsman TSI Logo"
          width={389}
          height={100}
          quality={50}
        />
        <Image
          src="/propertymark.webp"
          alt="Property Mark Logo"
          width={274}
          height={100}
          quality={50}
        />
        <Image
          src="/cmp.webp"
          alt="CMP Logo"
          width={177}
          height={100}
          quality={50}
        />
      </div>
      <div className="flex flex-col gap-4">
        <Link
          href="/lettings-management-terms.pdf"
          className="hover:text-[var(--primary)]"
          target="_blank"
        >
          Lettings & Property Management Terms of Business
        </Link>
        <Link
          href="/cmp-certificate.pdf"
          className="hover:text-[var(--primary)]"
          target="_blank"
        >
          Client Money Protection Certificate
        </Link>
        <Link
          href="/propertymark-conduct-rules.pdf"
          className="hover:text-[var(--primary)]"
          target="_blank"
        >
          Client Money Protection Rules
        </Link>
      </div>
    </div>
  );
};

export default PropertyManagementPage;
