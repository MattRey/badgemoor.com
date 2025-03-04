import HorizontalRule from "../HorizontalRule";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-16 items-center">
      <h2 className="text-4xl text-center">
        Navigating the London property market is no easy task.
      </h2>
      <HorizontalRule />
      <p className="text-xl max-w-3xl">
        Whether finding your dream home, helping your family onto the property
        ladder or creating and managing your rental portfolio - the benefits of
        objective, considered advice can not be understated.
        <br />
        <br />
        With Badgemoor, you have the expert in your corner listening to your
        individual needs. We know that when it comes to property, one size does
        not fit all and we tailor personalised plans to suit you, taking away
        the stress and giving clarity of direction.
        <br />
        <br />
        Please get in touch, we&apos;d love to hear from you and see how we can
        help.
      </p>
    </div>
  );
};

export default HomePage;
