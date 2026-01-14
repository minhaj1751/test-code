import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";

import { url } from "../../../connection";
import ImagePicker from "../../componentes/ImagePicker";
import Loader from "../../componentes/Loader";
import UseAuth from "../../Hooks/UseAuth";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";

const FILE_BASE = `${url}/storage/uploads/idCardSettingFile`;

const InstituteSetting = ({ panelHide, closeAddPanel }) => {
    const axiosSecure = UseAxiosSecure();
    const queryClient = useQueryClient();
    const { loading } = UseAuth();

    /* ================= REFS ================= */
    const refs = {
        hologram: useRef(null),
        background: useRef(null),
        seal: useRef(null),
        sign: useRef(null),
        logo: useRef(null),
        frontendLogo: useRef(null),
        frontendBgLogo: useRef(null),
    };

    /* ================= STATE ================= */
    // selected files
    const [images, setImages] = useState({
        hologram: null,
        background: null,
        seal: null,
        sign: null,
        logo: null,
        frontendLogo: null,
        frontendBgLogo: null,
    });

    // blob previews (new selections)
    const [previews, setPreviews] = useState({
        hologram: null,
        background: null,
        seal: null,
        sign: null,
        logo: null,
        frontendLogo: null,
        frontendBgLogo: null,
    });

    // server images (filenames) - so we can remove oldImage from UI
    const [serverImages, setServerImages] = useState({
        hologram: null,
        background: null,
        seal: null,
        sign: null,
        logo: null,
        frontendLogo: null,
        frontendBgLogo: null,
    });

    // remove flags for backend
    const [removed, setRemoved] = useState({
        hologram: 0,
        background: 0,
        seal: 0,
        sign: 0,
        logo: 0,
        frontendLogo: 0,
        frontendBgLogo: 0,
    });

    // form state
    const [form, setForm] = useState({
        institute_name_bangla: "",
        institute_name_english: "",
        institute_contact_no: "",
        institute_contact_no_2: "",
        institute_contact_email: "",
        image_opacity: 0,
        institute_code: "",
        emis_code: "",
        institute_established: "",
        institute_address_bangla: "",
        institute_address: "",
    });

    /* ================= GET ================= */
    const { data, isLoading } = useQuery({
        queryKey: ["institute_setting"],
        queryFn: async () => {
            const res = await axiosSecure.get("/api/institute-setting");
            return res?.data?.idCardSettingData || {};
        },
    });

    const toUrl = (filename) => (filename ? `${FILE_BASE}/${filename}` : null);

    /* ================= FILL DATA ================= */
    useEffect(() => {
        if (!data?.id) return;

        setForm({
            institute_name_bangla: data?.institute_name_bangla ?? "",
            institute_name_english: data?.institute_name_english ?? "",
            institute_contact_no: data?.institute_contact_no ?? "",
            institute_contact_no_2: data?.institute_contact_no_2 ?? "",
            institute_contact_email: data?.institute_contact_email ?? "",
            image_opacity: Number(data?.image_opacity ?? 0),
            institute_code: data?.institute_code ?? "",
            emis_code: data?.emis_code ?? "",
            institute_established: data?.institute_established ?? "",
            institute_address_bangla: data?.institute_address_bangla ?? "",
            institute_address: data?.institute_address ?? "",
        });

        // set server filenames (from JSON)
        setServerImages({
            hologram: data?.hologram_image || null,
            background: data?.background_image || null,
            seal: data?.seal_image || null,
            sign: data?.sign_image || null,
            logo: data?.logo_image || null,
            frontendLogo: data?.frontend_logo_image || null,
            frontendBgLogo: data?.frontend_back_logo_image || null,
        });

        // reset local selections
        setImages({
            hologram: null,
            background: null,
            seal: null,
            sign: null,
            logo: null,
            frontendLogo: null,
            frontendBgLogo: null,
        });

        setPreviews({
            hologram: null,
            background: null,
            seal: null,
            sign: null,
            logo: null,
            frontendLogo: null,
            frontendBgLogo: null,
        });

        // reset remove flags
        setRemoved({
            hologram: 0,
            background: 0,
            seal: 0,
            sign: 0,
            logo: 0,
            frontendLogo: 0,
            frontendBgLogo: 0,
        });
    }, [data?.id]);

    /* ================= UPDATE ================= */
    const { mutate, isPending } = useMutation({
        mutationFn: async (fd) =>
            axiosSecure.post(`/api/update-institute-setting/${data?.id}`, fd),
        onSuccess: (res) => {
            toast.success(res?.data?.message || "Updated successfully");
            queryClient.invalidateQueries({ queryKey: ["institute_setting"] });
            closeAddPanel?.();
        },
        onError: (e) =>
            toast.error(e?.response?.data?.message || e?.message || "Update failed"),
    });

    /* ================= HANDLERS ================= */
    const handleChange = (e) =>
        setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

    const handleImage = (key) => (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // if user selects a new file, cancel
        setRemoved((prev) => ({ ...prev, [key]: 0 }));

        setPreviews((prev) => {
            const old = prev[key];
            if (old && old.startsWith("blob:")) URL.revokeObjectURL(old);
            return { ...prev, [key]: URL.createObjectURL(file) };
        });

        setImages((prev) => ({ ...prev, [key]: file }));
    };

    const removeImage = (key) => {
        // remove preview blob
        setPreviews((prev) => {
            const old = prev[key];
            if (old && old.startsWith("blob:")) URL.revokeObjectURL(old);
            return { ...prev, [key]: null };
        });

        // remove selected file
        setImages((prev) => ({ ...prev, [key]: null }));

        // remove old server image from UI
        setServerImages((prev) => ({ ...prev, [key]: null }));

        // mark remove for backend
        setRemoved((prev) => ({ ...prev, [key]: 1 }));

        if (refs[key]?.current) refs[key].current.value = "";
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const fd = new FormData();

        // text fields
        Object.entries(form).forEach(([k, v]) => fd.append(k, v));

        // files
        if (images.hologram) fd.append("hologram_image", images.hologram);
        if (images.background) fd.append("background_image", images.background);
        if (images.seal) fd.append("seal_image", images.seal);
        if (images.sign) fd.append("sign_image", images.sign);
        if (images.logo) fd.append("logo_image", images.logo);
        if (images.frontendLogo)
            fd.append("frontend_logo_image", images.frontendLogo);
        if (images.frontendBgLogo)
            fd.append("frontend_back_logo_image", images.frontendBgLogo);

        // remove flags (backend should handle these)
        fd.append("remove_hologram_image", removed.hologram);
        fd.append("remove_background_image", removed.background);
        fd.append("remove_seal_image", removed.seal);
        fd.append("remove_sign_image", removed.sign);
        fd.append("remove_logo_image", removed.logo);
        fd.append("remove_frontend_logo_image", removed.frontendLogo);
        fd.append("remove_frontend_back_logo_image", removed.frontendBgLogo);

        mutate(fd);
    };

    /* ================= UI ================= */
    return (
        <div className="fixed inset-0 bg-black/20 z-40">
            <div
                className={`fixed top-0 right-0 w-full lg:w-4/12 h-screen bg-base-200 overflow-y-auto z-40 ${panelHide ? "slide-in" : "slide-out"
                    }`}
            >
                {isLoading ? (
                    <Loader />
                ) : (
                    <>
                        <div className="flex justify-between items-center border-b border-accent px-5 py-3">
                            <h1 className="font-semibold">Institute Setting</h1>
                            <button onClick={closeAddPanel}>
                                <IoMdClose size={22} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="px-5 space-y-3 mt-4 pb-8">
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    ["Institute Name Bangla", "institute_name_bangla", "col-span-2", true],
                                    ["Institute Name English", "institute_name_english", "col-span-2", true],
                                    ["Contact 1", "institute_contact_no", "col-span-1"],
                                    ["Contact 2", "institute_contact_no_2", "col-span-1"],
                                    ["Email", "institute_contact_email", "col-span-2"],
                                    ["Institute Code", "institute_code", "col-span-1"],
                                    ["EMIS Code", "emis_code", "col-span-1"],
                                    ["Established", "institute_established", "col-span-1"],
                                    ["Address Bangla", "institute_address_bangla", "col-span-2"],
                                    ["Institute Address English", "institute_address", "col-span-2"],
                                ].map(([label, name, colV, req]) => (
                                    <div key={name} className={colV}>
                                        <label className="font-semibold">
                                            {label} {req && <span className="text-red-500">*</span>}
                                        </label>
                                        <input
                                            name={name}
                                            value={form[name]}
                                            onChange={handleChange}
                                            required={req}
                                            className="w-full max-h-10 border border-accent px-3 py-2 rounded outline-none focus:ring-2 focus:ring-primary"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Opacity Slider */}
                            <div className="space-y-2">
                                <label className="font-semibold flex justify-between">
                                    <span>HoloGram Image Opacity</span>
                                    <span className="bg-base-300 px-2 py-1 rounded text-sm">
                                        {form.image_opacity}%
                                    </span>
                                </label>

                                <input
                                    type="range"
                                    name="image_opacity"
                                    min="0"
                                    max="100"
                                    step="1"
                                    value={form.image_opacity}
                                    onChange={handleChange}
                                    className="range range-primary range-sm w-full"
                                />

                                <div className="flex justify-between text-xs opacity-70">
                                    <span>0%</span>
                                    <span>50%</span>
                                    <span>100%</span>
                                </div>
                            </div>

                            {/* Images */}
                            <div className="grid grid-cols-3 gap-3">
                                <ImagePicker
                                    label="Hologram Image"
                                    inputRef={refs.hologram}
                                    oldImage={toUrl(serverImages.hologram)}
                                    preview={previews.hologram}
                                    onChange={handleImage("hologram")}
                                    onRemove={() => removeImage("hologram")}
                                />

                                <ImagePicker
                                    label="Background"
                                    inputRef={refs.background}
                                    oldImage={toUrl(serverImages.background)}
                                    preview={previews.background}
                                    onChange={handleImage("background")}
                                    onRemove={() => removeImage("background")}
                                />

                                <ImagePicker
                                    label="Seal Image"
                                    inputRef={refs.seal}
                                    oldImage={toUrl(serverImages.seal)}
                                    preview={previews.seal}
                                    onChange={handleImage("seal")}
                                    onRemove={() => removeImage("seal")}
                                />

                                <ImagePicker
                                    label="Sign Image"
                                    inputRef={refs.sign}
                                    oldImage={toUrl(serverImages.sign)}
                                    preview={previews.sign}
                                    onChange={handleImage("sign")}
                                    onRemove={() => removeImage("sign")}
                                />

                                <ImagePicker
                                    label="Logo Image"
                                    inputRef={refs.logo}
                                    oldImage={toUrl(serverImages.logo)}
                                    preview={previews.logo}
                                    onChange={handleImage("logo")}
                                    onRemove={() => removeImage("logo")}
                                />

                                <ImagePicker
                                    label="Frontend Logo"
                                    inputRef={refs.frontendLogo}
                                    oldImage={toUrl(serverImages.frontendLogo)}
                                    preview={previews.frontendLogo}
                                    onChange={handleImage("frontendLogo")}
                                    onRemove={() => removeImage("frontendLogo")}
                                />

                                <ImagePicker
                                    label="Frontend Background Logo"
                                    inputRef={refs.frontendBgLogo}
                                    oldImage={toUrl(serverImages.frontendBgLogo)}
                                    preview={previews.frontendBgLogo}
                                    onChange={handleImage("frontendBgLogo")}
                                    onRemove={() => removeImage("frontendBgLogo")}
                                />
                            </div>

                            <div className="flex justify-end gap-4 pt-4">
                                <button
                                    type="button"
                                    onClick={closeAddPanel}
                                    className="bg-secondary px-4 py-2 rounded"
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    disabled={isPending || loading}
                                    className="bg-primary text-primary-content px-4 py-2 rounded"
                                >
                                    {isPending ? "Updating..." : "Update"}
                                </button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default InstituteSetting;