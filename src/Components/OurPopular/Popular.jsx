import React from "react";
import { MapPin, Bed, Maximize } from "lucide-react";

const PopularResidences = () => {
  const residences = [
    {
      id: 1,
      location: "San Francisco, California",
      rooms: "4 Rooms",
      size: "3,500 sq ft",
      price: "$2,500,000",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      location: "Beverly Hills, California",
      rooms: "3 Rooms",
      size: "1,500 sq ft",
      price: "$850,000",
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      location: "Palo Alto, California",
      rooms: "6 Rooms",
      size: "4,000 sq ft",
      price: "$3,700,000",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section
      id="agents"
      className="w-full bg-[#FDF8F5] px-6 py-20 text-[#201510] md:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex w-full flex-col items-center text-center">
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Our Popular Residences
          </h2>
        </div>

        <div className="mt-14 grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {residences.map((residence) => (
            <div
              key={residence.id}
              className="group flex flex-col overflow-hidden rounded-3xl bg-[#E6D7CD] shadow-sm transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div className="h-64 w-full overflow-hidden">
                <img
                  src={residence.image}
                  alt={residence.location}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col gap-4 p-6">
                <div className="flex items-center gap-2 text-[#201510]">
                  <MapPin size={20} className="fill-[#201510] text-[#E6D7CD]" />
                  <span className="text-lg font-bold">
                    {residence.location}
                  </span>
                </div>

                <div className="flex items-center gap-6 text-sm font-semibold text-[#594A42]">
                  <div className="flex items-center gap-2">
                    <Bed size={18} />
                    <span>{residence.rooms}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Maximize size={18} />
                    <span>{residence.size}</span>
                  </div>
                </div>

                <div className="mt-2 flex items-center justify-between border-t border-[#D9C7BB] pt-4">
                  <button className="rounded-xl bg-[#201510] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#33231b] active:scale-95">
                    Sign up
                  </button>
                  <span className="text-xl font-extrabold text-[#201510]">
                    {residence.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularResidences;
