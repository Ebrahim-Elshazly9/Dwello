import React, { useState } from "react";
import { CheckCircle2, Mail } from "lucide-react";

const HelpSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting email:", email);
  };

  return (
    <section className="w-full bg-[#FDF8F5] px-6 py-20 text-[#201510] md:px-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
        {/* Title */}
        <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          Do You Have Any Questions? <br /> Get Help From Us
        </h2>

        {/* Feature Highlights */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-8 font-semibold text-[#201510]">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} strokeWidth={2.2} />
            <span>Chat live with our support team</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} strokeWidth={2.2} />
            <span>Browse our FAQ</span>
          </div>
        </div>

        {/* Form Input */}
        <form
          onSubmit={handleSubmit}
          className="mt-10 flex w-full max-w-xl flex-col items-center gap-3 sm:flex-row"
        >
          <div className="relative flex w-full items-center">
            <Mail size={18} className="absolute left-4 text-[#594A42]" />
            <input
              type="email"
              required
              placeholder="Enter your email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl bg-[#E6D7CD] py-3.5 pr-4 pl-11 text-sm font-medium text-[#201510] placeholder-[#594A42] outline-none transition-all focus:ring-2 focus:ring-[#201510]"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-[#201510] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#33231b] active:scale-95 sm:w-auto"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default HelpSection;
