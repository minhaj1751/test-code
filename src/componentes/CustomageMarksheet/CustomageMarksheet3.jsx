import { useRef, useState } from "react";
import { Link } from "react-router";
import damu1 from "../../../assets/Exam/damu1.png";
import damu2 from "../../../assets/Exam/damu2.png";
import SLogo from "../../../assets/Exam/sLogo.jpg";
import uploadimage from "../../../assets/logo/uploadimage.jpg";

const CustomageMarksheet = () => {
    const [schoolName, setSchoolName] = useState("Golden Hope School & College");
    const [address, setAddress] = useState("Amtoli , Chirirbandar , Dinajpur");
    const [examName, setExamName] = useState("First Terminal Examination 2025");

    // Custom uploaded logo (for header + left logo)
    const [previewUrl, setPreviewUrl] = useState(SLogo);

    const fileInputRef = useRef(null);

    // Print function
    const print = () => window.print();

    return (
        <div className='p-2 print:p-0 grid grid-cols-12 gap-2'>

            {/* ---------- LEFT CONTROL PANEL ---------- */}
            <div className='col-span-3 bg-base-200 print:hidden space-y-2'>
                <div className="flex justify-between items-center px-2 border-b-2 border-accent">
                    <h1 className='p-2 font-bold text-2xl'>Custom field</h1>
                    <button
                        onClick={print}
                        className="bg-primary py-1 px-3 text-secondary-content font-semibold text-lg rounded cursor-pointer"
                    >
                        Print
                    </button>
                </div>

                {/* School */}
                <div className='px-2 space-y-2'>
                    <label className='text-lg font-medium text-primary-content'>School or College Name</label>
                    <input
                        type="text"
                        value={schoolName}
                        onChange={(e) => setSchoolName(e.target.value)}
                        className="border-2 border-primary w-full h-10 px-2 rounded text-primary-content"
                    />
                </div>

                {/* Address */}
                <div className='px-2 space-y-2'>
                    <label className='text-lg font-medium text-primary-content'>Address</label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="border-2 border-primary w-full h-10 px-2 rounded text-primary-content"
                    />
                </div>

                {/* Exam Name */}
                <div className='px-2 space-y-2 '>
                    <label className='text-lg font-medium text-primary-content'>Exam Name</label>
                    <input
                        type="text"
                        value={examName}
                        onChange={(e) => setExamName(e.target.value)}
                        className="border-2 border-primary w-full h-10 px-2 rounded text-primary-content"
                    />
                </div>

                {/* Logo Upload */}
                <div className="p-2">
                    <h1 className="mb-2 font-semibold">Logo</h1>

                    <input
                        id="fileInput"
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                            const file = e.target.files?.[0] ?? null;

                            if (previewUrl) URL.revokeObjectURL(previewUrl);

                            if (file) {
                                const url = URL.createObjectURL(file);
                                setPreviewUrl(url);
                            } else {
                                setPreviewUrl(null);
                            }
                        }}
                    />

                    <label
                        htmlFor="fileInput"
                        className="flex flex-col items-center justify-center w-full border border-dashed px-3 py-4 rounded cursor-pointer hover:bg-gray-100"
                    >
                        <img
                            src={previewUrl || uploadimage}
                            alt="logo preview"
                            className="w-40 h-40 object-cover rounded mb-2"
                        />
                        <p className="text-gray-600 text-sm">Click to upload logo</p>
                    </label>
                </div>
            </div>

            {/* ---------- MAIN MARKSHEET ---------- */}
            <div className='col-span-6 print:w-full print:col-span-full'>
                <div className="bg-base-200 p-6 print:p-2 shadow relative border-8 print:h-[1047px]" style={{
                    borderImage: "repeating-linear-gradient(45deg, #8bc34a 0, #8bc34a 10px, white 10px, white 20px) 8"
                }}>

                    {/* Watermark */}
                    <img
                        src=""
                        className="absolute inset-0 w-[70%] mx-auto h-full object-contain opacity-10 pointer-events-none"
                        alt="Watermark"
                    />

                    {/* Header */}
                    <div className="flex gap-x-3">

                        {/* Logo Left */}
                        <div className="flex justify-center mb-2">
                            <div className="w-30 h-30 rounded-full flex items-center justify-center">
                                <img
                                    src={previewUrl}
                                    className="w-full h-full object-contain"
                                    alt="Logo"
                                />
                            </div>
                        </div>

                        {/* School Info */}
                        <div className="text-center mt-0 pt-0 flex-1">
                            <h1 className="text-2xl font-semibold tracking-tight uppercase leading-8">
                                {schoolName}
                            </h1>

                            <p>{address}</p>

                            <p className="text-sm">
                                School Code: 781791, EMIS: 00703020148
                            </p>

                            <div className="mt-2">
                                <h2 className="text-lg font-semibold border-4 px-10 border-black inline-block">
                                    REPORT CARD
                                </h2>

                                <p className="text-base font-semibold mt-1">
                                    {examName}
                                </p>
                            </div>
                        </div>

                        {/* Grade Table */}
                        <div className="text-[12px] text-center w-[150px] pr-2">
                            <table className="border border-gray-400 border-collapse w-full ml-2 mt-2">
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

                    {/* Student Info */}
                    <div className="flex gap-2 mt-4">
                        <div className="w-full">
                            <table className="min-w-full text-sm border border-black border-collapse">
                                <tbody>
                                    <tr>
                                        <td className="border px-2 py-1"><strong>Name</strong></td>
                                        <td className="border px-2 py-1 truncate max-w-44">Drobo Jothi Das</td>
                                        <td className="border px-2 py-1"><strong>Class</strong></td>
                                        <td className="border px-2 py-1">Nine (Common)</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-2 py-1"><strong>Father</strong></td>
                                        <td className="border px-2 py-1 truncate max-w-44">RAM KRISHNA ROY</td>
                                        <td className="border px-2 py-1"><strong>Gender</strong></td>
                                        <td className="border px-2 py-1">Male</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-2 py-1"><strong>Mother</strong></td>
                                        <td className="border px-2 py-1 truncate max-w-44">BHAGABATI RANI RAY</td>
                                        <td className="border px-2 py-1"><strong>Id</strong></td>
                                        <td className="border px-2 py-1">st-202510868</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-2 py-1"><strong>Roll</strong></td>
                                        <td className="border px-2 py-1">02</td>
                                        <td className="border px-2 py-1"><strong>DOB</strong></td>
                                        <td className="border px-2 py-1">01-01-2010</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Student Photo */}
                        <div className="h-[120px] w-[120px]">
                            <img
                                src="https://observantbd.com/storage/uploads/student_photo/9203301744951072.jpg"
                                alt="Student"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Marks Table */}
                    <div className="mt-4">
                        <table className="w-full border-collapse border border-black text-sm">
                            <thead>
                                <tr>
                                    {[
                                        "SUBJECTS",
                                        "MARKS",
                                        "SUBJECT AVERAGE",
                                        "Grade",
                                        "Point",
                                        "SUBJECT POSITION"
                                    ].map((h, i) => (
                                        <th key={i} className="border p-0.5">{h}</th>
                                    ))}
                                </tr>
                            </thead>

                            <tbody>
                                {[
                                    ["Bangla 1st", "86/100", "64", "A+", "5.00", "2nd"],
                                    ["Bangla 2nd", "92/100", "71", "A+", "5.00", "4th"],
                                    ["Biology/Geography", "85/100", "71", "A+", "5.00", "4th"],
                                    ["Chemistry/History", "86/100", "73", "A+", "5.00", "4th"],
                                    ["English 1st", "75/100", "61", "A", "4.00", "8th"],
                                    ["English 2nd", "91/100", "68", "A+", "5.00", "2nd"],
                                    ["Higher Math/Agriculture", "84/100", "74", "A+", "5.00", "15th"],
                                    ["Math", "89/100", "56", "A+", "5.00", "1st"],
                                    ["Physics/Civics", "94/100", "70", "A+", "5.00", "3rd"],
                                    ["Religion", "80/100", "74", "A+", "5.00", "13th"],
                                    ["S.Science/Science", "89/100", "59", "A+", "5.00", "1st"],
                                    ["Drawing", "47/50", "33", "A+", "5.00", "6th"],
                                    ["Extra Curriculum", "48/50", "45", "A+", "5.00", "9th"],
                                    ["ICT", "48/50", "42", "A+", "5.00", "11th"],
                                ].map(([s, m, a, g, p, pos], i) => (
                                    <tr key={i} className="text-center">
                                        <td className="border p-0.5 text-left">{s}</td>
                                        <td className="border">{m}</td>
                                        <td className="border">{a}</td>
                                        <td className="border">{g}</td>
                                        <td className="border">{p}</td>
                                        <td className="border">{pos}</td>
                                    </tr>
                                ))}

                                <tr className="text-center font-bold">
                                    <td className="border text-left px-2 py-1">GRAND TOTAL</td>
                                    <td className="border text-start px-2 py-1" colSpan={5}>
                                        1,094/1,250, Average: 87.52%
                                    </td>
                                </tr>

                                <tr className="text-center font-bold">
                                    <td className="border text-left px-2 py-1">RESULT</td>
                                    <td className="border text-start px-2 py-1" colSpan={5}>Pass</td>
                                </tr>

                                <tr className="text-center font-bold">
                                    <td className="border text-left px-2 py-1">Position</td>
                                    <td className="border text-start px-2 py-1" colSpan={5}>3rd</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Comments */}
                    <div className="mt-4 text-sm">
                        <table className="border border-black border-collapse w-full">
                            <tbody>
                                <tr>
                                    <td className="border p-2 font-semibold">Principal Comments</td>
                                    <td className="border p-2">
                                        Has a well-developed sense of humor.
                                    </td>
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

                    <div className="mt-5 flex justify-between text-sm">
                        <div className="w-40 text-center">
                            <br /><br /><br /><br />
                            <p>Class Teacher Signature</p>
                        </div>

                        <div className="w-40 text-center">
                            <img
                                src="https://observantbd.com/storage/uploads/idCardSettingFile/2983451750237721.png"
                                alt="Principal Signature"
                                className="mx-auto h-20"
                            />
                            <p>Principal Signature</p>
                        </div>

                        <div className="w-40 text-center">
                            <img
                                src="https://observantbd.com/storage/uploads/idCardSettingFile/1926251750644372.png"
                                alt="Seal"
                                className="mx-auto h-30"
                            />
                        </div>
                    </div>

                </div>
            </div>

            {/* RIGHT PANEL */}
            <div className='col-span-3 bg-base-200 print:hidden'>
                <h1 className='p-2 font-bold text-2xl'>Template</h1>
                <div className="grid grid-cols-2">
                    <Link to="../customage-marksheet1" >
                        <img src={damu1} alt="" />
                    </Link>
                    <Link to="../customage-marksheet2">
                        <img src={damu2} alt="" />
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default CustomageMarksheet;