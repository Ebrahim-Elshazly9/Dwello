import React from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ahmed",
      location: "San Francisco",
      rating: "5.0",
      comment:
        "Dwello truly cares about their clients. They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are unmatched.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      roomImage:
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      location: "San Diego",
      rating: "4.5",
      comment:
        "I had a fantastic experience working with Dwello. Their expertise and personalized service exceeded my expectations. I found my dream home quickly and smoothly. Highly recommended!",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      roomImage:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Emily Johnson",
      location: "Los Angeles",
      rating: "5.0",
      comment:
        "Dwello made my dream of owning a home a reality! Their team provided exceptional support and guided me through every step of the process. I couldn't be happier with my new home!",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
      roomImage:
        "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="w-full bg-[#FDF8F5] px-6 py-20 text-[#201510] md:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <div className="flex w-full flex-col items-center text-center">
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            What People Say <br /> About Dwello
          </h2>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="mt-14 grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="flex flex-col overflow-hidden rounded-3xl bg-[#E6D7CD] shadow-sm transition-transform duration-300 hover:-translate-y-1.5"
            >
              {/* Room Image */}
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={item.roomImage}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Card Body */}
              <div className="flex flex-col gap-4 p-6">
                {/* User Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="h-12 w-12 rounded-full object-cover border-2 border-[#FDF8F5]"
                    />
                    <div>
                      <h3 className="text-base font-bold text-[#201510]">
                        {item.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#594A42]">
                        {item.location}
                      </p>
                    </div>
                  </div>

                  {/* Rating Badge */}
                  <div className="flex items-center gap-1 rounded-md bg-[#FDF8F5] px-2.5 py-1 shadow-xs">
                    <Star size={14} className="fill-[#F0B70D] text-[#F0B70D]" />
                    <span className="text-xs font-extrabold text-[#201510]">
                      {item.rating}
                    </span>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-xs font-medium leading-relaxed text-[#594A42] md:text-sm">
                  {item.comment}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            aria-label="Previous testimonial"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#201510] text-white transition-all hover:bg-[#33231b] active:scale-95"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            aria-label="Next testimonial"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#201510] text-white transition-all hover:bg-[#33231b] active:scale-95"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
