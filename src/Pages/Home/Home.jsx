import { motion } from "framer-motion";
import { useState } from 'react';
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import analysis from '../../assets/LandingPage/analysis.png';
import analysis2 from '../../assets/LandingPage/analysis2.png';
import icon1 from '../../assets/LandingPage/icon1.png';
import icon2 from '../../assets/LandingPage/icon2.png';
import img1 from '../../assets/LandingPage/img1.png';
import img2 from '../../assets/LandingPage/img2.jpg';
import img3 from '../../assets/LandingPage/img3.png';
import marketing from '../../assets/LandingPage/marketing.png';
import marketing2 from '../../assets/LandingPage/marketing2.png';
import planning from '../../assets/LandingPage/planning.png';
import planning2 from '../../assets/LandingPage/planning2.png';
import strategy from '../../assets/LandingPage/strategy.png';
import strategy2 from '../../assets/LandingPage/strategy2.png';

import FooterSection from './Footer/Footer';
import PricingSection from './Pricing/PricingSection';
import FeaturesSection from './Services/Services';



const Home = () => {
    const [active, setActive] = useState(1);

    const tabs = [
        { id: 1, img: marketing, title: "Marketing" },
        { id: 2, img: planning, title: "Planning" },
        { id: 3, img: analysis, title: "Analysis" },
        { id: 4, img: strategy, title: "Strategy" },
    ];


    const contents = {
        1: {
            image: marketing2,
            title: "Marketing Content",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt.",
        },
        2: {
            image: planning2,
            title: "Planning Content",
            text: "Planning helps you set clear objectives and execute them effectively.",
        },
        3: {
            image: analysis2,
            title: "Analysis Content",
            text: "Data analysis helps you understand your business performance.",
        },
        4: {
            image: strategy2,
            title: "Strategy Content",
            text: "A strong strategy drives long-term growth and efficiency.",
        },
    };

    const team = [
        {
            name: "Drubho Joyti Das",
            role: "CEO",
            img: "https://i.pravatar.cc/400?img=12",
        },
        {
            name: "Nasmul",
            role: "Lead Engineer",
            img: "https://i.pravatar.cc/400?img=47",
        },
        {
            name: "Maya Singh",
            role: "UX Designer",
            img: "https://i.pravatar.cc/400?img=5",
        },
        {
            name: "Imran Chowdhury",
            role: "Backend Developer",
            img: "https://i.pravatar.cc/400?img=32",
        },
        {
            name: "Sofia Rahman",
            role: "Marketing Lead",
            img: "https://i.pravatar.cc/400?img=8",
        },
        {
            name: "Neel Biswas",
            role: "Support Engineer",
            img: "https://i.pravatar.cc/400?img=39",
        },
        {
            name: "Neel Biswas",
            role: "Support Engineer",
            img: "https://i.pravatar.cc/400?img=39",
        },
        {
            name: "Neel Biswas",
            role: "Support Engineer",
            img: "https://i.pravatar.cc/400?img=39",
        },
    ];

    const features = [
        { title: "Student Management", desc: "Manage student profiles, admissions and profiles." },
        { title: "Academics Management", desc: "Courses, curricula and lesson planning tools." },
        { title: "Slider Management", desc: "Create and publish promotional sliders easily." },
        { title: "Teacher Management", desc: "Organize teacher profiles and schedules." },
        { title: "Session Year Management", desc: "Define academic years and sessions easily." },
        { title: "Holiday Management", desc: "Schedule holidays and breaks for sessions." },
        { title: "Timetable Management", desc: "Drag & drop timetables and class schedules." },
        { title: "Attendance Management", desc: "Quick attendance marking and reports." },
        { title: "Exam Management", desc: "Create exams, publish results, and analytics." },
        { title: "Library Management", desc: "Track books, issue/return and fines." },
        { title: "Fees Management", desc: "Collect, track and report fees easily." },
    ];

    const features2 = [
        {
            id: 1,
            title: 'Design',
            description: 'Beautiful, modern designs that captivate your audience and enhance user experience.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            ),
            color: 'bg-blue-50 text-blue-600'
        },
        {
            id: 2,
            title: 'Drag and Drop',
            description: 'Intuitive drag and drop interface for easy content management and customization.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
            ),
            color: 'bg-green-50 text-green-600'
        },
        {
            id: 3,
            title: 'High Resolution',
            description: 'Crystal clear visuals and graphics that look stunning on any device or screen size.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
            ),
            color: 'bg-purple-50 text-purple-600'
        },
        {
            id: 4,
            title: 'App Integration',
            description: 'Seamlessly connect with your favorite tools and services for enhanced workflow.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            color: 'bg-orange-50 text-orange-600'
        },
        {
            id: 5,
            title: 'Marketing',
            description: 'Powerful marketing tools to grow your audience and increase engagement.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
            ),
            color: 'bg-red-50 text-red-600'
        },
        {
            id: 6,
            title: 'Helping Support',
            description: '24/7 dedicated support team ready to assist you with any questions or issues.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            color: 'bg-indigo-50 text-indigo-600'
        },
    ];

    const features3 = [
        {
            id: "lesson",
            title: "Lesson & Topic Crafting",
            description:
                "Teachers manage comprehensive lessons and break them down into topics for effective teaching and learning.",
            image: "https://eschool-saas.wrteam.me/storage/feature_section/XuefSezViBEVkFGfU39FLSnXap4cK1yt5osGVrew.png",
        },
        {
            id: "assignments",
            title: "Assignments",
            description:
                "Generate assignments by class, including weightage and resubmission options. Manage submitted student lists seamlessly for efficient grading.",
            image: "https://eschool-saas.wrteam.me/storage/feature_section/zf2i1fBLkW4ZigmO6egVUqOQUMbsxkfvJ5Wstpym.png",
        },
        {
            id: "attendance",
            title: "Seamless Attendance Management",
            description:
                "Easily submit student attendance and view comprehensive attendance lists for effective record-keeping and monitoring.",
            image: "https://eschool-saas.wrteam.me/storage/feature_section/qfKu1Xo49Rpt7xTue58B32nME1utaiH0RnWJyzgT.png",
        },
        {
            id: "exam",
            title: "Efficient Offline/Online Exam Management",
            description:
                "Manage exam processes by uploading offline exam marks and reviewing student-wise results.",
            image: "https://eschool-saas.wrteam.me/storage/feature_section/tLHQtBRwQvpV3MBawCW7TFpfPPZ3N5OLRh64TWNu.png",
        },
        {
            id: "timetable",
            title: "Personalized Timetable",
            description:
                "Teachers can view personalized timetables, ensuring they stay organized and prepared for their classes.",
            image: "https://eschool-saas.wrteam.me/storage/feature_section/3fDl3iw6gxhjjMoLaAU9xgohPF31dVcXFxQQb2HB.png",
        },
    ];

    const [showMore, setShowMore] = useState(false);

    const visibleFeatures = showMore ? features : features.slice(0, 6);

    const [activeFeature, setActiveFeature] = useState(features3[1]);



    return (
        <div className="space-y-14 w-full overflow-hidden bg-base-100">
            {/* Top Section */}
            <section>
                <div className='lg:flex'>
                    <img src={img1} alt="" className='lg:w-1/2' />
                    <div className='mt-10 lg:mt-40 lg:w-1/2'>
                        <h1 className='text-4xl lg:text-6xl lg:mr-60 px-5 lg:px-0 text-center lg:text-left'>Subscribe For Softino services platform!</h1>
                        <p className='text-md lg:text-xl mt-4 lg:mt-10 lg:mr-80 px-2 lg:px-0'>Softino is an all-new stylish Software For device that can show you things. awareness, drive traffic, connect with customers.</p>
                        {/* <div className='lg:w-150 flex justify-between m-4 lg:m-0 mt-10 p-4 bg-base-200 rounded-md'>
                            <input type="text" placeholder='Email Address' className='border border-white' />
                            <button className='bg-primary text-primary-content rounded-md p-2'>Subscribe</button>
                        </div> */}
                    </div>
                </div>
            </section>


            {/* Video Section */}
            <section>
                <div className='lg:max-w-7xl lg:mx-auto m-4'>
                    <img src={img2} alt="width-100%" />
                </div>
            </section>

            {/* Overview */}
            <section>
                <div className='max-w-7xl lg:mx-auto lg:flex'>
                    <img src={img3} alt="" className='lg:w-180' />
                    <div className='lg:mt-40 mt-10 lg:w-1/2'>
                        <h1 className='text-2xl lg:text-4xl text-center lg:text-left'>We're Building Modern And High Software</h1>
                        <p className='lg:text-md mt-4 lg:mt-10 text-center lg:text-left'>Deos et accusamus et iusto odio dignissimos qui blanditiis praesentium voluptatum dele corrupti quos dolores et quas molestias a orci facilisis rutrum.</p>

                        <div className='lg:flex lg:justify-start mt-8 lg:mt-4 space-y-6 lg:space-y-0 lg:gap-4'>
                            <div className='flex justify-center'>
                                <img src={icon1} alt="" />
                                <div className='ml-5 space-y-2'>
                                    <h1 className='text-primary font-bold text-4xl'>2020</h1>
                                    <h1 className='text-xl'>Happy Client</h1>
                                </div>

                            </div>
                            <div className='flex justify-center'>
                                <img src={icon2} alt="" />
                                <div className='ml-5 space-y-2'>
                                    <h1 className='text-primary font-bold text-4xl'>1200+</h1>
                                    <h1 className='text-xl'>Question</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Servioce */}
            {/* <section className='max-w-7xl mx-auto'>
                <div className='text-center'>
                    <h1 className='text-3xl font-bold'>Our Exciting feature And Service</h1>
                    <p>Softino Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderi</p>
                </div>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 mt-10 p-4 lg:p-0'>
                    <div className='flex'>
                        <HiOutlineDesktopComputer className='bg-primary p-3 rounded-full' size={50} />
                        <div className='ml-4 space-y-3'>
                            <h1 className='font-bold'>Design</h1>
                            <p className='text-sm'>Top quality Software services, labore et dolore magna ali qua Lorem ipsum dolor sit amet.</p>
                        </div>

                    </div>
                    <div className='flex'>
                        <HiOutlineDesktopComputer className='bg-primary p-3 rounded-full' size={50} />
                        <div className='ml-4 space-y-3'>
                            <h1 className='font-bold'>Design</h1>
                            <p className='text-sm'>Top quality Software services, labore et dolore magna ali qua Lorem ipsum dolor sit amet.</p>
                        </div>

                    </div>
                    <div className='flex'>
                        <HiOutlineDesktopComputer className='bg-primary p-3 rounded-full' size={50} />
                        <div className='ml-4 space-y-3'>
                            <h1 className='font-bold'>Design</h1>
                            <p className='text-sm'>Top quality Software services, labore et dolore magna ali qua Lorem ipsum dolor sit amet.</p>
                        </div>

                    </div>
                    <div className='flex'>
                        <HiOutlineDesktopComputer className='bg-primary p-3 rounded-full' size={50} />
                        <div className='ml-4 space-y-3'>
                            <h1 className='font-bold'>Design</h1>
                            <p className='text-sm'>Top quality Software services, labore et dolore magna ali qua Lorem ipsum dolor sit amet.</p>
                        </div>

                    </div>
                    <div className='flex'>
                        <HiOutlineDesktopComputer className='bg-primary p-3 rounded-full' size={50} />
                        <div className='ml-4 space-y-3'>
                            <h1 className='font-bold'>Design</h1>
                            <p className='text-sm'>Top quality Software services, labore et dolore magna ali qua Lorem ipsum dolor sit amet.</p>
                        </div>

                    </div>
                    <div className='flex'>
                        <HiOutlineDesktopComputer className='bg-primary p-3 rounded-full' size={50} />
                        <div className='ml-4 space-y-3'>
                            <h1 className='font-bold'>Design</h1>
                            <p className='text-sm'>Top quality Software services, labore et dolore magna ali qua Lorem ipsum dolor sit amet.</p>
                        </div>

                    </div>

                </div>
            </section> */}
            <section>
                <FeaturesSection/>
            </section>


            <section className='max-w-7xl mx-auto'>
                <div className="bg-base-200 shadow-lg rounded-md p-6">
                    <div className="flex justify-center items-center gap-10 mb-6">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActive(tab.id)}
                                className={`p-3 rounded-xl border transition-all duration-300 ${active === tab.id
                                    ? "border-blue-500 bg-blue-50"
                                    : "border-gray-300 hover:bg-gray-100"
                                    }`}
                            >
                                <img
                                    src={tab.img}
                                    alt={tab.title}
                                    className="w-12 h-12 object-contain"
                                />
                            </button>
                        ))}
                    </div>

                    <div className="mt-20 flex animate-fadeIn">
                        <div>
                            <img src={contents[active].image} className='w-200' alt="" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">{contents[active].title}</h2>
                            <p className="text-gray-600">{contents[active].text}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <PricingSection/>
            </section>


            {/* <section className='max-w-7xl mx-auto'>
                <div className='flex justify-center'>
                    <div className='w-1/3 mr-4'>
                        <h1 className='text-3xl font-bold'>Choose affordable prices</h1>
                        <p className='text-md mt-4'>Softino Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderi</p>
                        <ul className='mt-8 ml-4'>
                            <li>Deos et accusamus et iusto odio</li>
                            <li>Sistinctively brand innovation</li>
                            <li>Quis nostrud exercitation</li>
                            <li>Laboris nisi ut aliquip ex</li>
                            <li>Molestias a orci facilisis rutrum</li>
                        </ul>
                    </div>
                    <div className='w-2/3 flex gap-4'>
                        <div className='bg-base-200 w-1/3 text-center py-10'>
                            <h1 className='text-5xl'><span className='text-2xl'>$</span>33</h1>
                            <h1 className='my-5'>Monthly Package</h1>
                            <h1 className='text-3xl text-primary font-bold mb-5'>PREMIUM</h1>
                            <h1 className='mt-2'>Monthly Package</h1>
                            <h1 className='mt-2'>Monthly Package</h1>
                            <h1 className='mt-2'>Monthly Package</h1>
                            <h1 className='mt-2'>Monthly Package</h1>
                            <h1 className='mt-2'>Monthly Package</h1>
                            <h1 className='mt-2'>Monthly Package</h1>
                            <button className='rounded-3xl bg-primary px-4 py-2 mt-5'>Purchse Now</button>
                        </div>

                        <div className='bg-base-200 w-1/3 text-center py-10'>
                            <h1 className='text-5xl'><span className='text-2xl'>$</span>33</h1>
                            <h1 className='my-5'>Monthly Package</h1>
                            <h1 className='text-3xl text-primary font-bold mb-5'>PREMIUM</h1>
                            <h1 className='mt-2'>Monthly Package</h1>
                            <h1 className='mt-2'>Monthly Package</h1>
                            <h1 className='mt-2'>Monthly Package</h1>
                            <h1 className='mt-2'>Monthly Package</h1>
                            <h1 className='mt-2'>Monthly Package</h1>
                            <h1 className='mt-2'>Monthly Package</h1>
                            <button className='rounded-3xl bg-primary px-4 py-2 mt-5'>Purchse Now</button>

                        </div>

                        <div className='bg-base-200 w-1/3 text-center py-10'>
                            <h1 className='text-5xl'><span className='text-2xl'>$</span>33</h1>
                            <h1 className='my-5'>Monthly Package</h1>
                            <h1 className='text-3xl text-primary font-bold mb-5'>PREMIUM</h1>
                            <h1 className='mt-2'>Monthly Package</h1>
                            <h1 className='mt-2'>Monthly Package</h1>
                            <h1 className='mt-2'>Monthly Package</h1>
                            <h1 className='mt-2'>Monthly Package</h1>
                            <h1 className='mt-2'>Monthly Package</h1>
                            <h1 className='mt-2'>Monthly Package</h1>
                            <button className='rounded-3xl bg-primary px-4 py-2 mt-5'>Purchse Now</button>

                        </div>


                    </div>
                </div>
            </section> */}

            <section className='max-w-7xl mx-auto'>
                <div className="py-20 px-6 lg:px-20 antialiased text-gray-800 font-inter">
                    <div className="max-w-7xl mx-auto">

                        {/* Header */}
                        <div className="text-center mb-8">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                                Explore Our Top Features
                            </h2>
                            <div className="flex justify-center mt-6">
                                <div className="relative flex items-center">
                                    <div className="hidden sm:block w-96 h-[3px] bg-[#1f6a85] rounded-full" />
                                    <div className="block sm:hidden w-56 h-[3px] bg-[#1f6a85] rounded-full" />

                                    <motion.span
                                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#59d19f] ring-2 ring-white shadow"
                                        animate={{ x: ["-140px", "140px", "-140px"] }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {visibleFeatures.map((item, i) => (
                                <div
                                    key={i}
                                    className="group bg-base-200 border border-[#e6e9ec] rounded-2xl shadow-sm p-5 flex items-center gap-4 hover:shadow-md transition duration-300 hover:-translate-y-2"
                                >
                                    <div className="flex-none w-3 h-14 rounded-full bg-[#59d19f]" />
                                    <div className="min-w-0">
                                        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                                        <p className="mt-1 text-sm text-gray-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="mt-10 flex justify-center">
                            <button
                                onClick={() => setShowMore(!showMore)}
                                className="px-6 py-3 rounded-full text-primary-content font-semibold bg-[#59d19f] hover:bg-[#48c68a] transition"
                            >
                                {showMore ? "Show Less Features" : "View More Features"}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto">
                <div>
                    {/* Heading */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                            Meet the Team
                        </h2>
                        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
                            Talented people behind our product — professional, friendly, and ready to help.
                        </p>
                        <div className="flex justify-center mt-6">
                            <div className="relative flex items-center">
                                <div className="hidden sm:block w-96 h-[3px] bg-[#1f6a85] rounded-full" />
                                <div className="block sm:hidden w-56 h-[3px] bg-[#1f6a85] rounded-full" />

                                <motion.span
                                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#59d19f] ring-2 ring-white shadow"
                                    animate={{ x: ["-140px", "140px", "-140px"] }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    {/* Grid */}
                    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {team.map((person, i) => (
                            <article
                                key={i}
                                className="bg-base-200 rounded-2xl shadow-sm p-8 text-center transform card-hover hover:-translate-y-2 hover:shadow-lg transition duration-200"
                            >
                                <div className="bg-[#F3F4F6] rounded-2xl p-6 flex items-center justify-center mb-6">
                                    <img
                                        src={person.img}
                                        alt={person.name}
                                        className="w-36 h-36 rounded-xl object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold">{person.name}</h3>
                                <p className="mt-1 text-sm text-gray-500">{person.role}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section>
                <div className="bg-light-blue py-12 sm:py-16 lg:py-20 relative overflow-hidden font-sans">

                    {/* Background Dots */}
                    <div className="absolute left-0 top-1/4 w-64 h-64 dot-pattern opacity-10 -translate-x-12"></div>
                    <div className="absolute right-0 bottom-1/4 w-96 h-96 dot-pattern opacity-10 translate-x-24"></div>

                    <div className="max-w-6xl mx-auto px-4 relative z-10">

                        {/* Header */}
                        <div className="text-center mb-12 sm:mb-16">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                                Let's Get In Touch
                            </h1>
                            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                                Have a question or just want to say hi? We'd love to hear from you.
                            </p>

                            {/* Divider */}
                            <div className="flex justify-center mt-6">
                                <div className="relative flex items-center">
                                    <div className="hidden sm:block w-96 h-[3px] bg-[#1f6a85] rounded-full" />
                                    <div className="block sm:hidden w-56 h-[3px] bg-[#1f6a85] rounded-full" />

                                    <motion.span
                                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#59d19f] ring-2 ring-white shadow"
                                        animate={{ x: ["-140px", "140px", "-140px"] }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Layout */}
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                            {/* Form */}
                            <div className="lg:w-7/12">
                                <div className="bg-base-200 rounded-xl shadow-lg border border-gray-100 p-6 sm:p-8">
                                    <form className="space-y-6">

                                        <input type="text" placeholder="Enter Your Name"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 transition" />

                                        <input type="email" placeholder="Enter Your Email"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 transition" />

                                        <textarea rows="5" placeholder="Send Your Message"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 transition resize-none"></textarea>

                                        <div className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg p-4">
                                            <div className="flex items-center space-x-4">
                                                <div className="w-6 h-6 border-2 border-gray-400 rounded-sm flex items-center justify-center"></div>
                                                <span className="text-gray-700">I'm not a robot</span>
                                            </div>
                                            <div className="w-10 h-10 from-gray-200 to-gray-300 rounded flex items-center justify-center">
                                                <div className="text-xs font-bold text-gray-500">CAPTCHA</div>
                                            </div>
                                        </div>

                                        <button type="button"
                                            className="w-full bg-dark-blue text-primary-content font-bold py-4 rounded-lg hover:bg-blue-900 transition">
                                            Send
                                        </button>
                                    </form>
                                </div>
                            </div>

                            {/* Contact Cards */}
                            <div className="lg:w-5/12 space-y-4 sm:space-y-6">

                                <div className="bg-base-200 rounded-xl shadow-lg border border-gray-100 p-6 flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                                        {/* Phone Icon */}
                                        <FaPhone size={40} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-900 mb-1">Phone</h3>
                                        <p className="text-gray-600 text-sm">Mobile : 1234567890</p>
                                    </div>
                                </div>

                                <div className="bg-base-200 rounded-xl shadow-lg border border-gray-100 p-6 flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                                        {/* Email Icon */}
                                        <MdEmail size={40} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-900 mb-1">Email</h3>
                                        <p className="text-gray-600 text-sm">example@gmail.com</p>
                                    </div>
                                </div>

                                <div className="bg-base-200 rounded-xl shadow-lg border border-gray-100 p-6 flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                                        {/* Location */}
                                        <FaLocationDot size={40} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-900 mb-1">Location</h3>
                                        <p className="text-gray-600 text-sm">
                                            #262-263, Time Square Empire, SH 42 Mirjapar highway, Bhuj - Kutch 370001 Gujarat India.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </section>

            <section className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    {/* LEFT CONTENT */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mt-3">
                            Transform School Management <br />
                            With eSchool SaaS
                        </h1>

                        <p className="text-gray-600 mt-5 leading-relaxed">
                            Experience the future of education with our eSchool SaaS platform.
                            Streamline attendance, assignments, exams, and more. Elevate your
                            school’s efficiency and engagement.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4 mt-8">
                            <button className="bg-[#21c47c] text-primary-content px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition">
                                Register Your School
                            </button>
                            <button className="bg-[#4ccb92] text-primary-content px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition">
                                Demo School
                            </button>
                        </div>
                    </div>

                    {/* RIGHT IMAGE AREA */}
                    <div className="relative flex justify-center">
                        <img
                            src="https://crestwood-academy.eschool-saas.wrteam.me/storage/super-admin/system-settings/682c33c63c5ee5.046102311747727302.png"
                            alt="Student"
                            className="w-[370px] md:w-[620px] relative z-10"
                        />

                        {/* Floating Feature Box */}
                        <div className="absolute bottom-6 left-6 bg-base-200 shadow-xl rounded-xl p-4 w-40 z-20">
                            <div className="flex flex-col items-center">
                                <div className="bg-orange-100 p-3 rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-orange-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.262 3.89a1 1 0 00.95.69h4.1c.969 0 1.371 1.24.588 1.81l-3.32 2.41a1 1 0 00-.364 1.118l1.27 3.91c.3.92-.755 1.688-1.54 1.12l-3.33-2.42a1 1 0 00-1.17 0l-3.33 2.42c-.78.57-1.84-.2-1.54-1.12l1.27-3.91a1 1 0 00-.364-1.118l-3.32-2.41c-.78-.57-.38-1.81.59-1.81h4.09a1 1 0 00.951-.69l1.26-3.89z"
                                        />
                                    </svg>
                                </div>
                                <p className="mt-2 text-gray-700 font-medium text-center">
                                    Top Rated <br /> Instructors
                                </p>
                            </div>
                        </div>

                        <motion.div
                            className="absolute lg:top-50 lg:-right-20 bg-base-200 shadow-lg px-4 py-3 rounded-xl z-20 lg:max-w-xs"
                            animate={{
                                y: [0, -70, 0], 
                            }}
                            transition={{
                                duration: 3,
                                ease: "easeInOut",
                                repeat: Infinity,
                            }}
                        >
                            <p className="text-[10px] lg:text-sm lg:font-medium">
                                Opt for eSchool SaaS 14+ robust features for an enhanced educational experience.
                            </p>
                        </motion.div>


                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Our Exciting Feature And Service
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Discover our comprehensive suite of tools designed to streamline your workflow and
                            elevate your projects to new heights. Each feature is crafted with precision and care.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features2.map((feature2) => (
                            <div
                                key={feature2.id}
                                className="group relative bg-base-200 rounded-2xl p-6 transition-all duration-300 
                         hover:-translate-y-2 hover:shadow-xl border border-gray-100 
                         hover:border-transparent cursor-pointer"
                            >
                                {/* Icon Container */}
                                <div className={`mb-5 inline-flex items-center justify-center p-4 rounded-2xl 
                             shadow-lg shadow-gray-200/50 ${feature2.color} transition-all duration-300 
                             group-hover:shadow-xl group-hover:shadow-gray-300/50`}>
                                    {feature2.icon}
                                </div>

                                {/* Feature Title */}
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {feature2.title}
                                </h3>

                                {/* Feature Description */}
                                <p className="text-gray-600 leading-relaxed">
                                    {feature2.description}
                                </p>

                                {/* Hover Indicator */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r 
                            from-transparent via-gray-200 to-transparent opacity-0 
                            group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        ))}
                    </div>

                    {/* Optional: CTA Button */}
                    <div className="text-center mt-12">
                        <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-primary-content 
                           font-medium rounded-lg hover:bg-blue-700 transition-colors 
                           duration-300 shadow-md hover:shadow-lg">
                            Explore All Features
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-6xl mx-auto px-6">
                    {/* TOP TITLE + HEADING */}
                    <div className="text-center mb-12">

                        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
                            Simplify classroom management with our intuitive
                        </h2>
                    </div>

                    {/* CONTENT GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        {/* LEFT TEXT LIST */}
                        <div className="space-y-4 text-gray-800 text-sm md:text-base">
                            {features3.map((feature3) => {
                                const isActive = feature3.id === activeFeature.id;

                                return (
                                    <button
                                        key={feature3.id}
                                        type="button"
                                        onClick={() => setActiveFeature(feature3)}
                                        className={`w-full text-left rounded-md px-6 py-4 border-l-4 cursor-pointer transition 
                                        ${isActive
                                                ? "bg-[#d7f4ee] border-emerald-500 shadow-sm"
                                                : "border-transparent hover:bg-gray-50"
                                            }`}
                                    >
                                        <h3 className="font-semibold text-gray-900">
                                            {feature3.title}
                                        </h3>
                                        <p className="mt-1 text-gray-600">
                                            {feature3.description}
                                        </p>
                                    </button>
                                );
                            })}
                        </div>

                        {/* RIGHT IMAGE / MOCKUP */}
                        <div className="flex justify-center md:justify-end">
                            <div className="rounded-3xl p-6 md:p-8 shadow-lg inline-block">
                                <img
                                    src={activeFeature.image}
                                    alt={activeFeature.title}
                                    className="rounded-2xl w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <footer>
                <FooterSection/>
            </footer>




        </div>
    );
};

export default Home;