
import Select from "react-select";

const SelectSearch = ({
  options = [],
  selectOption,
  setSelectOption,
  placeholder = "Select...",
  isClearable = true,
  isDisabled = false,
}) => {
  const safeOptions = Array.isArray(options) ? options : [];

  const selectStyles = {
    control: (base, state) => ({
      ...base,
      height: "40px",
      minHeight: "40px",
      borderColor: state.isFocused ? "#1DAA61" : base.borderColor,
      boxShadow: state.isFocused ? "0 0 0 1px #1DAA61" : "none",
      "&:hover": {
        borderColor: state.isFocused ? "#1DAA61" : base.borderColor,
      },
    }),
    menuList: (base) => ({
      ...base,
      maxHeight: "200px",
      overflowY: "auto",
    }),
  };

  const selectedOption =
    safeOptions.find((opt) => String(opt?.value) === String(selectOption)) || null;

  return (
    <Select
      options={safeOptions}
      value={selectedOption}
      onChange={(opt) => setSelectOption(opt ? opt.value : null)}
      placeholder={placeholder}
      isClearable={isClearable}
      isDisabled={isDisabled}
      className="w-full cursor-text"
      styles={selectStyles}
    />
  );
};


// {/* <SelectSearch
//     options={projects}
//     selectOption={gProject}
//     setSelectOption={setGProject}
//     placeholder="Select Course"
// /> */}

export default SelectSearch;
