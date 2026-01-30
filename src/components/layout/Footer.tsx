import Link from "next/link";

export const Footer = () => {
  const footerLinks = {
    company: [
      { href: "#", label: "About" },
      { href: "#", label: "Features" },
      { href: "#", label: "Works" },
      { href: "#", label: "Career" },
    ],
    help: [
      { href: "#", label: "Customer Support" },
      { href: "#", label: "Delivery Details" },
      { href: "#", label: "Terms & Conditions" },
      { href: "#", label: "Privacy Policy" },
    ],
    faq: [
      { href: "#", label: "Account" },
      { href: "#", label: "Manage Deliveries" },
      { href: "#", label: "Orders" },
      { href: "#", label: "Payments" },
    ],
    resources: [
      { href: "#", label: "Free eBooks" },
      { href: "#", label: "Development Tutorial" },
      { href: "#", label: "How to - Blog" },
      { href: "#", label: "Youtube Playlist" },
    ],
  };

  const socialIcons = [
    {
      name: "Twitter",
      path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
    },
    {
      name: "Facebook",
      path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
    },
    {
      name: "Instagram",
      path: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 19.5h11a3 3 0 003-3v-11a3 3 0 00-3-3h-11a3 3 0 00-3 3v11a3 3 0 003 3z",
    },
    {
      name: "GitHub",
      path: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22",
    },
  ];

  const paymentMethods = ["Visa", "Mastercard", "PayPal", "Apple Pay", "Google Pay"];

  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="bg-black rounded-2xl p-6 md:p-10 mb-12 -mt-24 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <h3 className="text-white text-2xl md:text-4xl font-bold max-w-md text-center md:text-left">
              STAY UP TO DATE ABOUT OUR LATEST OFFERS
            </h3>
            <div className="w-full md:w-auto flex flex-col gap-3">
              <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full md:w-80 pl-12 pr-4 py-3 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Email address for newsletter"
                />
              </div>
              <button
                type="button"
                className="w-full bg-white text-black font-medium py-3 px-6 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Subscribe to newsletter"
                tabIndex={0}
              >
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-2xl font-bold mb-4 block">
              SHOP.CO
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              We have clothes that suits your style and which you&apos;re proud to wear. From women to men.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {socialIcons.map((icon) => (
                <a
                  key={icon.name}
                  href="#"
                  className="w-9 h-9 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all"
                  aria-label={icon.name}
                  tabIndex={0}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={icon.path}
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-600 text-sm hover:text-black transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Help
            </h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-600 text-sm hover:text-black transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
              FAQ
            </h4>
            <ul className="space-y-3">
              {footerLinks.faq.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-600 text-sm hover:text-black transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-600 text-sm hover:text-black transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div className="flex items-center gap-3">
            {paymentMethods.map((method) => (
              <div
                key={method}
                className="w-12 h-8 bg-white rounded border border-gray-200 flex items-center justify-center"
                aria-label={method}
              >
                <span className="text-xs font-medium text-gray-600">
                  {method.slice(0, 2)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
