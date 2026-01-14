import Select from "react-select";

const MultiSelectSearch = ({
    options = [],
    values = [],                 // array of selected values
    setValues,
    placeholder = "Select...",
    isDisabled = false,
}) => {
    const safeOptions = Array.isArray(options) ? options : [];

    const selectedOptions = safeOptions.filter((opt) =>
        values.map(String).includes(String(opt?.value))
    );

    const selectStyles = {
        control: (base, state) => ({
            ...base,
            minHeight: "40px",
            borderColor: state.isFocused ? "#1DAA61" : base.borderColor,
            boxShadow: state.isFocused ? "0 0 0 1px #1DAA61" : "none",
            "&:hover": { borderColor: state.isFocused ? "#1DAA61" : base.borderColor },
        }),
        menuList: (base) => ({ ...base, maxHeight: "200px", overflowY: "auto" }),
    };

    return (
        <Select
            options={safeOptions}
            value={selectedOptions}
            onChange={(opts) => setValues((opts || []).map((o) => o.value))}
            placeholder={placeholder}
            isMulti
            isDisabled={isDisabled}
            className="w-full"
            styles={selectStyles}
        />
    );
};

{/* <MultiSelectSearch
  options={religions}
  values={s?.religions || []}
  setValues={(vals) => handleSelectChange(rowIndex, "religions", vals)}
  placeholder="Select Religions"
/> */}


export default MultiSelectSearch;
