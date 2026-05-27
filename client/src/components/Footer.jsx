import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaRegCopyright } from "react-icons/fa";
import { MdEvent, MdLocationOn } from "react-icons/md";
import { HiArrowRight } from "react-icons/hi";

const Footer = () => {
  const eventCategories = [
    { label: "Hackathons", href: "/events/hackathon" },
    { label: "Cultural Fests", href: "/events/cultural-fest" },
    { label: "Workshops", href: "/events/workshop" },
    { label: "Online Events", href: "/events/online" },
    { label: "Offline Events", href: "/events/offline" },
  ];

  const quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ];

  const socials = [
    { icon: <FaFacebookF size={15} />, href: "#", label: "Facebook" },
    { icon: <FaTwitter size={15} />, href: "#", label: "Twitter" },
    { icon: <FaLinkedinIn size={15} />, href: "#", label: "LinkedIn" },
    { icon: <FaInstagram size={15} />, href: "#", label: "Instagram" },
  ];

  return (
    <footer
      style={{ backgroundColor: "#DFE9F4", color: "#333333" }}
      className="pt-12 pb-0"
    >
      {/* Top divider accent */}
      <div style={{ backgroundColor: "#054C73", height: "4px" }} className="w-full mb-12" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">

          {/* Brand Column */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <MdEvent size={28} style={{ color: "#054C73" }} />
              <span
                className="text-2xl font-bold tracking-tight"
                style={{ color: "#054C73", fontFamily: "'Georgia', serif", letterSpacing: "-0.5px" }}
              >
                AroundMe
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[#666666]" >
              Discover hackathons, cultural fests & workshops near you — or anywhere in the world.
            </p>

            {/* Social Icons */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-[#054C73]">
                Follow Us
              </p>
              <div className="flex gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 hover:scale-110"
                    style={{
                      backgroundColor: "#054C73",
                      color: "#F2F5FF",
                    }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = "#033a59"}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = "#054C73"}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Event Categories */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "#054C73" }}>
              Event Categories
            </p>
            <ul className="flex flex-col gap-3">
              {eventCategories.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm flex items-center gap-1.5 group transition-colors duration-150"
                    style={{ color: "#333333" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#054C73"}
                    onMouseLeave={e => e.currentTarget.style.color = "#333333"}
                  >
                    <HiArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                      style={{ color: "#054C73" }}
                    />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "#054C73" }}>
              Quick Links
            </p>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm flex items-center gap-1.5 group transition-colors duration-150"
                    style={{ color: "#333333" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#054C73"}
                    onMouseLeave={e => e.currentTarget.style.color = "#333333"}
                  >
                    <HiArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                      style={{ color: "#054C73" }}
                    />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "#054C73" }}>
              Stay Updated
            </p>
            <p className="text-sm mb-4" style={{ color: "#666666" }}>
              Get the latest events delivered to your inbox.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="text-sm px-4 py-2.5 rounded-md outline-none border focus:ring-2 transition-all"
                style={{
                  backgroundColor: "#F2F5FF",
                  borderColor: "#054C73",
                  color: "#333333",
                  focusRingColor: "#054C73",
                }}
              />
              <button
                className="text-sm font-semibold px-4 py-2.5 rounded-md transition-all duration-200 hover:opacity-90"
                style={{
                  backgroundColor: "#054C73",
                  color: "#F2F5FF",
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ backgroundColor: "#054C73" }} className="mt-2">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#DFE9F4] flex items-center gap-1">
            <FaRegCopyright /> {new Date().getFullYear()} EventSphere. All rights reserved.
          </p>
          <p className="text-xs flex items-center gap-1" style={{ color: "#DFE9F4" }}>
            <MdLocationOn size={13} />
            Made for event lovers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;