import { useMemo, useRef, useState } from "react";
import { NavLink } from "react-router";
import damu from "../../../../assets/Exam/damu.png";
import damu1 from "../../../../assets/Exam/damu1.png";
import damu2 from "../../../../assets/Exam/damu2.png";
import damu3 from "../../../../assets/Exam/damu3.png";
import damu4 from "../../../../assets/Exam/damu4.png";
import damu5 from "../../../../assets/Exam/damu5.png";
import SLogo from "../../../../assets/Exam/sLogo.jpg";

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

const Marksheet6 = () => {
    const [schoolName, setSchoolName] = useState("Golden Hope School & College");
    const [address, setAddress] = useState("Amtoli , Chirirbandar , Dinajpur");
    const [examName, setExamName] = useState("First Terminal Examination 2025");
    const [previewUrl, setPreviewUrl] = useState(SLogo);

    const fileInputRef = useRef(null);

    // ====== Marksheet1 style functionality states ======
    const [photoSide, setPhotoSide] = useState("right"); // left | right
    const [photoShape, setPhotoShape] = useState("square"); // square | round

    const [showGpa, setShowGpa] = useState(true);
    const [showComments, setShowComments] = useState(true);

    const [showTeacherSign, setShowTeacherSign] = useState(true);
    const [showPrincipalSign, setShowPrincipalSign] = useState(true);
    const [showHologram, setShowHologram] = useState(true);

    // ====== Columns like Marksheet1 ======
    const MARKS_COLS = useMemo(
        () => [
            { key: "subject", label: "Subject", group: "Subject" },

            { key: "marks_total", label: "Full Marks", group: "Marks" },
            { key: "marks_highest", label: "Highest", group: "Marks" },

            { key: "obt_written", label: "Written", group: "Obtained" },
            { key: "obt_mcq", label: "MCQ", group: "Obtained" },
            { key: "obt_total", label: "Total", group: "Obtained" },

            { key: "res_grade", label: "Grade", group: "Result" },
            { key: "res_gpa", label: "GPA", group: "Result" },
        ],
        []
    );

    const [visibleCols, setVisibleCols] = useState(() => MARKS_COLS.map((c) => c.key));

    const toggleCol = (key) => {
        setVisibleCols((prev) => {
            const exists = prev.includes(key);
            if (exists && prev.length === 1) return prev; // prevent empty table
            return exists ? prev.filter((k) => k !== key) : [...prev, key];
        });
    };

    const visibleMeta = useMemo(
        () => MARKS_COLS.filter((c) => visibleCols.includes(c.key)),
        [visibleCols, MARKS_COLS]
    );

    const groupCount = useMemo(() => {
        const counts = {};
        visibleMeta.forEach((c) => {
            counts[c.group] = (counts[c.group] || 0) + 1;
        });
        return counts;
    }, [visibleMeta]);

    // demo rows (আপনি চাইলে API data বসাবেন)
    const marksRows = useMemo(
        () => [
            ["Agriculture", 50, 48, "28/30", "20/20", 48, "A+", "5.00"],
            ["Bangla 1st Paper", 100, 91, "60/70", "24/30", 84, "A+", "5.00"],
            ["Bangla 2nd Paper", 50, 46, "34/35", "12/15", 46, "A+", "5.00"],
            ["BD & World", 100, 94, "63/70", "29/30", 92, "A+", "5.00"],
            ["English 1st Paper", 100, 90, "90/100", "--/--", 90, "A+", "5.00"],
            ["English 2nd Paper", 50, 45, "45/50", "--/--", 45, "A+", "5.00"],
            ["ICT", 50, 47, "27/30", "20/20", 47, "A+", "5.00"],
            ["Islam", 100, 91, "62/70", "28/30", 90, "A+", "5.00"],
            ["Math", 100, 87, "63/70", "22/30", 85, "A+", "5.00"],
            ["Science", 100, 90, "55/70", "27/30", 82, "A+", "5.00"],
        ],
        []
    );

    // convert to object based rows (key mapping)
    const mappedRows = useMemo(() => {
        return marksRows.map((r) => ({
            subject: r[0],
            marks_total: r[1],
            marks_highest: r[2],
            obt_written: r[3],
            obt_mcq: r[4],
            obt_total: r[5],
            res_grade: r[6],
            res_gpa: r[7],
        }));
    }, [marksRows]);

    // Print function
    const print = () => window.print();

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
                            `block rounded border-2 ${isActive ? "border-primary" : "border-transparent"}`
                        }
                    >
                        <img src={damu} alt="" />
                    </NavLink>

                    {[damu1, damu2, damu3, damu4, damu5].map((img, i) => (
                        <NavLink
                            key={i}
                            to={`/admin/customage-marksheet/${i + 1}`}
                            className={({ isActive }) =>
                                `block rounded border-2 ${isActive ? "border-primary" : "border-transparent"}`
                            }
                        >
                            <img src={img} alt="" />
                        </NavLink>
                    ))}
                </div>
            </div>

            {/* ---------- MAIN MARKSHEET ---------- */}
            <div className="col-span-6 h-[calc(100vh-85px)] overflow-y-scroll print:overflow-y-hidden print:h-auto print:w-full print:col-span-full">
                <div
                    className="bg-base-200 p-6 print:p-2 shadow relative border-8 print:h-[1047px]"
                    style={{
                        borderImage:
                            "repeating-linear-gradient(45deg, #8bc34a 0, #8bc34a 10px, white 10px, white 20px) 8",
                    }}
                >
                    {/* Watermark */}
                    <img
                        src="https://bdschool.site/storage/uploads/idCardSettingFile/0400311751273109.jpg"
                        alt="Watermark"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-10 object-cover pointer-events-none"
                    />

                    <div className="relative z-10">
                        {/* Header */}
                        <div className="text-center mb-2">
                            <img
                                src={previewUrl || "https://bdschool.site/storage/uploads/idCardSettingFile/0400311751273109.jpg"}
                                alt="Institute Logo"
                                className="mx-auto w-20 h-20 object-cover rounded"
                            />

                            <h1 className="text-2xl font-bold">{schoolName}</h1>
                            <p className="text-gray-700">{address}</p>
                            <p className="text-lg font-semibold mt-1">{examName}</p>
                        </div>

                        {/* Student Info */}
                        <div className={cx("flex justify-between gap-4 w-full", photoSide === "left" && "flex-row-reverse")}>
                            {/* Photo */}
                            <img
                                src="https://bdschool.site/storage/uploads/student_photo/3018861751734498.jpg"
                                alt="Student"
                                className={cx(
                                    "w-[116px] h-[136px] object-cover border border-black",
                                    photoShape === "round" ? "rounded-full" : "rounded"
                                )}
                            />

                            {/* Student Details */}
                            <table className="w-full">
                                <tbody>
                                    <tr>
                                        <td className="font-bold text-base">Name</td>
                                        <td>: TANISHA AKHTAR</td>
                                    </tr>
                                    <tr>
                                        <td className="font-bold text-base">Father&apos;s Name</td>
                                        <td>: MD BABUL MOSTOFA MONDOL</td>
                                    </tr>
                                    <tr>
                                        <td className="font-bold text-base">ID No</td>
                                        <td>: st-202510146</td>
                                    </tr>
                                    <tr>
                                        <td className="font-bold text-base">Class</td>
                                        <td>: Eight</td>
                                    </tr>
                                    <tr>
                                        <td className="font-bold text-base">Session</td>
                                        <td>: 2025</td>
                                    </tr>
                                    <tr>
                                        <td className="font-bold text-base">Section</td>
                                        <td>: Common</td>
                                    </tr>
                                    <tr>
                                        <td className="font-bold text-base">Grade</td>
                                        <td>: A+</td>
                                    </tr>
                                    <tr>
                                        <td className="font-bold text-base">Merit Position</td>
                                        <td>: 2nd</td>
                                    </tr>
                                </tbody>
                            </table>

                            {/* Grade Scale */}
                            <table className="w-[220px] border text-sm border-black border-collapse">
                                <thead className="bg-gray-200">
                                    <tr>
                                        <th className="border border-black">Range</th>
                                        <th className="border border-black">Grade</th>
                                        <th className="border border-black">GPA</th>
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
                                                <td key={j} className="border border-black text-center">
                                                    {c}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Marks Table (Marksheet1 style column control) */}
                        <div className="mt-4 overflow-x-auto">
                            <table className="w-full border-collapse border border-black text-sm">
                                <thead>
                                    <tr>
                                        {groupCount["Subject"] > 0 && (
                                            <th className="border border-black p-1" rowSpan={2}>
                                                Subject
                                            </th>
                                        )}

                                        {groupCount["Marks"] > 0 && (
                                            <th className="border border-black p-1" colSpan={groupCount["Marks"]}>
                                                Marks
                                            </th>
                                        )}

                                        {groupCount["Obtained"] > 0 && (
                                            <th className="border border-black p-1" colSpan={groupCount["Obtained"]}>
                                                Obtained
                                            </th>
                                        )}

                                        {groupCount["Result"] > 0 && (
                                            <th className="border border-black p-1" colSpan={groupCount["Result"]}>
                                                Result
                                            </th>
                                        )}
                                    </tr>

                                    <tr>
                                        {visibleMeta
                                            .filter((c) => c.group !== "Subject")
                                            .map((c) => (
                                                <th key={c.key} className="border border-black p-1">
                                                    {c.label}
                                                </th>
                                            ))}
                                    </tr>
                                </thead>

                                <tbody>
                                    {mappedRows.map((r, i) => (
                                        <tr key={i} className="text-center">
                                            {visibleMeta.map((c) => (
                                                <td
                                                    key={`${i}-${c.key}`}
                                                    className={cx("border border-black p-1", c.key === "subject" ? "text-left" : "text-center")}
                                                >
                                                    {r[c.key]}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}

                                    {/* Total Row (optional) */}
                                    <tr className="bg-gray-100 font-semibold">
                                        <td className="border border-black p-1 text-left">Total Exam Marks</td>
                                        <td className="border border-black p-1 text-center" colSpan={Math.max(1, visibleMeta.length - 1)}>
                                            (Your total row logic here)
                                        </td>
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
                            <div className="mt-5 text-sm">
                                <table className="w-full border border-black border-collapse">
                                    <tbody>
                                        <tr>
                                            <td className="border border-black p-2 font-semibold w-48">Principal Comments</td>
                                            <td className="border border-black p-2">Has a well-developed sense of humor.</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-black p-2 font-semibold">Teacher Comments</td>
                                            <td className="border border-black p-2">
                                                Has an impressive understanding and depth of knowledge about their interests.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {/* Signatures / Seal */}
                        <div className="mt-10 flex justify-between text-nowrap">
                            <div className="w-40 text-center">
                                {showTeacherSign ? <div className="border-t pt-2">Signature of class teacher</div> : null}
                            </div>

                            <div className="w-40 text-center">
                                {showPrincipalSign ? <div className="border-t pt-2">Signature of principal</div> : null}
                            </div>

                            <div className="w-40 text-center">
                                {showHologram ? (
                                    <img
                                        src="https://observantbd.com/storage/uploads/idCardSettingFile/1926251750644372.png"
                                        alt="Seal"
                                        className="mx-auto h-16 object-contain"
                                    />
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ---------- RIGHT PANEL ---------- */}
            <div className="col-span-3 h-[calc(100vh-85px)] overflow-y-auto bg-base-200 print:hidden">
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
                </div>

                {/* Table control */}
                <div className="px-3 pb-3">
                    <h2 className="mb-2 font-bold text-xl">Table</h2>

                    <div className="grid grid-cols-2 gap-2">
                        {MARKS_COLS.map((c) => {
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
                                            "flex-1 text-center text-sm font-semibold",
                                            isOn ? "text-primary" : "text-slate-600"
                                        )}
                                        title="Click to show/hide"
                                    >
                                        {c.label}
                                    </button>
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

export default Marksheet6;
