import { useEffect, useState } from 'react';

const PricingSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const features = [
    '15 Analytics Campaign',
    'Unlimited Site licenses',
    '1 Database',
    '10 Free Optimization',
    'Html5 + Css3',
    '24/7 Customer Support',
    'Advanced API Access'
  ];

  const bulletPoints = [
    'No hidden fees or extra charges',
    'Cancel anytime with no questions asked',
    '30-day money-back guarantee',
    'Access to all future updates',
    'Priority customer support'
  ];

  const plans = [
    {
      name: 'BASIC',
      price: '$22',
      period: 'per month',
      features: features.slice(0, 4),
      isPrimary: false,
      color: 'blue',
      description: 'Perfect for individuals'
    },
    {
      name: 'PREMIUM',
      price: '$55',
      period: 'per month',
      features: features,
      isPrimary: true,
      color: 'emerald',
      description: 'Most popular choice'
    },
    {
      name: 'ENTERPRISE',
      price: '$99',
      period: 'per month',
      features: [...features, 'Custom Solutions', 'Dedicated Manager'],
      isPrimary: false,
      color: 'purple',
      description: 'For large businesses'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {setActiveIndex((prev) => (prev + 1) % plans.length);}, 2000);
    return () => clearInterval(interval);
  }, [plans.length]);

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  const getCardPosition = (index) => {
    if (index === activeIndex) {
      return 'z-20 scale-100 translate-x-0';
    } else if (index === (activeIndex + 1) % plans.length) {
      return 'z-10 scale-90 translate-x-1/3 md:translate-x-1/4 opacity-0';
    } else {
      return 'z-0 scale-90 -translate-x-1/3 md:-translate-x-1/4 opacity-0';
    }
  };

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="lg:w-2/5">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-400 mb-8">
              <svg className="w-6 h-6 text-primary-content" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Choose Affordable Prices
            </h1>
            <p className="text-lg text-slate-500 mb-10">
              Select the perfect plan that fits your needs and budget. All plans include core features with transparent pricing and no surprises.
            </p>
            <div className="space-y-4">
              {bulletPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-slate-600">{point}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-center lg:justify-start space-x-3 mt-8">
              {plans.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex
                    ? 'bg-emerald-400 scale-125'
                    : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                  aria-label={`Go to plan ${index + 1}`}
                />
              ))}
            </div>
          </div>


          <div className="lg:w-3/5 relative h-[600px] md:h-[650px]">
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]">
              <div className="absolute inset-0 border-4 border-emerald-400/20 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-8 border-4 border-emerald-400/10 rounded-full animate-spin-reverse"></div>
              <div className="absolute inset-16 bg-emerald-400/5 rounded-full"></div>
            </div>

            {/* Cards Container */}
            <div className="relative h-full flex items-center justify-center">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className={`
                    absolute w-full max-w-md cursor-pointer
                    transition-all duration-500 ease-in-out
                    ${getCardPosition(index)}
                    ${index === activeIndex ? 'hover:scale-105' : 'hover:opacity-100'}
                  `}
                >
                  <div className="bg-base-200 rounded-3xl shadow-xl p-8 md:p-10">
                    {/* Plan Badge */}
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
                      Monthly Package
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                      <span className="text-5xl md:text-6xl font-bold text-slate-900">{plan.price}</span>
                      <span className="text-slate-500 ml-2">/month</span>
                    </div>

                    {/* Plan Name */}
                    <div className="mb-4">
                      <span className={`text-xl font-bold uppercase tracking-widest ${plan.color === 'emerald' ? 'text-emerald-400' :
                        plan.color === 'blue' ? 'text-blue-400' :
                          'text-purple-400'
                        }`}>
                        {plan.name}
                      </span>
                      <p className="text-slate-500 text-sm mt-1">{plan.description}</p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <svg className={`w-5 h-5 flex-shrink-0 ${plan.color === 'emerald' ? 'text-emerald-400' :
                            plan.color === 'blue' ? 'text-blue-400' :
                              'text-purple-400'
                            }`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          <span className="text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button className={`
                      w-full py-4 px-6 rounded-full font-semibold text-primary-content
                      transition-all duration-300
                      ${index === activeIndex
                        ? plan.color === 'emerald' ? 'bg-emerald-500 hover:bg-emerald-600' :
                          plan.color === 'blue' ? 'bg-blue-500 hover:bg-blue-600' :
                            'bg-purple-500 hover:bg-purple-600'
                        : plan.color === 'emerald' ? 'bg-emerald-400 hover:bg-emerald-500' :
                          plan.color === 'blue' ? 'bg-blue-400 hover:bg-blue-500' :
                            'bg-purple-400 hover:bg-purple-500'
                      }
                      hover:-translate-y-0.5 hover:shadow-xl
                    `}>
                      Purchase Now
                    </button>

                    {/* Active indicator */}
                    {index === activeIndex && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <div className="bg-emerald-400 text-primary-content text-xs font-bold px-4 py-1 rounded-full">
                          MOST POPULAR
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows for Desktop */}
            <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between px-4">
              <button
                onClick={() => setActiveIndex((activeIndex - 1 + plans.length) % plans.length)}
                className="w-12 h-12 rounded-full bg-base-200 shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
              >
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <button
                onClick={() => setActiveIndex((activeIndex + 1) % plans.length)}
                className="w-12 h-12 rounded-full bg-base-200 shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
              >
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden justify-center space-x-6 mt-8">
          <button
            onClick={() => setActiveIndex((activeIndex - 1 + plans.length) % plans.length)}
            className="w-12 h-12 rounded-full bg-base-200 shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
          >
            <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button
            onClick={() => setActiveIndex((activeIndex + 1) % plans.length)}
            className="w-12 h-12 rounded-full bg-base-200 shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
          >
            <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>

        {/* Custom animation keyframes */}
        <style jsx>{`
          @keyframes spin-slow {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg); }
          }
          @keyframes spin-reverse {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(-360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
          .animate-spin-reverse {
            animation: spin-reverse 15s linear infinite;
          }
        `}</style>
      </div>
    </section>
  );
};

export default PricingSection;