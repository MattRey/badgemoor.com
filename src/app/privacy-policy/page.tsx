import PageContent from "../../components/PageContent";

export default function Privacy() {
  return (
    <div className="font-[family-name:var(--font-cormorant-garamond)]">
      <main className="flex flex-col">
        <PageContent>
          <div className="max-w-7xl mx-auto px-4 py-16">
            <h1 className="text-4xl md:text-5xl font-light mb-12">
              <span className="text-[#d33520] pr-5">{"//"}</span>
              Privacy Policy: Badgemoor Ltd.
            </h1>

            <div className="space-y-8">
              {/* Page 1: Introduction and Data We Collect */}
              <div>
                <p className="text-xl mb-8">
                  This policy outlines how Badgemoor Ltd. collects, uses,
                  stores, and protects personal data from our clients, tenants,
                  prospective tenants, contractors, and other third parties in
                  the course of our property lettings and management business.
                  We are committed to protecting your privacy and handling your
                  data transparently.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-light mb-4">
                  The Data We Collect About You
                </h2>
                <p className="text-xl mb-6">
                  We may collect, use, store, and transfer different kinds of
                  personal data about you, which we have grouped together as
                  follows:
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse border-y border-gray-300">
                    <thead>
                      <tr className="bg-gray-700">
                        <th className="border-y border-r border-gray-300 px-4 py-6 text-left font-semibold text-xl">
                          Data Type
                        </th>
                        <th className="border-y border-gray-300 px-4 py-6 text-left font-semibold text-xl">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border-y border-r border-gray-300 px-4 py-6 text-xl font-semibold">
                          Identity Data
                        </td>
                        <td className="border-y border-gray-300 px-4 py-6 text-xl">
                          Name, marital status, title, date of birth, and gender
                        </td>
                      </tr>
                      <tr>
                        <td className="border-y border-r border-gray-300 px-4 py-6 text-xl font-semibold">
                          Contact Data
                        </td>
                        <td className="border-y border-gray-300 px-4 py-6 text-xl">
                          Residential address, email address, and telephone
                          numbers
                        </td>
                      </tr>
                      <tr>
                        <td className="border-y border-r border-gray-300 px-4 py-6 text-xl font-semibold">
                          Financial Data
                        </td>
                        <td className="border-y border-gray-300 px-4 py-6 text-xl">
                          Bank account details for rental payments or deposits,
                          salary/income verification, and credit check results
                        </td>
                      </tr>
                      <tr>
                        <td className="border-y border-r border-gray-300 px-4 py-6 text-xl font-semibold">
                          Transaction Data
                        </td>
                        <td className="border-y border-gray-300 px-4 py-6 text-xl">
                          Details about payments to and from you, and other
                          details of products and services you have purchased
                          from us
                        </td>
                      </tr>
                      <tr>
                        <td className="border-y border-r border-gray-300 px-4 py-6 text-xl font-semibold">
                          Technical Data
                        </td>
                        <td className="border-y border-gray-300 px-4 py-6 text-xl">
                          Internet protocol (IP) address, browser type and
                          version, time zone setting, and location
                        </td>
                      </tr>
                      <tr>
                        <td className="border-y border-r border-gray-300 px-4 py-6 text-xl font-semibold">
                          Special Categories of Data
                        </td>
                        <td className="border-y border-gray-300 px-4 py-6 text-xl">
                          Health information if required for accommodation
                          adjustments or insurance, and criminal conviction data
                          for background checks
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-xl mb-4">
                  We may also collect data from third parties, including credit
                  referencing agencies, fraud prevention agencies, and previous
                  landlords/employers to assess your suitability as a tenant or
                  client.
                </p>
              </div>

              {/* Page 2: How We Use and Store Data */}
              <div>
                <h2 className="text-3xl font-light mb-4">
                  How We Use This Data
                </h2>
                <p className="text-xl mb-4">
                  We will only use your personal data when the law allows us to.
                  Most commonly, we will use your personal data in the following
                  circumstances:
                </p>
                <ol className="list-inside text-xl mb-4 space-y-2 ml-4 list-decimal">
                  <li>
                    <strong>To perform a contract:</strong> we are about to
                    enter into or have entered into with you (e.g., a tenancy
                    agreement or a management contract).
                  </li>
                  <li>
                    <strong>
                      Where it is necessary for our legitimate interests
                    </strong>{" "}
                    (or those of a third party) and your interests and
                    fundamental rights do not override those interests (e.g.,
                    for property maintenance, insurance purposes, or recovering
                    unpaid rent).
                  </li>
                  <li>
                    <strong>
                      To comply with a legal or regulatory obligation:
                    </strong>{" "}
                    (e.g., Right to Rent checks, deposit registration, or
                    anti-money laundering checks).
                  </li>
                </ol>
                <p className="text-xl mb-4">
                  Specific ways data may be used include:
                </p>
                <ul className="list-disc list-inside text-xl mb-4 space-y-2 ml-4">
                  <li>
                    Processing tenancy applications and conducting referencing.
                  </li>
                  <li>Collecting and remitting rent and deposits.</li>
                  <li>
                    Arranging property maintenance, repairs, and inspections by
                    a contractor.
                  </li>
                  <li>
                    Communicating with you regarding the property or our
                    services via email or phone call from a member of our team.
                  </li>
                  <li>
                    Marketing new properties or services to you, where you have
                    not opted out.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-light mb-4">
                  How We Store This Data
                </h2>

                <div className="mb-6">
                  <h3 className="text-2xl font-light mb-3">Data Security</h3>
                  <p className="text-xl mb-4">
                    We have implemented appropriate security measures to prevent
                    your personal data from being accidentally lost, used, or
                    accessed in an unauthorized way, altered, or disclosed.
                    Access to your personal data is limited to employees,
                    contractors, and other third parties who have a business
                    need to know.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-light mb-3">Data Retention</h3>
                  <p className="text-xl mb-4">
                    We will only retain your personal data for as long as
                    necessary to fulfil the purposes we collected it for,
                    including for the purposes of satisfying any legal,
                    accounting, or reporting requirements.
                  </p>
                  <p className="text-xl mb-4">
                    Generally, we retain data relating to a tenancy agreement
                    for a period of six years after the contract ends, to meet
                    our legal obligations and to handle potential disputes. Data
                    relating to unsuccessful tenancy applications may be held
                    for 12 months, unless you instruct us otherwise.
                  </p>
                </div>
              </div>

              {/* Page 3: Your Legal Rights */}
              <div>
                <h2 className="text-3xl font-light mb-4">Your Legal Rights</h2>
                <p className="text-xl mb-4">
                  Under data protection laws, you have rights regarding your
                  personal data. You have the right to:
                </p>
                <ul className="list-disc list-inside text-xl mb-6 space-y-2 ml-4">
                  <li>
                    Request access to your personal data (commonly known as a
                    &quot;data subject access request&quot;).
                  </li>
                  <li>
                    Request correction of the personal data that we hold about
                    you.
                  </li>
                  <li>
                    Request erasure of your personal data. Note that we may not
                    always be able to comply with your request for erasure for
                    specific legal reasons which will be notified to you, if
                    applicable, at the time of your request.
                  </li>
                  <li>
                    Object to processing of your personal data where we are
                    relying on a legitimate interest (or those of a third party)
                    and there is something about your particular situation that
                    makes you want to object to processing on this ground.
                  </li>
                  <li>
                    Request restriction of processing of your personal data.
                  </li>
                  <li>
                    Request the transfer of your personal data to you or to a
                    third party.
                  </li>
                  <li>
                    Withdraw consent at any time where we are relying on consent
                    to process your personal data.
                  </li>
                </ul>

                <p className="text-xl mb-4">
                  To exercise any of these rights, please contact the Data
                  Protection Officer at Badgemoor Ltd. via email
                  (admin@badgemoor.com) or in writing to 404 Avon House,
                  Avonmore Road, W14 8TS. We will respond to your request within
                  10 working days.
                </p>
                <p className="text-xl mb-4">
                  You also have the right to make a complaint at any time to the
                  Information Commissioner&apos;s Office (ICO), the UK
                  supervisory authority for data protection issues. We would,
                  however, appreciate the chance to deal with your concerns
                  before you approach the ICO, so please contact us in the first
                  instance. You can raise your concerns with our Data Protection
                  Officer, James Vlasto, by writing to our office address
                  (above).
                </p>

                <p className="text-xl mt-8 -gray-300">
                  Created 11/11/2025, to be reviewed 11/11/2027
                </p>
              </div>
            </div>
          </div>
        </PageContent>
      </main>
    </div>
  );
}
