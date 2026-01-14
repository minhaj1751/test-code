import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { NavLink } from "react-router";
import { url } from "../../../../../connection";
import damu from "../../../../assets/Exam/damu.png";
import damu1 from "../../../../assets/Exam/damu1.png";
import damu2 from "../../../../assets/Exam/damu2.png";
import damu3 from "../../../../assets/Exam/damu3.png";
import damu4 from "../../../../assets/Exam/damu4.png";
import damu5 from "../../../../assets/Exam/damu5.png";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";

const cx = (...c) => c.filter(Boolean).join(" ");

const ToggleButton = ({ active, onClick, children }) => (
    <button
        type="button"
        onClick={onClick}
        className={cx(
            "w-full rounded-md border px-3 py-2 text-left text-sm font-medium transition",
            "hover:bg-base-100",
            active ? "border-primary bg-primary/10 text-primary" : "border-base-300 bg-base-200"
        )}
    >
        {children}
    </button>
);

const Marksheet2 = () => {
    const axiosSecure = UseAxiosSecure();
    const FILE_BASE = `${url}/storage/uploads/idCardSettingFile`;
    const previewUrl = "https://bdschool.site/storage/uploads/idCardSettingFile/0400311751273109.jpg";
    const schoolName = "Demo School";
    const address = "Demo Address";
    const examName = "Final Exam";

    // ✅ RIGHT PANEL STATES
    const [photoSide, setPhotoSide] = useState("right");
    const [photoShape, setPhotoShape] = useState("square");
    const [photoSize, setPhotoSize] = useState("normal");

    const [showGpa, setShowGpa] = useState(true);
    const [showComments, setShowComments] = useState(true);

    const [showTeacherSign, setShowTeacherSign] = useState(true);
    const [showPrincipalSign, setShowPrincipalSign] = useState(true);
    const [showHologram, setShowHologram] = useState(true);

    // ✅ Marks table columns (আপনার টেবিল অনুযায়ী)
    // Distribution = group (Written + MCQ)
    const ALL_COLS = useMemo(
        () => [
            { key: "subject", label: "Subject" },
            { key: "full", label: "Full Marks" },
            { key: "highest", label: "Highest" },
            { key: "written", label: "Written", group: "Distribution" },
            { key: "mcq", label: "MCQ", group: "Distribution" },
            { key: "total", label: "Total" },
            { key: "grade", label: "Grade" },
            { key: "gpa", label: "GPA" },
        ],
        []
    );

    const [visibleCols, setVisibleCols] = useState(ALL_COLS.map((c) => c.key));

    const toggleCol = (key) => {
        setVisibleCols((prev) => {
            const exists = prev.includes(key);
            if (exists && prev.length === 1) return prev;
            return exists ? prev.filter((k) => k !== key) : [...prev, key];
        });
    };

    const moveCol = (key, dir) => {
        setVisibleCols((prev) => {
            const idx = prev.indexOf(key);
            if (idx === -1) return prev;
            const next = [...prev];
            const swapWith = dir === "up" ? idx - 1 : idx + 1;
            if (swapWith < 0 || swapWith >= next.length) return prev;
            [next[idx], next[swapWith]] = [next[swapWith], next[idx]];
            return next;
        });
    };

    // ✅ Marks rows (object based so reorder/hide easy)
    const marksRows = useMemo(
        () => [
            { subject: "Agriculture", full: 50, highest: 48, written: "28/30", mcq: "20/20", total: 48, grade: "A+", gpa: "5.00" },
            { subject: "Bangla 1st Paper", full: 100, highest: 91, written: "60/70", mcq: "24/30", total: 84, grade: "A+", gpa: "5.00" },
            { subject: "Bangla 2nd Paper", full: 50, highest: 46, written: "34/35", mcq: "12/15", total: 46, grade: "A+", gpa: "5.00" },
            { subject: "BD & World", full: 100, highest: 94, written: "63/70", mcq: "29/30", total: 92, grade: "A+", gpa: "5.00" },
            { subject: "English 1st Paper", full: 100, highest: 90, written: "90/100", mcq: "--/--", total: 90, grade: "A+", gpa: "5.00" },
            { subject: "English 2nd Paper", full: 50, highest: 45, written: "45/50", mcq: "--/--", total: 45, grade: "A+", gpa: "5.00" },
            { subject: "ICT", full: 50, highest: 47, written: "27/30", mcq: "20/20", total: 47, grade: "A+", gpa: "5.00" },
            { subject: "Islam", full: 100, highest: 91, written: "62/70", mcq: "28/30", total: 90, grade: "A+", gpa: "5.00" },
            { subject: "Math", full: 100, highest: 87, written: "63/70", mcq: "22/30", total: 85, grade: "A+", gpa: "5.00" },
            { subject: "Science", full: 100, highest: 90, written: "55/70", mcq: "27/30", total: 82, grade: "A+", gpa: "5.00" },
        ],
        []
    );

    // ✅ headers meta (based on visible order)
    const visibleMeta = useMemo(
        () => visibleCols.map((k) => ALL_COLS.find((c) => c.key === k)).filter(Boolean),
        [visibleCols, ALL_COLS]
    );

    const topRow = useMemo(() => {
        // top header row includes non-group cols with rowSpan=2,
        // and group cols create one group th with colSpan = count of visible children
        const groups = {};
        visibleMeta.forEach((c) => {
            if (c.group) {
                groups[c.group] = (groups[c.group] || 0) + 1;
            }
        });

        const result = [];
        const usedGroups = new Set();

        visibleMeta.forEach((c) => {
            if (!c.group) {
                result.push({ type: "col", label: c.label, rowSpan: 2, colSpan: 1 });
                return;
            }
            // group
            if (!usedGroups.has(c.group)) {
                usedGroups.add(c.group);
                result.push({ type: "group", label: c.group, rowSpan: 1, colSpan: groups[c.group] });
            }
        });

        return result;
    }, [visibleMeta]);

    const secondRow = useMemo(() => {
        // second row only contains visible cols that are grouped, in their visible order
        return visibleMeta.filter((c) => c.group).map((c) => ({ label: c.label, key: c.key }));
    }, [visibleMeta]);

    const distributionVisibleCount = secondRow.length; // written+mcq visible count

    const { data, isLoading } = useQuery({
        queryKey: ["institute_setting"],
        queryFn: async () => {
            const res = await axiosSecure.get("/api/institute-setting");
            return res?.data?.idCardSettingData || {};
        },
    });

    const print = () => window.print();
    if (isLoading) return <div className="p-5">Loading...</div>;

    return (
        <div className="p-2 print:p-0 grid grid-cols-12 gap-2">
            {/* ---------- LEFT CONTROL PANEL ---------- */}
            <div className="col-span-3 bg-base-200 h-[calc(100vh-85px)] overflow-y-auto print:hidden">
                <div className="flex justify-between items-center px-2 border-b-2 border-accent">
                    <h1 className="p-2 font-bold text-2xl">Template</h1>
                    <button
                        onClick={print}
                        className="bg-primary py-1 px-3 text-secondary-content font-semibold text-lg rounded cursor-pointer"
                    >
                        Print
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <NavLink
                        to="/admin/customage-marksheet"
                        end
                        className={({ isActive }) =>
                            `block rounded border-2 ${isActive ? "border-primary" : "border-transparent"
                            }`
                        }
                    >
                        <img src={damu} alt="" />
                    </NavLink>

                    {[damu1, damu2, damu3, damu4, damu5].map((img, i) => (
                        <NavLink
                            key={i}
                            to={`/admin/customage-marksheet/${i + 1}`}
                            className={({ isActive }) =>
                                `block rounded border-2 ${isActive ? "border-primary" : "border-transparent"
                                }`
                            }
                        >
                            <img src={img} alt="" />
                        </NavLink>
                    ))}
                </div>

            </div>

            {/* ---------- MAIN MARKSHEET ---------- */}
            <div className="col-span-6  h-[calc(100vh-85px)] overflow-y-auto print:overflow-y-hidden print:h-auto print:w-full print:col-span-full">
                <div
                    className="bg-base-200 p-6 print:p-2 shadow relative border-8 print:h-[1047px]"
                    style={{
                        borderImage:
                            "repeating-linear-gradient(45deg, #8bc34a 0, #8bc34a 10px, white 10px, white 20px) 8",
                    }}
                >
                    {/* Watermark */}
                    <img
                        src={previewUrl}
                        alt="Watermark"
                        className="absolute top-1/2 left-1/2 -translate-1/2 w-96 h-96 opacity-10 object-cover z-0"
                    />

                    <div className="relative z-10">
                        {/* Header */}
                        <div className="text-center mb-2">
                            <img
                                src={previewUrl}
                                alt="Institute Logo"
                                className="mx-auto w-20 h-20 object-cover rounded"
                            />
                            <h1 className="text-2xl font-bold">{schoolName}</h1>
                            <p className="text-gray-700">{address}</p>
                            <p className="text-lg font-semibold mt-1">{examName}</p>
                        </div>

                        {/* Student Info */}
                        <div className="flex justify-between gap-4 w-full">
                            {/* Photo */}
                            <img
                                src="https://bdschool.site/storage/uploads/student_photo/3018861751734498.jpg"
                                alt="Student"
                                className={cx(
                                    photoSize === "pp" ? "w-[95px] h-[110px]" : "w-[116px] h-[136px]",
                                    "object-cover border",
                                    photoShape === "round" ? "rounded-full" : "rounded"
                                )}
                            />

                            {/* Student Details */}
                            <table className="w-full">
                                <tbody>
                                    <tr><td className="font-bold text-base">Name</td><td>: TANISHA AKHTAR</td></tr>
                                    <tr><td className="font-bold text-base">Father's Name</td><td>: MD BABUL MOSTOFA MONDOL</td></tr>
                                    <tr><td className="font-bold text-base">ID No</td><td>: st-202510146</td></tr>
                                    <tr><td className="font-bold text-base">Class</td><td>: Eight</td></tr>
                                    <tr><td className="font-bold text-base">Session</td><td>: 2025</td></tr>
                                    <tr><td className="font-bold text-base">Section</td><td>: Common</td></tr>
                                    <tr><td className="font-bold text-base">Grade</td><td>: A+</td></tr>
                                    <tr><td className="font-bold text-base">Merit Position</td><td>: 2nd</td></tr>
                                </tbody>
                            </table>

                            {/* Grade Scale */}
                            <table className="w-[220px] border text-sm">
                                <thead className="bg-gray-200">
                                    <tr>
                                        <th className="border">Range</th>
                                        <th className="border">Grade</th>
                                        <th className="border">GPA</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ["80-100", "A+", "5"],
                                        ["70-79", "A", "4"],
                                        ["60-69", "A-", "3.5"],
                                        ["50-59", "B", "3"],
                                        ["40-49", "C", "2"],
                                        ["33-39", "D", "1"],
                                        ["0-32", "F", "0"],
                                    ].map((row, i) => (
                                        <tr key={i}>
                                            {row.map((c, j) => (
                                                <td key={j} className="border text-center">{c}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/*  MARKS TABLE (FULL FUNCTIONAL) */}
                        <div className="mt-4 overflow-x-auto">
                            <table className="w-full border text-sm">
                                <thead>
                                    {/* Top header row */}
                                    <tr>
                                        {topRow.map((h, i) => (
                                            <th
                                                key={`${h.label}-${i}`}
                                                className="border p-1"
                                                rowSpan={h.rowSpan}
                                                colSpan={h.colSpan}
                                            >
                                                {h.label}
                                            </th>
                                        ))}
                                    </tr>

                                    {/* Second header row (only if any grouped cols visible) */}
                                    {distributionVisibleCount > 0 && (
                                        <tr>
                                            {secondRow.map((c) => (
                                                <th key={c.key} className="border p-1">
                                                    {c.label}
                                                </th>
                                            ))}
                                        </tr>
                                    )}
                                </thead>

                                <tbody>
                                    {marksRows.map((r, i) => (
                                        <tr key={i}>
                                            {visibleMeta.map((col) => (
                                                <td key={`${i}-${col.key}`} className="border p-1 text-center">
                                                    {r[col.key]}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}

                                    {/* Total row (dynamic colSpan) */}
                                    <tr className="bg-gray-100 font-semibold">
                                        {visibleCols.length > 0 && (
                                            <td className="border p-1 text-left">
                                                Total Exam Marks
                                            </td>
                                        )}

                                        {visibleCols.length > 1 && (
                                            <>
                                                {/* second cell value */}
                                                <td className="border p-1 text-center">800</td>

                                                <td
                                                    className="border p-1 text-center"
                                                    colSpan={Math.max(visibleCols.length - 5, 1)}
                                                >
                                                    Obtained Marks & GPA
                                                </td>

                                                {/* last three values (try to keep align) */}
                                                <td className="border p-1 text-center">709</td>
                                                <td className="border p-1 text-center">A+</td>
                                                <td className="border p-1 text-center">5.00</td>
                                            </>
                                        )}
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* GPA Box */}
                        {showGpa && (
                            <div className="text-center mt-6">
                                <div className="inline-block border-2 border-gray-600 px-6 py-2 text-xl font-bold">
                                    GPA: 5.00
                                </div>
                            </div>
                        )}

                        {/* Comments */}
                        {showComments && (
                            <div className="mt-4 text-sm">
                                <table className="border border-black border-collapse w-full">
                                    <tbody>
                                        <tr>
                                            <td className="border p-2 font-semibold">Principal Comments</td>
                                            <td className="border p-2">Has a well-developed sense of humor.</td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2 font-semibold">Teacher Comments</td>
                                            <td className="border p-2">
                                                Has an impressive understanding and depth of knowledge about their interests.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {/* Signatures */}
                        <div className="flex justify-between mt-10 text-nowrap">
                            {showTeacherSign && (
                                <div className="text-center border-t w-40 pt-2">Signature of class teacher</div>
                            )}
                            {showPrincipalSign && (
                                <div className="text-center border-t w-40 pt-2">Signature of principal</div>
                            )}
                            {showHologram && (
                                <div className="text-center border-t w-40 pt-2">Seal / Hologram</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* ---------- RIGHT PANEL ---------- */}
            <div className="col-span-3 h-[calc(100vh-85px)] overflow-y-scroll bg-base-200 print:hidden">
                <div className="border-b border-base-300 p-3">
                    <h1 className="font-bold text-2xl">Design</h1>
                </div>

                {/* Student Photo */}
                <div className="p-3">
                    <h2 className="mb-2 font-bold text-xl">Student Photo</h2>

                    <div className="grid grid-cols-2 gap-2">
                        <ToggleButton active={photoSide === "left"} onClick={() => setPhotoSide("left")}>
                            Photo Left
                        </ToggleButton>
                        <ToggleButton active={photoSide === "right"} onClick={() => setPhotoSide("right")}>
                            Photo Right
                        </ToggleButton>
                    </div>

                    <div className="mt-2 grid grid-cols-2 gap-2">
                        <ToggleButton active={photoShape === "square"} onClick={() => setPhotoShape("square")}>
                            Photo Square
                        </ToggleButton>
                        <ToggleButton active={photoShape === "round"} onClick={() => setPhotoShape("round")}>
                            Photo Round
                        </ToggleButton>
                    </div>

                    <div className="mt-2 grid grid-cols-2 gap-2">
                        <ToggleButton active={photoSize === "normal"} onClick={() => setPhotoSize("normal")}>
                            Size Normal
                        </ToggleButton>
                        <ToggleButton active={photoSize === "pp"} onClick={() => setPhotoSize("pp")}>
                            Size PP
                        </ToggleButton>
                    </div>
                </div>

                {/* ✅ Table columns control (NO checkbox, full functional) */}
                <div className="px-3 pb-3">
                    <h2 className="mb-2 font-bold text-xl">Table</h2>

                    <div className="space-y-2">
                        {ALL_COLS.map((c) => {
                            const isOn = visibleCols.includes(c.key);
                            return (
                                <div
                                    key={c.key}
                                    className={cx(
                                        "flex items-center gap-2 rounded-md border px-2 py-2",
                                        isOn ? "bg-base-200 border-primary/40" : "bg-base-100 border-base-300 opacity-70"
                                    )}
                                >
                                    <button
                                        type="button"
                                        onClick={() => toggleCol(c.key)}
                                        className={cx(
                                            "flex-1 text-left text-sm font-semibold",
                                            isOn ? "text-primary" : "text-slate-600"
                                        )}
                                    >
                                        {c.group ? `${c.group} - ${c.label}` : c.label}
                                    </button>

                                    <div className="flex gap-1">
                                        <button
                                            type="button"
                                            disabled={!isOn}
                                            onClick={() => moveCol(c.key, "up")}
                                            className={cx(
                                                "h-8 w-8 rounded-md border text-sm font-bold",
                                                isOn ? "bg-base-200 hover:bg-base-100" : "bg-base-200 cursor-not-allowed"
                                            )}
                                            title="Move Up"
                                        >
                                            ↑
                                        </button>

                                        <button
                                            type="button"
                                            disabled={!isOn}
                                            onClick={() => moveCol(c.key, "down")}
                                            className={cx(
                                                "h-8 w-8 rounded-md border text-sm font-bold",
                                                isOn ? "bg-base-200 hover:bg-base-100" : "bg-base-200 cursor-not-allowed"
                                            )}
                                            title="Move Down"
                                        >
                                            ↓
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* GPA */}
                <div className="px-3 pb-3">
                    <h2 className="mb-2 font-bold text-xl">GPA</h2>
                    <div className="grid grid-cols-2 gap-2">
                        <ToggleButton active={showGpa} onClick={() => setShowGpa(true)}>
                            GPA Show
                        </ToggleButton>
                        <ToggleButton active={!showGpa} onClick={() => setShowGpa(false)}>
                            GPA Hidden
                        </ToggleButton>
                    </div>
                </div>

                {/* Comment */}
                <div className="px-3 pb-3">
                    <h2 className="mb-2 font-bold text-xl">Comment</h2>
                    <div className="grid grid-cols-2 gap-2">
                        <ToggleButton active={showComments} onClick={() => setShowComments(true)}>
                            Comment Show
                        </ToggleButton>
                        <ToggleButton active={!showComments} onClick={() => setShowComments(false)}>
                            Comment Hidden
                        </ToggleButton>
                    </div>
                </div>

                {/* Seal */}
                <div className="px-3 pb-4">
                    <h2 className="mb-2 font-bold text-xl">Seal</h2>

                    <div className="grid grid-cols-3 gap-2">
                        <ToggleButton active={showTeacherSign} onClick={() => setShowTeacherSign((p) => !p)}>
                            <span className="block text-[11px] font-semibold truncate">Class Teacher</span>
                        </ToggleButton>

                        <ToggleButton active={showPrincipalSign} onClick={() => setShowPrincipalSign((p) => !p)}>
                            <span className="block text-[11px] font-semibold truncate">Principal</span>
                        </ToggleButton>

                        <ToggleButton active={showHologram} onClick={() => setShowHologram((p) => !p)}>
                            <span className="block text-[11px] font-semibold truncate">Hologram</span>
                        </ToggleButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Marksheet2;
