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

const Marksheet3 = () => {
    const axiosSecure = UseAxiosSecure();
    const FILE_BASE = `${url}/storage/uploads/idCardSettingFile`;

    const MARKS_COLS = useMemo(
        () => [
            { key: "subject", label: "Subject", group: "Subject" },
            { key: "marks_total", label: "Total", group: "Marks" },
            { key: "marks_highest", label: "Highest", group: "Marks" },

            { key: "obt_written", label: "Written", group: "Obtained" },
            { key: "obt_mcq", label: "MCQ", group: "Obtained" },
            { key: "obt_practical", label: "Practical", group: "Obtained" },
            { key: "obt_viva", label: "Viva", group: "Obtained" },
            { key: "obt_total", label: "Total", group: "Obtained" },

            { key: "sw_avg", label: "Avarage", group: "Subject Wise" },
            { key: "sw_pos", label: "Position", group: "Subject Wise" },

            { key: "res_grade", label: "Grade", group: "Result" },
            { key: "res_gpa", label: "GPA", group: "Result" },
        ],
        []
    );

    const [photoSide, setPhotoSide] = useState("right");
    const [photoShape, setPhotoShape] = useState("square");

    const [showGpa, setShowGpa] = useState(true);
    const [showComments, setShowComments] = useState(true);

    const [showTeacherSign, setShowTeacherSign] = useState(true);
    const [showPrincipalSign, setShowPrincipalSign] = useState(true);
    const [showHologram, setShowHologram] = useState(true);

    // ✅ only show/hide (no reorder, no checkbox)
    const [visibleCols, setVisibleCols] = useState(() => MARKS_COLS.map((c) => c.key));

    const toggleCol = (key) => {
        setVisibleCols((prev) => {
            const exists = prev.includes(key);
            if (exists && prev.length === 1) return prev; // prevent empty table
            return exists ? prev.filter((k) => k !== key) : [...prev, key];
        });
    };

    // keep original column order
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

    const marksRows = useMemo(
        () =>
            Array.from({ length: 10 }).map(() => ({
                subject: "Bangla 1st Bangla 1st",
                marks_total: 100,
                marks_highest: 90,
                obt_written: "20/20",
                obt_mcq: "01/20",
                obt_practical: "20/20",
                obt_viva: "10/20",
                obt_total: 10,
                sw_avg: 10,
                sw_pos: "1st",
                res_grade: "B",
                res_gpa: "3.5",
            })),
        []
    );

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
            <div className="col-span-6 h-[calc(100vh-85px)] overflow-y-scroll print:overflow-y-hidden print:h-auto print:w-full print:col-span-full">
                <div
                    className="bg-base-200 p-6 print:p-2 shadow relative border-8 print:h-[1047px]"
                    style={{
                        borderImage:
                            "repeating-linear-gradient(45deg, #8bc34a 0, #8bc34a 10px, white 10px, white 20px) 8",
                    }}
                >
                    {/* Header */}
                    <div className="flex gap-x-3">
                        <div className="text-center mt-0 pt-0 flex-1">
                            <h1 className="text-2xl font-semibold tracking-tight uppercase leading-8">
                                {data?.institute_name_english}
                            </h1>
                            <div className=" h-20 rounded-full flex items-center justify-center">
                                <img
                                    src={`${FILE_BASE}/${data?.logo_image}`}
                                    className="w-full h-full object-contain"
                                    alt="Logo"
                                />
                            </div>
                            <p className="text-base font-medium tracking-tight capitalize leading-8">address</p>

                            <p className="text-sm">School Code: 781791, EMIS: 00703020148</p>
                            <p className="text-base font-semibold mt-1">Frist terminal examination</p>

                            <div className="mt-2">
                                <h2 className="text-lg font-semibold border-b-2 border-black inline-block">
                                    ACADEMIC TRANSCRIPT
                                </h2>


                            </div>
                        </div>


                    </div>

                    {/* Student Info */}
                    <div className={`flex  gap-2 mt-4`}>
                        <div className="w-full">
                            <table className="min-w-full text-sm  ">
                                <tbody>
                                    <tr>
                                        <td className=" px-2 py-1">
                                            <strong>Name</strong>
                                        </td>
                                        <td className=" px-2 py-1 truncate max-w-44">: Drobo Jothi Das</td>
                                        <td className=" px-2 py-1">
                                            <strong>Class</strong>
                                        </td>
                                        <td className=" px-2 py-1">: Nine (Common)</td>
                                    </tr>
                                    <tr>
                                        <td className=" px-2 py-1">
                                            <strong>Father</strong>
                                        </td>
                                        <td className=" px-2 py-1 truncate max-w-44">: RAM KRISHNA ROY</td>
                                        <td className=" px-2 py-1">
                                            <strong>Gender</strong>
                                        </td>
                                        <td className=" px-2 py-1">: Male</td>
                                    </tr>
                                    <tr>
                                        <td className=" px-2 py-1">
                                            <strong>Mother</strong>
                                        </td>
                                        <td className=" px-2 py-1 truncate max-w-44">: BHAGABATI RANI RAY</td>
                                        <td className=" px-2 py-1">
                                            <strong>Id</strong>
                                        </td>
                                        <td className=" px-2 py-1">: st-202510868</td>
                                    </tr>
                                    <tr>
                                        <td className=" px-2 py-1">
                                            <strong>Roll</strong>
                                        </td>
                                        <td className=" px-2 py-1">: 02</td>
                                        <td className="px-2 py-1">
                                            <strong>DOB</strong>
                                        </td>
                                        <td className=" px-2 py-1">: 01-01-2010</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="text-[14px] text-center w-[200px]">
                            <table className="border border-gray-400 border-collapse w-full">
                                <thead>
                                    <tr>
                                        <th className="border font-semibold">Range</th>
                                        <th className="border font-semibold">Grade</th>
                                        <th className="border font-semibold">GPA</th>
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
                                    ].map(([range, grade, gpa], i) => (
                                        <tr key={i}>
                                            <td className="border font-semibold">{range}</td>
                                            <td className="border">{grade}</td>
                                            <td className="border">{gpa}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>

                    {/* ✅ Marks Table (DESIGN SAME, ONLY FUNCTIONAL) */}
                    <div className="mt-4">
                        <table className="w-full border-collapse border border-black text-sm">
                            <thead>
                                <tr>
                                    {groupCount["Subject"] > 0 && (
                                        <th className="border p-0.5" rowSpan={2}>
                                            Subject
                                        </th>
                                    )}

                                    {groupCount["Marks"] > 0 && (
                                        <th className="border p-0.5" colSpan={groupCount["Marks"]}>
                                            Marks
                                        </th>
                                    )}

                                    {groupCount["Obtained"] > 0 && (
                                        <th className="border p-0.5" colSpan={groupCount["Obtained"]}>
                                            Obtained
                                        </th>
                                    )}

                                    {groupCount["Subject Wise"] > 0 && (
                                        <th className="border p-0.5 text-nowrap" colSpan={groupCount["Subject Wise"]}>
                                            Subject Wise
                                        </th>
                                    )}

                                    {groupCount["Result"] > 0 && (
                                        <th className="border p-0.5" colSpan={groupCount["Result"]}>
                                            Result
                                        </th>
                                    )}
                                </tr>

                                <tr>
                                    {visibleMeta
                                        .filter((c) => c.group !== "Subject")
                                        .map((c) => (
                                            <th key={c.key} className="border p-0.5">
                                                {c.label}
                                            </th>
                                        ))}
                                </tr>
                            </thead>

                            <tbody>
                                {marksRows.map((r, i) => (
                                    <tr key={i} className="text-center">
                                        {visibleMeta.map((c) => (
                                            <td
                                                key={`${i}-${c.key}`}
                                                className={cx("border px-1", c.key === "subject" ? "text-left" : "text-center")}
                                            >
                                                {r[c.key]}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Grand Total / Result */}
                    <div className="mt-4 text-sm">
                        <table className="border border-black border-collapse w-full">
                            <tbody>
                                <tr className="text-center font-bold">
                                    <td className="border text-left px-2 py-1">GRAND TOTAL</td>

                                    {showGpa ? (
                                        <>
                                            <td className="border text-start px-2 py-1">1,250</td>
                                            <td className="border text-start px-2 py-1">Average</td>
                                            <td className="border text-start px-2 py-1">1,094</td>
                                        </>
                                    ) : (
                                        <>
                                            <td className="border text-start px-2 py-1">1,250</td>
                                            <td className="border text-start px-2 py-1">Average</td>
                                            <td className="border text-start px-2 py-1">1,094</td>
                                            <td className="border text-center text-2xl px-2 py-1" rowSpan={2}>
                                                GPA: 5.00
                                            </td>
                                        </>
                                    )}
                                </tr>

                                <tr className="text-center font-bold">
                                    <td className="border text-left px-2 py-1">RESULT</td>
                                    <td className="border text-start px-2 py-1">Pass</td>
                                    <td className="border text-left px-2 py-1">Position</td>
                                    <td className="border text-start px-2 py-1">3rd</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Comments ( functional) */}
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

                    {/* Signatures / Seal ( functional) */}
                    <div className="mt-5 flex justify-between text-sm">
                        <div className="w-40 text-center">
                            {showTeacherSign ? (
                                <>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <p>Class Teacher Signature</p>
                                </>
                            ) : null}
                        </div>

                        <div className="w-40 text-center">
                            {showPrincipalSign ? (
                                <>
                                    <img
                                        src="https://observantbd.com/storage/uploads/idCardSettingFile/2983451750237721.png"
                                        alt="Principal Signature"
                                        className="mx-auto h-20"
                                    />
                                    <p>Principal Signature</p>
                                </>
                            ) : null}
                        </div>

                        <div className="w-40 text-center">
                            {showHologram ? (
                                <img
                                    src="https://observantbd.com/storage/uploads/idCardSettingFile/1926251750644372.png"
                                    alt="Seal"
                                    className="mx-auto h-30"
                                />
                            ) : null}
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

                {/* Table control (clean: show/hide only) */}
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
                                        className={cx("flex-1 text-center text-sm font-semibold", isOn ? "text-primary" : "text-slate-600")}
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
                            GPA Hidden
                        </ToggleButton>
                        <ToggleButton active={!showGpa} onClick={() => setShowGpa(false)}>
                            GPA show
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

export default Marksheet3;