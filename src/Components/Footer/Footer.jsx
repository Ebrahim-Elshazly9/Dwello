import React from "react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="w-full bg-[#E6D7CD] px-6 py-16 text-[#201510] md:px-16"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {/* Brand Details */}
        <div className="flex flex-col gap-4 lg:col-span-1">
          <a
            href="/"
            className="flex items-center gap-2 text-2xl font-bold tracking-tight text-[#201510]"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="square"
              strokeLinejoin="miter"
            >
              <path d="M3 21V3h12" />
              <path d="M7 7h12v14" />
            </svg>
            <span>Dwello</span>
          </a>
          <p className="text-xs font-semibold leading-relaxed text-[#594A42]">
            Bringing you closer to your dream home, one click at a time.
          </p>
        </div>

        {/* Column 1: About */}
        <div className="flex flex-col gap-3">
          <h3 className="text-base font-bold text-[#201510]">About</h3>
          <ul className="flex flex-col gap-2 text-xs font-semibold text-[#594A42]">
            <li>
              <a href="#" className="transition-opacity hover:opacity-70">
                Our Story
              </a>
            </li>
            <li>
              <a href="#" className="transition-opacity hover:opacity-70">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="transition-opacity hover:opacity-70">
                Our Team
              </a>
            </li>
            <li>
              <a href="#" className="transition-opacity hover:opacity-70">
                Resources
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2: Support */}
        <div className="flex flex-col gap-3">
          <h3 className="text-base font-bold text-[#201510]">Support</h3>
          <ul className="flex flex-col gap-2 text-xs font-semibold text-[#594A42]">
            <li>
              <a href="#" className="transition-opacity hover:opacity-70">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="transition-opacity hover:opacity-70">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="transition-opacity hover:opacity-70">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="transition-opacity hover:opacity-70">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Find Us */}
        <div className="flex flex-col gap-3">
          <h3 className="text-base font-bold text-[#201510]">Find Us</h3>
          <ul className="flex flex-col gap-2 text-xs font-semibold text-[#594A42]">
            <li>
              <a href="#" className="transition-opacity hover:opacity-70">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="transition-opacity hover:opacity-70">
                Locations
              </a>
            </li>
            <li>
              <a href="#" className="transition-opacity hover:opacity-70">
                Newsletter
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Our Social */}
        <div className="flex flex-col gap-3">
          <h3 className="text-base font-bold text-[#201510]">Our Social</h3>
          <ul className="flex flex-col gap-3 text-xs font-semibold text-[#594A42]">
            <li>
              <a
                href="#"
                className="flex items-center gap-2 transition-opacity hover:opacity-70"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 transition-opacity hover:opacity-70"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 transition-opacity hover:opacity-70"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
                <span>Twitter (x)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
