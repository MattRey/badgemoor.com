interface FeesContentProps {
  id?: string;
}

export default function FeesContent({ id }: FeesContentProps) {
  return (
    <div id={id} className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl md:text-5xl font-light mb-12">
        <span className="text-[#d33520] pr-5">{"//"}</span>
        Fees
      </h2>
      
      <div className="space-y-8 text-xl">
        <div>
          <h3 className="text-2xl font-light mb-4">Search & Acquisition</h3>
          <p className="mb-4">
            Upon signing our engagement letter, a non-refundable retainer of £1,000 is due. This is a deposit against the success fee which is as follows:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>For a purchase, our fee is 1.5% of the property value with a minimum fee of £10,000</li>
            <li>For a rental search, our fee is one month&apos;s rent with a minimum fee of £5,000</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-light mb-4">Letting & Management Property</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Our full Let & Managed service is charged at 10% of the gross rental income with a minimum fee of £2,000</li>
            <li>Our Management only service is charged at 5% of the gross rental income with a minimum fee of £1,000</li>
            <li>Our Project Management Fee is 10% of the project costs with a minimum fee of £1,000</li>
          </ul>
        </div>

        <p className="mt-8 italic">
          All fees are subject to VAT at the prevailing rate. For more information on our fee structure and terms of business please contact us.
        </p>
      </div>
    </div>
  );
} 