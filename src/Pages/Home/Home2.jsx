
const FeatureIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" aria-hidden>
        <g clipPath="url(#clip0_66_162)">
            <path
                d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z"
                fill="#FFE9E9"
            />
            <path
                d="M67.94 51.28C65.02 48.22 61.32 45.9 57.16 44.64L49.8699 49.73L43.02 44.59C38.81 45.83 35.05 48.16 32.09 51.26C30.06 53.38 28.95 56.22 28.95 59.15V65.8C28.95 67.91 30.66 69.62 32.77 69.62H36.81L37.18 73H62.8499L63.22 69.62H67.26C69.37 69.62 71.08 67.91 71.08 65.8V59.15C71.08 56.22 69.9699 53.4 67.9599 51.28H67.94Z"
                fill="#FFCCCC"
            />
            <path
                d="M50 42.4C55.3572 42.4 59.7001 38.0572 59.7001 32.7C59.7001 27.3428 55.3572 23 50 23C44.6429 23 40.3 27.3428 40.3 32.7C40.3 38.0572 44.6429 42.4 50 42.4Z"
                fill="#FFCCCC"
            />
            <path
                d="M69.0199 50.25C65.8799 46.95 61.9199 44.52 57.5799 43.21C57.1399 43.08 56.6699 43.15 56.2899 43.42L49.8899 47.89L43.9099 43.4C43.5299 43.12 43.0399 43.03 42.5899 43.16C38.1899 44.45 34.1799 46.9 30.9999 50.24C28.7099 52.64 27.4399 55.81 27.4399 59.16V65.81C27.4399 68.74 29.8299 71.13 32.7599 71.13H35.4599L35.6799 73.17C35.7599 73.93 36.4099 74.51 37.1699 74.51H62.8399C63.6099 74.51 64.2499 73.93 64.3299 73.17L64.5499 71.13H67.2499C70.1799 71.13 72.5699 68.74 72.5699 65.81V59.16C72.5699 55.81 71.3099 52.65 69.0299 50.25H69.0199ZM38.5099 71.5L36.7799 55.51H63.2199L61.4899 71.5H38.5099ZM69.5599 65.8C69.5599 67.08 68.5199 68.12 67.2399 68.12H64.8699L66.3799 54.18C66.4299 53.76 66.2899 53.33 65.9999 53.02C65.7199 52.7 65.3099 52.52 64.8799 52.52H35.0899C34.6599 52.52 34.2599 52.7 33.9699 53.02C33.6899 53.34 33.5499 53.76 33.5899 54.18L35.0999 68.12H32.7299C31.4499 68.12 30.4099 67.08 30.4099 65.8V59.15C30.4099 56.57 31.3799 54.14 33.1399 52.3C35.7899 49.53 39.0799 47.44 42.6999 46.25L48.9399 50.93C49.4599 51.32 50.1699 51.33 50.6999 50.96L57.3899 46.3C60.9599 47.5 64.2199 49.57 66.8399 52.32C68.5899 54.15 69.5499 56.58 69.5499 59.16V65.81L69.5599 65.8Z"
                fill="#FC6A6B"
            />
            <path
                d="M50 43.89C56.17 43.89 61.2001 38.87 61.2001 32.69C61.2001 26.51 56.18 21.49 50 21.49C43.82 21.49 38.8 26.51 38.8 32.69C38.8 38.87 43.82 43.89 50 43.89ZM50 24.5C54.5201 24.5 58.2001 28.18 58.2001 32.7C58.2001 37.22 54.5201 40.9 50 40.9C45.48 40.9 41.8 37.22 41.8 32.7C41.8 28.18 45.48 24.5 50 24.5Z"
                fill="#FC6A6B"
            />
            <path
                d="M50 61.01C48.62 61.01 47.5 62.13 47.5 63.51C47.5 64.89 48.62 66.01 50 66.01C51.38 66.01 52.5 64.89 52.5 63.51C52.5 62.13 51.38 61.01 50 61.01ZM50 64.01C49.72 64.01 49.5 63.79 49.5 63.51C49.5 63.23 49.72 63.01 50 63.01C50.28 63.01 50.5 63.23 50.5 63.51C50.5 63.79 50.28 64.01 50 64.01Z"
                fill="#FC6A6B"
            />
        </g>
        <defs>
            <clipPath id="clip0_66_162">
                <rect width="100" height="100" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

const features = [
    {
        id: 1,
        title: 'Recruit Smarter with AI',
        description:
            'factoHR provides AI-powered tools to parse resumes, source promising talent, generate job descriptions, and recommend tailored interview questions, ensuring efficient hiring decisions.',
    },
    {
        id: 2,
        title: 'Streamlined Requisition Workflow',
        description:
            'Raise requisitions, route approvals, and create job openings from one unified platform — replace paper forms and email chains with automated workflows.',
    },
    {
        id: 3,
        title: 'Reduce Manual Errors',
        description:
            'Automated job posting and validation reduce manual mistakes and accelerate time-to-hire.',
    },
];

const AccordionItem = ({ title, children, open = false }) => (
    <div className="mt-4 mr-0 md:mr-10 border-b accordion-item">
        <button
            type="button"
            aria-expanded={open}
            className="w-full flex justify-between items-center cursor-pointer accordion-header py-3"
        >
            <h3 className="text-[20px] font-bold text-left">{title}</h3>
            <svg className="accordion-icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" aria-hidden>
                <path d="M12 13.415L6.408 19 5 17.58 10.59 12 5 6.42 6.408 5 12 10.585 17.592 5 19 6.42 13.408 12 19 17.58 17.592 19 12 13.415Z" />
            </svg>
        </button>
        <div className="accordion-wrapper h-auto overflow-hidden transition-all duration-300">
            <p className="text-[16px] mt-2 accordion-text">{children}</p>
        </div>
    </div>
);

const Home2 = () => {
    return (
        <div className="space-y-14 w-full overflow-hidden bg-base-100">
            <section
                className="relative min-h-[calc(100vh-120px)] py-4 sm:py-0 flex items-center justify-center overflow-hidden"
                aria-label="Hero section"
            >
                <div
                    className="absolute inset-0 z-0"
                    style={{ animation: 'scalePulse 10s ease-in-out infinite' }}
                    aria-hidden
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ background: 'linear-gradient(180deg, #e6f0ff 0, rgba(230, 240, 255, 0) 100%)' }}
                    />
                </div>

                <div data-aos="fade-up" data-aos-duration="2000" className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="lg:w-1/2 text-primary-content space-y-4 relative z-10 h-full bg-base-200/10 backdrop-blur-lg rounded-2xl p-6">
                            <h1 className="text-md lg:text-xl xl:text-[30px] font-bold leading-tight text-center lg:text-left text-primary-content">
                                দেশের অন্যতম সমৃদ্ধ শিক্ষাবিষয়ক প্রশ্ন–ব্যবস্থাপনা প্ল্যাটফর্ম—
                            </h1>
                            <p className="text-[18px]">
                                যেখানে প্রশ্ন, শীট, সাজেশন এবং অনলাইন পরীক্ষা তৈরি করা যায় অত্যন্ত সহজে ও দক্ষভাবে।
                            </p>

                            <h1 className="text-md lg:text-xl xl:text-[30px] font-bold leading-tight text-center lg:text-left text-primary-content">
                                শিক্ষার্থীদের জন্য রয়েছে উন্নত প্রস্তুতির স্মার্ট সমাধান—
                            </h1>
                            <p className="text-[18px]">
                                ইন্টারঅ্যাকটিভ প্রশ্নব্যাংক, সেলফ টেস্ট এবং মডেল টেস্টের মাধ্যমে ধারাবাহিক অনুশীলন ও মূল্যায়ন।
                            </p>
                            <div className="flex-1 pl-4">
                                <h1 className="pb-3">এই প্ল্যাটফর্মে আপনি পাবেন:</h1>
                                <ul className="text-primary-content text-left space-y-1">
                                    <li>1. কাস্টম প্রশ্ন, শীট ও সাজেশন তৈরি</li>
                                    <li>অনলাইন পরীক্ষা তৈরি ও পরিচালনা</li>
                                    <li>বোর্ড পরীক্ষার স্মার্ট প্রশ্নব্যাংক</li>
                                    <li>ভর্তি পরীক্ষার প্রশ্নসংগ্রহ</li>
                                    <li>টেস্টপেপার ও মূল বইয়ের সমাধান</li>
                                    <li>আনলিমিটেড রিডিং টেস্ট</li>
                                    <li>সেলফ টেস্ট ও মডেল টেস্ট</li>
                                </ul>
                            </div>

                            <div className="flex flex-col lg:flex-row items-center gap-5">
                                <a
                                    href="/schedule-demo/"
                                    className="new-btn w-full lg:w-fit inline-flex items-center justify-center"
                                    role="button"
                                >
                                    Request Free Trial
                                    <span className="ml-2" aria-hidden>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                                <rect width="24" height="24" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0)">
                                                <path
                                                    d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z"
                                                    fill="white"
                                                />
                                            </g>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>

                        <div className="bg-base-200/10 backdrop-blur-lg lg:w-1/2 h-full rounded-2xl z-10 overflow-hidden">
                            <img
                                width="100%"
                                height="100%"
                                src="https://factohr-1a56a.kxcdn.com/wp-content/themes/factohr-theme/images/new/products/recruitment/recruitment.webp"
                                alt="FactoHR recruitment product preview"
                                className="rounded-2xl object-cover w-full h-full"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* FACTOHR ADVANTAGE */}
            <section aria-labelledby="advantage-heading">
                <div className="container mx-auto px-4">
                    <div className="space-y-8 lg:space-y-12">
                        <div className="text-center space-y-4">
                            <p
                                className="text-[20px] text-primary-content text-muted-foreground max-w-2xl mx-auto"
                                data-aos="fade-left"
                                data-aos-duration="2000"
                            >
                                FACTOHR ADVANTAGE
                            </p>
                            <h2
                                id="advantage-heading"
                                className="text-[28px] text-primary-content md:text-3xl font-bold text-foreground"
                                data-aos="fade-right"
                                data-aos-duration="2000"
                            >
                                One-Stop Recruitment Software for Your Hiring Needs
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {features.map((f) => (
                                <article key={f.id} className="bg-base-300 rounded-md p-10" aria-labelledby={`feature-${f.id}`}>
                                    <FeatureIcon />
                                    <h3 id={`feature-${f.id}`} className="text-[20px] text-primary-content font-bold mt-4 mb-2">
                                        {f.title}
                                    </h3>
                                    <p className="text-primary-content">{f.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container mx-auto py-12">
                    <div className="md:flex justify-center gap-8 items-start">
                        <div className="p-5 text-primary-content max-w-2xl">
                            <h4 className="text-[24px] font-bold mb-4">Manpower Requisition</h4>
                            <h2 className="text-[28px] font-semibold mb-2">Replace Your Physical Forms</h2>

                            <p className="text-[18px]">
                                factoHR’s online requisition system allows managers to raise requisitions, get approvals, and
                                post job openings in just a few clicks without leaving the platform — saving time and effort.
                            </p>

                            <AccordionItem title="Raise Requisitions" open>
                                Managers from different departments can raise requisitions for new or existing positions directly
                                from the platform.
                            </AccordionItem>

                            <AccordionItem title="Approve and Manage Requisitions">
                                Configure approval workflows so requisitions are routed automatically to HR or authorized
                                approvers.
                            </AccordionItem>

                            <AccordionItem title="Create Job Openings">
                                Once approved, requisitions can be converted into job openings with pre-filled fields to minimize
                                manual errors.
                            </AccordionItem>
                        </div>

                        <div className="shrink-0">
                            <img
                                src="https://factohr-1a56a.kxcdn.com/wp-content/themes/factohr-theme/images/new/products/recruitment/01-manpower-requisition.webp"
                                alt="Manpower requisition UI preview"
                                width="600"
                                height="300"
                                loading="lazy"
                                className="rounded-md object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home2;