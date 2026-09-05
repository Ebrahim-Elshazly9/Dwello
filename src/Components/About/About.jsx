import React from "react";

const AboutSection = () => {
  const stats = [
    { value: "8K+", label: "Houses Available" },
    { value: "6K+", label: "Houses Sold" },
    { value: "2K+", label: "Trusted Agents" },
  ];

  return (
    <section
      id="service"
      className="w-full bg-[#FDF8F5] px-6 pt-28 pb-16 text-[#201510] md:px-16 lg:pt-36 lg:pb-24"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 lg:flex-row lg:gap-16">
        {/* Left Column: House Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80"
            alt="Modern Luxury Villa at Dusk"
            className="h-[380px] w-full rounded-3xl object-cover shadow-lg md:h-[450px]"
          />
        </div>

        {/* Right Column: Title, Description & Stats */}
        <div className="flex w-full flex-col items-start gap-6 text-left lg:w-1/2">
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            We Help You To Find <br /> Your Dream Home
          </h2>

          <p className="max-w-xl text-base font-medium leading-relaxed text-[#594A42] md:text-lg">
            From cozy cottages to luxurious estates, our dedicated team guides
            you through every step of the journey, ensuring your dream home
            becomes a reality.
          </p>

          <div className="mt-4 grid w-full grid-cols-3 gap-6 pt-4">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-start">
                <span className="text-3xl font-extrabold text-[#201510] md:text-4xl lg:text-5xl">
                  {stat.value}
                </span>
                <span className="mt-1 text-sm font-semibold text-[#594A42] md:text-base">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
