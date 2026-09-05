import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin, Home, DollarSign, Search, ChevronDown } from "lucide-react";

// Stagger animation variants for dropdown list items
const itemVariants = {
  open: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      delay: i * 0.04,
    },
  }),
  closed: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.15 },
  },
};

// Reusable Motion Dropdown Component matching the Dwello styling
const AnimatedDropdown = ({
  label,
  options,
  selected,
  onSelect,
  icon: Icon,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full">
      {/* Dropdown Toggle Button */}
      <motion.button
        type="button"
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-xl bg-[#FDF8F5] px-4 py-3.5 text-[#201510] outline-none"
      >
        <div className="flex items-center gap-2 truncate">
          <span className="text-sm font-semibold md:text-base">
            {selected || label}
          </span>
        </div>

        <div className="flex items-center gap-2 text-[#594A42]">
          <Icon size={18} />
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            style={{ originX: 0.55 }}
          >
            <ChevronDown size={16} />
          </motion.div>
        </div>
      </motion.button>

      {/* Animated Dropdown Menu */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.ul
            key="dropdown-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              open: {
                height: "auto",
                opacity: 1,
                transition: {
                  duration: 0.25,
                  when: "beforeChildren",
                },
              },
              closed: {
                height: 0,
                opacity: 0,
                transition: {
                  duration: 0.15,
                  when: "afterChildren",
                },
              },
            }}
            style={{ overflow: "hidden" }}
            className="absolute left-0 top-full z-30 mt-2 flex w-full flex-col gap-1 rounded-xl bg-[#FDF8F5] p-2 shadow-xl border border-stone-200/50"
          >
            {options.map((item, index) => (
              <motion.li
                key={index}
                custom={index}
                variants={itemVariants}
                onClick={() => {
                  onSelect(item);
                  setIsOpen(false);
                }}
                className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-[#201510] transition-colors hover:bg-[#E6D7CD] active:bg-[#D9C7BB]"
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

const HeroSection = () => {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching properties:", {
      location,
      propertyType,
      priceRange,
    });
  };

  return (
    <section className="relative w-full bg-[#FDF8F5] px-6 pt-12 pb-32 text-[#201510] md:px-16 lg:pt-16 lg:pb-40">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 lg:flex-row lg:gap-8">
        {/* Left Column Text */}
        <div className="flex max-w-xl flex-col items-start gap-6 text-left">
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Find Your <br /> Dream Home
          </h1>

          <p className="max-w-md text-base font-medium leading-relaxed text-[#594A42] md:text-lg">
            Explore our curated selection of exquisite properties meticulously
            tailored to your unique dream home vision
          </p>

          <button className="rounded-xl bg-[#201510] px-8 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-[#33231b] active:scale-95">
            Sign up
          </button>
        </div>

        {/* Right Column Image */}
        <div className="relative w-full max-w-2xl lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
            alt="Modern luxury Villa"
            className="h-auto w-full rounded-2xl object-cover shadow-xl"
          />
        </div>
      </div>

      {/* Floating Search Bar with Framer Motion Dropdowns */}
      <form
        onSubmit={handleSearch}
        className="absolute left-1/2 -bottom-20 w-[90%] max-w-5xl -translate-x-1/2 rounded-2xl bg-[#E6D7CD] p-4 shadow-xl md:-bottom-12 md:p-6"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:items-center">
          {/* Location Dropdown */}
          <AnimatedDropdown
            label="Location"
            selected={location}
            onSelect={setLocation}
            options={[
              "New York, NY",
              "Los Angeles, CA",
              "Miami, FL",
              "Chicago, IL",
            ]}
            icon={MapPin}
          />

          {/* Property Type Dropdown */}
          <AnimatedDropdown
            label="Type"
            selected={propertyType}
            onSelect={setPropertyType}
            options={["Villa", "Apartment", "House", "Penthouse"]}
            icon={Home}
          />

          {/* Price Range Dropdown */}
          <AnimatedDropdown
            label="Price Range"
            selected={priceRange}
            onSelect={setPriceRange}
            options={["$100k - $300k", "$300k - $600k", "$600k - $1M", "$1M+"]}
            icon={DollarSign}
          />

          {/* Search Button */}
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#201510] py-3.5 font-semibold text-white transition-all hover:bg-[#33231b] active:scale-95"
          >
            <Search size={18} />
            <span>Search</span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default HeroSection;
