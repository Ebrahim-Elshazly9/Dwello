import React from "react";
import { MapPin, UserCheck, ClipboardList, Handshake } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: MapPin,
      title: "Expert Guidance",
      description:
        "Benefit from our team's seasoned expertise for a smooth buying experience",
    },
    {
      icon: UserCheck,
      title: "Personalized Service",
      description:
        "Our services adapt to your unique needs, making your journey stress-free",
    },
    {
      icon: ClipboardList,
      title: "Transparent Process",
      description:
        "Stay informed with our clear and honest approach to buying your home",
    },
    {
      icon: Handshake,
      title: "Exceptional Support",
      description:
        "Providing peace of mind with our responsive and attentive customer service",
    },
  ];

  return (
    <section className="w-full bg-[#FDF8F5] px-6 py-20 text-[#201510] md:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex w-full flex-col items-center text-center">
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Why Choose Us
          </h2>
          <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-[#594A42] md:text-lg">
            Elevating Your Home Buying Experience with Expertise, Integrity, and
            Unmatched Personalized Service
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-start justify-between rounded-2xl bg-[#E6D7CD] p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#FDF8F5] text-[#201510] shadow-xs">
                    <Icon size={26} strokeWidth={2} />
                  </div>
                  <h3 className="mt-8 text-xl font-bold text-[#201510]">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-[#594A42]">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
