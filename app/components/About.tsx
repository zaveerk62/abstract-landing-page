const aboutFeatures = [
  {
    number: '01',
    title: 'Track company-wide progress',
    description:
      'See how your day-to-day tasks fit the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.',
  },
  {
    number: '02',
    title: 'Advanced built-in reports',
    description:
      'Set interval delivery estimates and track progress towards company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.',
  },
  {
    number: '03',
    title: 'Everything you need in one place',
    description:
      'Stop jumping from one place to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.',
  },
];

const About = () => {
  return (
    <section className="py-12 lg:py-24 lg:flex lg:justify-between lg:container mx-auto">
      <div className="text-center lg:mt-10 lg:text-left lg:max-w-xl">
        <h2 className="text-[36px] text-blue font-bold px-8 lg:px-0">What's different about Manage?</h2>
        <p className="text-base text-grayBlue mt-4 px-4 lg:px-0 lg:max-w-md tracking-tight leading-loose md:mt-6 md:text-xl md:tracking-normal">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div className='pt-10 lg:max-w-xl'>
        {aboutFeatures.map((feature) => (
          <div key={feature.number} className='px-8 py-8'>
            <div className="flex items-center justify-center">
            <div className="inline-flex gap-8 items-center rounded-3xl bg-paleRed lg:bg-transparent w-full">
            <span className="bg-red rounded-3xl px-6 py-2 text-white font-medium">{feature.number}</span>
            <h3 className="text-center text-blue font-bold">{feature.title}</h3>
            </div>
            </div>
            <p className="text-md text-grayBlue mt-6 leading-relaxed lg:ml-20">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
