
const FooterSection = () => {
  const links = {
    Links: ['Home', 'Features', 'Pricing', 'Faqs'],
    Info: ['About Us', 'Contact', 'Privacy - Policy', 'Terms & Conditions', 'Refund Cancellation'],
    Follow: ['Facebook', 'Instagram', 'LinkedIn']
  };

  const socialIcons = {
    Facebook: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    Instagram: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    LinkedIn: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  };

  return (
    <footer className="bg-[#f1fbfb] py-10 md:py-14 px-4">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        
        {/* Top Area - Logo + Columns */}
        <div className="md:flex md:items-start md:justify-between">
          
          {/* Left Block - Brand */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-lg bg-emerald-400 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-content" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" opacity="0.5"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                </svg>
              </div>
              <span className="ml-3 text-xl font-bold text-slate-800">Proshno Bank</span>
            </div>
            <p className="text-sm text-slate-700 mt-4 max-w-xs">
              Proshno Bank - Manage Your Exam Question
            </p>
          </div>

          {/* Right Block - 3 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            
            {/* Links Column */}
            <div>
              <h3 className="text-emerald-500 font-semibold mb-3 text-sm uppercase tracking-wider">
                Links
              </h3>
              <ul className="space-y-2">
                {links.Links.map((item, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-slate-700 text-sm hover:text-emerald-500 cursor-pointer transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info Column */}
            <div>
              <h3 className="text-emerald-500 font-semibold mb-3 text-sm uppercase tracking-wider">
                Info
              </h3>
              <ul className="space-y-2">
                {links.Info.map((item, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-slate-700 text-sm hover:text-emerald-500 cursor-pointer transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Column */}
            <div>
              <h3 className="text-emerald-500 font-semibold mb-3 text-sm uppercase tracking-wider">
                Follow
              </h3>
              <ul className="space-y-3">
                {links.Follow.map((platform, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="flex items-center gap-2 text-sm text-slate-700 hover:text-emerald-500 cursor-pointer transition-colors duration-200 group"
                    >
                      <span className="text-emerald-500 group-hover:text-emerald-600 transition-colors duration-200">
                        {socialIcons[platform]}
                      </span>
                      {platform}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 mt-6 pt-6">
          
          {/* Bottom Bar - Copyright */}
          <div className="text-xs md:text-sm text-slate-500 text-center">
            © 2025 <span className="font-semibold text-slate-700">WB Softwares Teams</span>. All Rights Reserved
          </div>

        </div>

      </div>
    </footer>
  );
};

export default FooterSection;