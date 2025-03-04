import React from "react";
import { Tabs } from "radix-ui";

const SearchAcquisitionPage = () => {
  return (
    <div className="flex flex-col gap-16 items-center text-xl">
      <h2 className="text-4xl text-center">
        Whether you are searching to buy or to rent, specific about your needs
        or looking for suggestions, we can fill the gaps and take the hard work
        off your hands. Our role is to guide you to the best results by ensuring
        you are confident in the decisions you are making and that, contrary to
        social myth, you actually enjoy the process.
      </h2>
      <Tabs.Root className="w-full" defaultValue="process">
        <Tabs.List className="flex border-b border-[var(--primary)] mb-8">
          <Tabs.Trigger
            className="px-6 py-3 text-lg border-2 border-gray-400 bg-gray-400 data-[state=active]:pointer-events-none data-[state=active]:border-[var(--primary)] data-[state=active]:bg-[var(--primary)] data-[state=active]:font-medium hover:data-[state=inactive]:text-[var(--primary)] hover:data-[state=inactive]:bg-white"
            value="process"
          >
            Our Process
          </Tabs.Trigger>
          <Tabs.Trigger
            className="px-6 py-3 text-lg border-2 border-gray-400 bg-gray-400 data-[state=active]:pointer-events-none data-[state=active]:border-[var(--primary)] data-[state=active]:bg-[var(--primary)] data-[state=active]:font-medium hover:data-[state=inactive]:text-[var(--primary)] hover:data-[state=inactive]:bg-white"
            value="why"
          >
            Why Use Us
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="process" className="flex flex-col gap-8 px-4">
          <p className="text-2xl">
            Our process is tailored to the individual needs of the client but it
            will loosely follow this path:
          </p>
          <section>
            <h4 className="text-xl font-medium mb-2">Client Brief</h4>
            <p>
              In our initial meeting we will discuss your situation in depth so
              that we can understand your objectives, priorities and parameters
              from the outset. It may well be that the best solution to your
              search is not the one you had in mind and we will ensure you are
              exposed to any suitable alternatives. We also educate our clients
              in the nuances of the UK market, language and legal system so that
              you start with a clear understanding of what lies ahead.
            </p>
          </section>
          <section>
            <h4 className="text-xl font-medium mb-2">Area Orientation</h4>
            <p>
              London is a series of interconnected villages, each with its own
              identity. If you’re new to the city or uncertain about your target
              area, we will tour different areas and appraise their suitability
              together. People tend to stick to what they know and we’ve found
              over the years that an independent, objective view on all aspects
              of the search helps to question priorities and sense check
              decisions.
            </p>
          </section>
          <section>
            <h4 className="text-xl font-medium mb-2">Short Listing</h4>
            <p>
              We use our established network of agents to scour the areas for
              any properties which could fit the brief. In the new environment
              of broker agents, there are infinitely more sources of property
              than the main portals. This exhaustive process will ensure that
              all on and off-market options are vetted. Not only must the
              property be suitable for our clients but research into the
              vendor&apos;s position and motivation is also a key part of the
              filtering process. The end product is a shortlist of only the most
              suitable options to match your brief.
            </p>
          </section>
          <section>
            <h4 className="text-xl font-medium mb-2">Client Viewing</h4>
            <p>
              Let’s face it, this is the fun part. You may fall for the first
              property we see together but it can take longer to find
              perfection. The criteria can change once you see how reality lines
              up against your expectations and we keep a very open communication
              channel to ensure we are seeing the market through your eyes, even
              if brief alters. Everything is arranged in advance and you are
              accompanied on all viewings so that the feedback is instant,
              conversation fluid and time is used efficiently.
            </p>
          </section>
          <section>
            <h4 className="text-xl font-medium mb-2">
              Negotiation & Acquisition
            </h4>
            <p>
              We will handle the negotiation on your behalf using our experience
              to ensure we agree the most favourable terms. In most instances we
              would lead the conveyancing process, co-ordinating lawyers,
              surveyors and specialists to free up your time and keep the deal
              progressing effectively.
            </p>
          </section>
          <section>
            <h4 className="text-xl font-medium mb-2">Preparation & Move-in</h4>
            <p>
              From the full renovation of your property to simply cleaning it
              prior to moving in, moving a piano or setting up utilities for an
              easy move, there’s nothing that we and our network of vetted and
              trusted contractors can not do to help you with a smooth
              transition into your new property.
            </p>
          </section>
        </Tabs.Content>

        <Tabs.Content value="why" className="px-4">
          <h3 className="font-medium mb-4">Why Use Us</h3>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};

export default SearchAcquisitionPage;
