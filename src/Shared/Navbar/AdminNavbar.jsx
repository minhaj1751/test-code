import { useEffect, useRef, useState } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaFileInvoiceDollar, FaRegUserCircle } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa6";
import { GoSun } from "react-icons/go";
import { IoIosArrowDown, IoIosArrowUp, IoIosLogOut, IoMdNotificationsOutline } from "react-icons/io";
import { IoClose, IoMailOpenOutline } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import { TbCurrencyDollar } from "react-icons/tb";
import { NavLink, useLocation } from "react-router";
import { toast } from "react-toastify";
import Logo from "../../assets/logo/wbLogo.png";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
const FALLBACK_AVATAR =
    "https://img.freepik.com/premium-vector/boy-face-design-illustrat_1063011-590.jpg?semt=ais_hybrid&w=740&q=80";

const startsWithSegment = (pathname, prefix) =>
    pathname === prefix || pathname.startsWith(prefix + "/");

const AdminNavbar = () => {
    const axiosSecure = UseAxiosSecure();
    const location = useLocation();

    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

    const dropdownRef = useRef(null);
    const profileImageRef = useRef(null);
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const notificationDropdownRef = useRef(null);
    const notificationIconRef = useRef(null);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const sidebarRef = useRef(null);
    const [activeMenu, setActiveMenu] = useState(null);

    const academicPrefixes = [
        "/admin/class",
        "/admin/section",
        "/admin/sessoin-year",
        "/admin/group",
        "/admin/subject",
        "/admin/room",
        "/admin/class-routine",
        "/admin/exam-routine",
    ];

    const studentPrefixes = [
        "/admin/student-list",
        "/admin/multiple-student",
        "/admin/student-edit",
        "/admin/import-export",
        "/admin/seatplan",
        "/admin/migrate",
    ];

    const examPrefixes = [
        "/admin/subject-mark",
        "/admin/result-grade",
        "/admin/marksheet",
        "/admin/marksheet-routine",
        "/admin/admit-card",
        "/admin/result-entry",
        "/admin/all-student-result",
        "/admin/student-position",
        "/admin/tabulation-sheet",
        "/admin/student-tabulation",
        "/admin/student-tabulation-sheet",
    ];

    const teacherPrefixes = ["/admin/teacher-category", "/admin/teacher", "/admin/teacher-comments"];
    const settingsPrefixes = ["/admin/support"];

    //  segment-safe parent active check
    const isParentActive = (prefixes) =>
        prefixes.some((p) => startsWithSegment(location.pathname, p));

    const toggleDropdown = () => setDropdownVisible((p) => !p);
    const toggleNotificationDropdown = () => setIsNotificationOpen((p) => !p);
    const toggleSidebar = () => setIsSidebarOpen((p) => !p);

    const handleMenuClick = () => {
        setDropdownVisible(false);
        setIsSidebarOpen(false);
    };

    const toggleMobileMenu = (menuName) => {
        setActiveMenu((prev) => (prev === menuName ? null : menuName));
    };

    // Load theme from localStorage on first render
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(savedTheme);
    }, []);

    // Apply theme when theme state changes
    useEffect(() => {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);



    const handleThemeToggle = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        toast.success(
            newTheme === "dark" ? "Dark Mode Enabled" : "Light Mode Enabled",
            {
                position: "top-right",
                autoClose: 2000,
                theme: newTheme,
            }
        );
    };

    const [profile, setProfile] = useState(null);
    const [profileLoading, setProfileLoading] = useState(false);
    const [userData, setUserData] = useState(null);

    const profileImageUrl = userData?.image
        ? userData.image.startsWith("http")
            ? userData.image
            : `https://proshno.com.bd/storage/uploads/user_img/${userData.image}`
        : FALLBACK_AVATAR;

    useEffect(() => {
        let mounted = true;

        const fetchProfile = async () => {
            setProfileLoading(true);
            try {
                const res = await axiosSecure.get("/api/profile");
                const data = res?.data;

                if (!mounted) return;

                if (data?.userData) {
                    setUserData(data.userData);
                } else {
                    setUserData(null);
                    toast.error("Profile data not found!");
                }
            } catch (error) {
                if (!mounted) return;

                const message =
                    error?.response?.data?.errors?.[0] ||
                    error?.response?.data?.message ||
                    error?.message ||
                    "Failed to load profile";

                toast.error(message);
                setUserData(null);
            } finally {
                if (mounted) setProfileLoading(false);
            }
        };

        fetchProfile();

        return () => {
            mounted = false;
        };


    }, []);

    const profileName = userData?.name || "N/A";
    const profileRole = userData?.role || "N/A";
    const profileEmail = userData?.email || "N/A";
    const profileMobile = userData?.mobile || "N/A";
    const profileAddress = userData?.address || "N/A";

    useEffect(() => {
        const handlePointerDown = (event) => {
            // Profile dropdown close
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                profileImageRef.current &&
                !profileImageRef.current.contains(event.target)
            ) {
                setDropdownVisible(false);
            }

            // Notification dropdown close
            if (
                notificationDropdownRef.current &&
                !notificationDropdownRef.current.contains(event.target) &&
                notificationIconRef.current &&
                !notificationIconRef.current.contains(event.target)
            ) {
                setIsNotificationOpen(false);
            }

            // Sidebar close
            if (isSidebarOpen) {
                const clickedInsideSidebar = sidebarRef.current?.contains(event.target);
                const clickedToggleBtn = event.target.closest(".sidebar-toggle");
                if (!clickedInsideSidebar && !clickedToggleBtn) {
                    setIsSidebarOpen(false);
                }
            }
        };

        document.addEventListener("pointerdown", handlePointerDown);
        return () => document.removeEventListener("pointerdown", handlePointerDown);
    }, [isSidebarOpen]);

    const handleLogout = async () => {
        try {
            const res = await axiosSecure.get("/api/logout");
            if (res?.data?.success === true) {
                localStorage.removeItem("token");
                localStorage.removeItem("userData");
                window.location.href = "/login";
            }
        } catch (error) {
            const message =
                error?.response?.data?.message || error?.message || "Logout failed. Please try again.";
            toast.error(message);
        }
    };

    const navLinkClass = ({ isActive }) =>
        `block min-w-40 p-2 rounded-md transition-colors text-nowrap ${isActive
            ? "bg-primary text-secondary-content font-semibold"
            : "hover:bg-primary-light hover:text-black"
        }`;

    return (
        <>
            <div className="navbar sticky top-0 left-0 w-full z-40 px-5 bg-base-200 shadow-sm">
                {/* Sidebar Toggle Button */}
                <div className="pr-4">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden sidebar-toggle"
                        onClick={toggleSidebar}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                </div>

                <div className="navbar-start -my-4">
                    <NavLink to="/admin/deshboard">
                        <img src={Logo} alt="logo" />
                    </NavLink>
                </div>

                {/* Desktop Navigation */}
                <ul className="navbar-center hidden lg:flex space-x-2">
                    {/* Dashboard */}
                    <li className="relative font-medium text-base text-primary-content">
                        <NavLink
                            to="/card"
                            className={({ isActive }) =>
                                `flex items-center gap-1 p-2 rounded-md transition-colors duration-300 cursor-pointer ${isActive
                                    ? "bg-primary text-white font-semibold"
                                    : "hover:bg-primary-light hover:text-black"
                                }`
                            }
                        >
                            card
                        </NavLink>
                    </li>

                    {/* Welcome */}
                    <li className="relative font-medium text-base text-primary-content">
                        <NavLink
                            to="/table"
                            className={({ isActive }) =>
                                `flex items-center gap-1 p-2 rounded-md transition-colors duration-300 cursor-pointer ${isActive
                                    ? "bg-primary text-white font-semibold"
                                    : "hover:bg-primary-light hover:text-black"
                                }`
                            }
                        >
                            table
                        </NavLink>
                    </li>

                    {/* Academic */}
                    <li className="group relative font-medium text-base text-primary-content">
                        <span
                            className={`flex items-center gap-1 p-2 rounded-md cursor-pointer ${isParentActive(academicPrefixes)
                                ? "bg-primary text-white font-semibold"
                                : "hover:bg-primary-light hover:text-black group-hover:bg-primary-light group-hover:text-black"
                                }`}
                        >
                            Academic
                            <IoIosArrowDown className="block group-hover:hidden" />
                            <IoIosArrowUp className="hidden group-hover:block" />
                        </span>

                        <ul className="absolute top-10 left-0 p-2 bg-base-200 rounded-md text-primary-content shadow-lg z-20 transform origin-top opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:pointer-events-auto space-y-0.5 scale-y-0 translate-y-2 transition-all duration-300 ease-out">
                            <li><NavLink to="/admin/class" className={navLinkClass}>Class</NavLink></li>
                            <li><NavLink to="/admin/section" className={navLinkClass}>Section</NavLink></li>
                            <li><NavLink to="/admin/sessoin-year" className={navLinkClass}>Session Year</NavLink></li>
                            <li><NavLink to="/admin/group" className={navLinkClass}>Group</NavLink></li>
                            <li><NavLink to="/admin/subject" className={navLinkClass}>Subject</NavLink></li>
                            <li><NavLink to="/admin/room" className={navLinkClass}>Room</NavLink></li>
                            <li><NavLink to="/admin/class-routine" className={navLinkClass}>Class Routine</NavLink></li>
                            <li><NavLink to="/admin/exam-routine" className={navLinkClass}>Exam Routine</NavLink></li>
                        </ul>
                    </li>

                    {/* Student */}
                    <li className="group relative font-medium text-base text-primary-content">
                        <span
                            className={`flex items-center gap-1 p-2 rounded-md cursor-pointer ${isParentActive(studentPrefixes)
                                ? "bg-primary text-white font-semibold"
                                : "hover:bg-primary-light hover:text-black group-hover:bg-primary-light group-hover:text-black"
                                }`}
                        >
                            Student
                            <IoIosArrowDown className="block group-hover:hidden" />
                            <IoIosArrowUp className="hidden group-hover:block" />
                        </span>

                        <ul className="absolute top-10 left-0 p-2 bg-base-200 rounded-md text-primary-content shadow-lg z-20 transform origin-top opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:pointer-events-auto space-y-0.5 scale-y-0 translate-y-2 transition-all duration-300 ease-out">
                            <li><NavLink to="/admin/student-list" className={navLinkClass}>Student List</NavLink></li>
                            <li><NavLink to="/admin/student-edit" className={navLinkClass}>Student Edit</NavLink></li>
                            <li><NavLink to="/admin/import-export" className={navLinkClass}>Import/Export</NavLink></li>
                            <li><NavLink to="/admin/seatplan" className={navLinkClass}>Student Seat Plan</NavLink></li>
                            <li><NavLink to="/admin/migrate" className={navLinkClass}>Student Migrate</NavLink></li>
                        </ul>
                    </li>

                    {/* Teacher */}
                    <li className="group relative font-medium text-base text-primary-content">
                        <span
                            className={`flex items-center gap-1 p-2 rounded-md cursor-pointer ${isParentActive(teacherPrefixes)
                                ? "bg-primary text-white font-semibold"
                                : "hover:bg-primary-light hover:text-black group-hover:bg-primary-light group-hover:text-black"
                                }`}
                        >
                            Teacher
                            <IoIosArrowDown className="block group-hover:hidden" />
                            <IoIosArrowUp className="hidden group-hover:block" />
                        </span>

                        <ul className="absolute top-10 left-0 p-2 bg-base-200 rounded-md text-primary-content shadow-lg z-20 transform origin-top opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:pointer-events-auto space-y-0.5 scale-y-0 translate-y-2 transition-all duration-300 ease-out">
                            <li><NavLink to="/admin/teacher-category" className={navLinkClass}>Teacher Category</NavLink></li>
                            <li><NavLink to="/admin/teacher" className={navLinkClass}>Teacher</NavLink></li>
                            <li><NavLink to="/admin/teacher-comments" className={navLinkClass}>Teacher Comments</NavLink></li>
                        </ul>
                    </li>

                    {/* Exam */}
                    <li className="group relative font-medium text-base text-primary-content">
                        <span
                            className={`flex items-center gap-1 p-2 rounded-md cursor-pointer ${isParentActive(examPrefixes)
                                ? "bg-primary text-white font-semibold"
                                : "hover:bg-primary-light hover:text-black group-hover:bg-primary-light group-hover:text-black"
                                }`}
                        >
                            Exam
                            <IoIosArrowDown className="block group-hover:hidden" />
                            <IoIosArrowUp className="hidden group-hover:block" />
                        </span>

                        <ul className="absolute top-10 left-0 p-2 bg-base-200 rounded-md text-primary-content shadow-lg z-20 transform origin-top opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:pointer-events-auto space-y-0.5 scale-y-0 translate-y-2 transition-all duration-300 ease-out">
                            <li><NavLink to="/admin/subject-mark" className={navLinkClass}>Subject Mark</NavLink></li>
                            <li><NavLink to="/admin/result-grade" className={navLinkClass}>Result Grade</NavLink></li>
                            <li><NavLink to="/admin/marksheet" className={navLinkClass}>Marksheet</NavLink></li>
                            <li><NavLink to="/admin/result-entry" className={navLinkClass}>Result Entry</NavLink></li>
                            <li><NavLink to="/admin/student-tabulation-sheet" className={navLinkClass}>Subject Tabulation</NavLink></li>
                            <li><NavLink to="/admin/tabulation-sheet" className={navLinkClass}>Tabulation Sheet</NavLink></li>
                            <li><NavLink to="/admin/student-position" className={navLinkClass}>Student Position</NavLink></li>
                            <li><NavLink to="/admin/class-wise-result" className={navLinkClass}>Class Wise Result</NavLink></li>
                            <li><NavLink to="/admin/student-wise-result" className={navLinkClass}>Student Wise Result</NavLink></li>
                            <li><NavLink to="/admin/marksheet-routine" className={navLinkClass}>Marksheet Routine</NavLink></li>
                            <li><NavLink to="/admin/admit-card" className={navLinkClass}>Admit Card</NavLink></li>
                        </ul>
                    </li>

                    {/* Settings */}
                    <li className="group relative font-medium text-base text-primary-content">
                        <span
                            className={`flex items-center gap-1 p-2 rounded-md cursor-pointer ${isParentActive(settingsPrefixes)
                                ? "bg-primary text-white font-semibold"
                                : "hover:bg-primary-light hover:text-black group-hover:bg-primary-light group-hover:text-black"
                                }`}
                        >
                            Settings
                            <IoIosArrowDown className="block group-hover:hidden" />
                            <IoIosArrowUp className="hidden group-hover:block" />
                        </span>

                        <ul className="absolute top-10 left-0 p-2 bg-base-200 rounded-md text-primary-content shadow-lg z-20 transform origin-top opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:pointer-events-auto space-y-0.5 scale-y-0 translate-y-2 transition-all duration-300 ease-out">
                            <li><NavLink to="/admin/support" className={navLinkClass}>Support</NavLink></li>
                        </ul>
                    </li>

                    {/* course */}
                    <li className="relative font-medium text-base text-primary-content">
                        <NavLink
                            to="/admin/course"
                            className={({ isActive }) =>
                                `flex items-center gap-1 p-2 rounded-md transition-colors duration-300 cursor-pointer ${isActive
                                    ? "bg-primary text-white font-semibold"
                                    : "hover:bg-primary-light hover:text-black"
                                }`
                            }
                        >
                            Course
                        </NavLink>
                    </li>

                    {/* Customage Marksheet */}
                    {/* <li className="relative font-medium text-base text-primary-content">
                        <NavLink
                            to="/admin/customage-marksheet"
                            className={({ isActive }) =>
                                `flex items-center gap-1 p-2 rounded-md transition-colors duration-300 cursor-pointer ${isActive
                                    ? "bg-primary text-secondary-content font-semibold"
                                    : "hover:bg-primary-light hover:text-black"
                                }`
                            }
                        >
                            Customage Marksheet
                        </NavLink>
                    </li> */}
                </ul>

                <div className="navbar-end">
                    <div className="hidden lg:flex items-center gap-5">
                        {/* Theme Toggle */}
                        <button
                            onClick={handleThemeToggle}
                            title={theme === "light" ? "Switch to dark" : "Switch to light"}
                            className="cursor-pointer p-2 rounded-full hover:bg-color_gray_200"
                        >
                            {theme === "light" ? (
                                <GoSun className="text-2xl font-bold" />
                            ) : (
                                <BsMoonStarsFill className="text-2xl font-bold text-primary-content" />
                            )}
                        </button>
                    </div>

                    {/* Notification Icon + Dropdown */}
                    <div className="relative pl-2">
                        <button
                            type="button"
                            ref={notificationIconRef}
                            onClick={toggleNotificationDropdown}
                            className="relative p-2 rounded-full hover:bg-base-300 transition-colors"
                            aria-label="Notifications"
                            aria-expanded={isNotificationOpen}
                        >
                            <IoMdNotificationsOutline size={34} />
                            <span className="absolute text-error-content -top-0.5 -right-0.5 h-5 w-5 rounded-full bg-error">
                                5
                            </span>
                        </button>

                        {isNotificationOpen && (
                            <div
                                ref={notificationDropdownRef}
                                className="absolute right-0 top-12 mt-3 w-70 px-4 shadow-lg bg-base-100 rounded-md text-sm text-primary-content z-50"
                            >
                                <div className="flex items-center justify-between border-b border-base-300 pr-5">
                                    <h1 className="px-4 py-4 text-[20px] font-semibold">Notifications</h1>
                                    <div className="flex gap-3">
                                        <h1 className="bg-[#FFF2DB] text-warning text-[12px] px-2 py-1 rounded-sm">8 New</h1>
                                        <IoMailOpenOutline size={24} />
                                    </div>
                                </div>

                                <ul className="max-h-80 overflow-y-auto">
                                    {[1, 2, 3].map((i) => (
                                        <li
                                            key={i}
                                            className="flex relative group py-3 border-b border-base-300 hover:bg-base-100 cursor-pointer items-center"
                                        >
                                            <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                                                <img className="w-full h-full object-cover" src={FALLBACK_AVATAR} alt="Profile" />
                                            </div>

                                            <div className="flex-1 space-y-1.5">
                                                <p className="text-[14px] font-medium">Send connection request</p>
                                                <p className="text-[10px]">Peter send you connection request</p>
                                                <p className="text-xs opacity-70">4 days ago</p>
                                            </div>
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-3">
                                                <IoClose size={30} />
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                <div className="w-50 mx-auto border-t border-base-300 px-4 py-2 my-4 text-center text-xs text-warning-content bg-warning rounded-sm cursor-pointer">
                                    View all notifications
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Profile Image */}
                    <div
                        ref={profileImageRef}
                        onClick={toggleDropdown}
                        className="w-10 h-10 overflow-hidden rounded-full cursor-pointer ml-2"
                    >
                        <img
                            className="w-full h-full object-cover rounded-full"
                            src={profileImageUrl}
                            alt="Profile"
                            onError={(e) => (e.currentTarget.src = FALLBACK_AVATAR)}
                        />
                    </div>

                    {/* Profile Dropdown */}
                    {isDropdownVisible && (
                        <div
                            ref={dropdownRef}
                            className="absolute right-8 top-14 mt-3 w-56 bg-base-100 shadow-lg rounded-md text-sm text-primary-content z-50"
                        >
                            <div className="flex items-center gap-2 border-b border-base-300">
                                <div className="w-8 h-8 rounded-full overflow-hidden">
                                    <img
                                        className="w-full h-full object-cover"
                                        src={profileImageUrl}
                                        alt="Profile"
                                        onError={(e) => (e.currentTarget.src = FALLBACK_AVATAR)}
                                    />
                                </div>
                                <div className="py-2">
                                    <h1 className="text-primary-content">profileName</h1>
                                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700">profileRole</span>
                                </div>
                            </div>

                            <ul className="pt-3 space-y-4">
                                <li>
                                    <NavLink to="/admin/profile" className="flex items-center gap-4 px-4 hover:bg-base-200" onClick={handleMenuClick}>
                                        <FaRegUserCircle size={24} />
                                        <h1 className="text-[14px]">My Profile</h1>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/admin/profile" className="flex items-center gap-4 px-4 hover:bg-base-200" onClick={handleMenuClick}>
                                        <MdOutlineSettings size={24} />
                                        <h1 className="text-[14px]">Settings</h1>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/admin/profile"
                                        className="flex items-center gap-4 px-4 pb-4 border-b border-base-300 hover:bg-base-200"
                                        onClick={handleMenuClick}
                                    >
                                        <FaFileInvoiceDollar size={24} />
                                        <h1 className="text-[14px]">Billing</h1>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="/admin/profile" className="flex items-center gap-4 px-4 hover:bg-base-200" onClick={handleMenuClick}>
                                        <TbCurrencyDollar size={24} />
                                        <h1 className="text-[14px]">Pricing</h1>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/admin/profile" className="flex items-center gap-4 px-4 pb-2 hover:bg-base-200" onClick={handleMenuClick}>
                                        <FaQuestion size={24} />
                                        <h1 className="text-[14px]">FAQ</h1>
                                    </NavLink>
                                </li>
                            </ul>

                            <div className="p-3">
                                <button
                                    type="button"
                                    className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-error text-error-content text-sm font-medium hover:brightness-95 cursor-pointer"
                                    onClick={handleLogout}
                                >
                                    Logout
                                    <IoIosLogOut />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Sidebar (unchanged) */}
            {isSidebarOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-opacity-50 z-40 lg:hidden"
                        onClick={() => setIsSidebarOpen(false)}
                    />
                    <div
                        ref={sidebarRef}
                        className="fixed top-0 left-0 h-full w-80 bg-base-200 shadow-lg z-50 transform transition-transform duration-300 ease-in-out lg:hidden"
                    >
                        <div className="flex items-center justify-between p-4 border-b border-base-300">
                            <NavLink to="/admin" onClick={handleMenuClick}>
                                <img src={Logo} alt="logo" className="h-8" />
                            </NavLink>
                            <button onClick={() => setIsSidebarOpen(false)}>
                                <IoClose size={32} />
                            </button>
                        </div>

                        <nav className="p-4 overflow-y-auto h-full">
                            <ul className="space-y-2">
                                <li>
                                    <NavLink
                                        to="/admin/deshboard"
                                        className={({ isActive }) =>
                                            `flex items-center p-3 rounded-md transition-colors font-medium ${isActive ? "bg-primary text-secondary-content font-semibold" : "hover:bg-secondary"
                                            }`
                                        }
                                        onClick={handleMenuClick}
                                    >
                                        Dashboard
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/admin/welcome"
                                        className={({ isActive }) =>
                                            `flex items-center p-3 rounded-md transition-colors font-medium ${isActive ? "bg-primary text-secondary-content font-semibold" : "hover:bg-secondary"
                                            }`
                                        }
                                        onClick={handleMenuClick}
                                    >
                                        Welcome
                                    </NavLink>
                                </li>

                                {/* Academic (mobile) */}
                                <li>
                                    <div
                                        className={`flex items-center justify-between p-3 rounded-md cursor-pointer ${isParentActive(academicPrefixes) ? "bg-primary text-secondary-content font-semibold" : "hover:bg-secondary"
                                            }`}
                                        onClick={() => toggleMobileMenu("academic")}
                                    >
                                        <span>Academic</span>
                                        {activeMenu === "academic" ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                    </div>

                                    {activeMenu === "academic" && (
                                        <ul className="ml-4 space-y-2 mt-2 border-l-2 border-base-300 pl-2">
                                            <li><NavLink to="/admin/class" className={navLinkClass} onClick={handleMenuClick}>Class</NavLink></li>
                                            <li><NavLink to="/admin/section" className={navLinkClass} onClick={handleMenuClick}>Section</NavLink></li>
                                            <li><NavLink to="/admin/session-year" className={navLinkClass} onClick={handleMenuClick}>Session Year</NavLink></li>
                                            <li><NavLink to="/admin/group" className={navLinkClass} onClick={handleMenuClick}>Group</NavLink></li>
                                            <li><NavLink to="/admin/subject" className={navLinkClass} onClick={handleMenuClick}>Subject</NavLink></li>
                                            <li><NavLink to="/admin/Room" className={navLinkClass} onClick={handleMenuClick}>Room</NavLink></li>
                                            <li><NavLink to="/admin/class-routine" className={navLinkClass} onClick={handleMenuClick}>Class Routine</NavLink></li>
                                            <li><NavLink to="/admin/exam-routine" className={navLinkClass} onClick={handleMenuClick}>Exam Routine</NavLink></li>
                                        </ul>
                                    )}
                                </li>

                                {/* Student (mobile) */}
                                <li>
                                    <div
                                        className={`flex items-center justify-between p-3 rounded-md cursor-pointer ${isParentActive(studentPrefixes) ? "bg-primary text-secondary-content font-semibold" : "hover:bg-secondary"
                                            }`}
                                        onClick={() => toggleMobileMenu("student")}
                                    >
                                        <span>Student</span>
                                        {activeMenu === "student" ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                    </div>

                                    {activeMenu === "student" && (
                                        <ul className="ml-4 space-y-2 mt-2 border-l-2 border-base-300 pl-2">
                                            <li><NavLink to="/admin/student-list" className={navLinkClass} onClick={handleMenuClick}>Student List</NavLink></li>
                                            <li><NavLink to="/admin/student-edit" className={navLinkClass} onClick={handleMenuClick}>Student Edit</NavLink></li>
                                            <li><NavLink to="/admin/multiple-student" className={navLinkClass} onClick={handleMenuClick}>Multiple Student</NavLink></li>
                                            <li><NavLink to="/admin/import-export" className={navLinkClass} onClick={handleMenuClick}>Import/Export</NavLink></li>
                                            <li><NavLink to="/admin/student-seat-plan" className={navLinkClass} onClick={handleMenuClick}>Student Seat Plan</NavLink></li>
                                            <li><NavLink to="/admin/student-migrate" className={navLinkClass} onClick={handleMenuClick}>Student Migrate</NavLink></li>
                                        </ul>
                                    )}
                                </li>

                                {/* Exam (mobile) */}
                                <li>
                                    <div
                                        className={`flex items-center justify-between p-3 rounded-md cursor-pointer ${isParentActive(examPrefixes) ? "bg-primary text-secondary-content font-semibold" : "hover:bg-secondary"
                                            }`}
                                        onClick={() => toggleMobileMenu("exam")}
                                    >
                                        <span>Exam</span>
                                        {activeMenu === "exam" ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                    </div>

                                    {activeMenu === "exam" && (
                                        <ul className="ml-4 space-y-2 mt-2 border-l-2 border-base-300 pl-2">
                                            <li><NavLink to="/admin/subject-mark" className={navLinkClass} onClick={handleMenuClick}>Subject Mark</NavLink></li>
                                            <li><NavLink to="/admin/result-grade" className={navLinkClass} onClick={handleMenuClick}>Result Grade</NavLink></li>
                                            <li><NavLink to="/admin/marksheet" className={navLinkClass} onClick={handleMenuClick}>Marksheet</NavLink></li>
                                            <li><NavLink to="/admin/marksheet-routine" className={navLinkClass} onClick={handleMenuClick}>Marksheet Routine</NavLink></li>
                                            <li><NavLink to="/admin/admit-card" className={navLinkClass} onClick={handleMenuClick}>Admit Card</NavLink></li>
                                            <li><NavLink to="/admin/result-entry" className={navLinkClass} onClick={handleMenuClick}>Result Entry</NavLink></li>
                                            <li><NavLink to="/admin/all-student-result" className={navLinkClass} onClick={handleMenuClick}>All Student Result</NavLink></li>
                                            <li><NavLink to="/admin/student-position" className={navLinkClass} onClick={handleMenuClick}>Student Position</NavLink></li>
                                            <li><NavLink to="/admin/tabulation-sheet" className={navLinkClass} onClick={handleMenuClick}>Tabulation Sheet</NavLink></li>
                                            <li><NavLink to="/admin/student-tabulation" className={navLinkClass} onClick={handleMenuClick}>Subject Tabulation</NavLink></li>
                                        </ul>
                                    )}
                                </li>

                                {/* Setting (mobile) */}
                                <li>
                                    <div
                                        className={`flex items-center justify-between p-3 rounded-md cursor-pointer ${isParentActive(settingsPrefixes) ? "bg-primary text-secondary-content font-semibold" : "hover:bg-secondary"
                                            }`}
                                        onClick={() => toggleMobileMenu("settings")}
                                    >
                                        <span>Setting</span>
                                        {activeMenu === "settings" ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                    </div>

                                    {activeMenu === "settings" && (
                                        <ul className="ml-4 space-y-2 mt-2 border-l-2 border-base-300 pl-2">
                                            <li><NavLink to="/admin/institute-settings" className={navLinkClass} onClick={handleMenuClick}>Institute Settings</NavLink></li>
                                        </ul>
                                    )}
                                </li>

                                {/* Customage (mobile) */}
                                <li>
                                    <NavLink
                                        to="/admin/customage-marksheet"
                                        className={({ isActive }) =>
                                            `flex items-center p-3 rounded-md transition-colors font-medium ${isActive ? "bg-primary text-secondary-content font-semibold" : "hover:bg-secondary"
                                            }`
                                        }
                                        onClick={handleMenuClick}
                                    >
                                        Customage Marksheet
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </>
            )}
        </>
    );
};

export default AdminNavbar;