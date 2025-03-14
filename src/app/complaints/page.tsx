import PageContent from '../../components/PageContent';

export default function Complaints() {
  return (
    <div className="font-[family-name:var(--font-cormorant-garamond)]">
      <main className="flex flex-col">
        <PageContent>
          <div className="max-w-7xl mx-auto px-4 py-16">
            <h1 className="text-4xl md:text-5xl font-light mb-12">
              <span className="text-[#d33520] pr-5">{"//"}</span>
              Complaints Procedure
            </h1>

            <div className="space-y-8">
              <div>
                <p className="text-xl mb-4">
                  We are dedicated to providing you with the highest level of service. If you encounter any issues, we want to hear from you so we can make things right. Please send your complaint in writing, with as much detail as possible, to Badgemoor Ltd, 404 Avon House, Kensington Village, Avonmore Road, London, W14 8TS. We are committed to addressing your concerns promptly. Here&apos;s what you can expect:
                </p>
              </div>

              <div>
                <ul className="list-disc list-inside text-xl space-y-4 ml-4">
                  <li>Within 3 working days, we will acknowledge receipt of your complaint and provide you with a copy of this procedure.</li>
                  <li>We will then conduct a thorough investigation and provide you with a written response within 15 working days of the acknowledgement.</li>
                  <li>If you remain dissatisfied, a senior staff member will conduct a separate review, and you will receive a final written response within 15 working days.</li>
                  <li>If you are still not satisfied after this final review, or if 8 weeks have passed since your initial complaint, you have the right to seek an independent review from The Property Ombudsman, at no cost to you.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-light mb-4">The Property Ombudsman</h2>
                <p className="text-xl mb-4">
                  33 The Clarendon Centre Salisbury Business Park, Dairy Meadow Lane, Salisbury, Wiltshire, United Kingdom, SP1 2TJ
                </p>
                <p className="text-xl mb-4">
                  01722 333 306<br />
                  <a href="mailto:admin@tpos.co.uk" className="text-[#d33520] hover:underline">admin@tpos.co.uk</a><br />
                  <a href="https://www.tpos.co.uk" target="_blank" rel="noopener noreferrer" className="text-[#d33520] hover:underline">www.tpos.co.uk</a>
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-light mb-4">Please note</h2>
                <ul className="list-disc list-inside text-xl space-y-4 ml-4">
                  <li>You will need to submit your complaint to The Property Ombudsman within 12 months of receiving our final viewpoint letter, including any evidence to support your case.</li>
                  <li>The Property Ombudsman requires that all complaints are addressed through this in-house complaints procedure, before being submitted for an independent review.</li>
                </ul>
              </div>
            </div>
          </div>
        </PageContent>
      </main>
    </div>
  );
} 