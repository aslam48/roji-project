import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
  MenuItem,
  IconButton,
  InputAdornment,
  TextField,
  CircularProgress
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { SelectChangeEvent } from "@mui/material/Select";

interface FormInputProps {
  label?: string;
  type:
    | "text"
    | "email"
    | "number"
    | "password"
    | "select"
    | "name"
    | "date"
    | "year"
    | "textarea";
  id: string;
  name: string;
  value: string | string[];
  onChange: (
    event:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string | string[]>,
  ) => void;
  onBlur?: React.FocusEventHandler<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >;
  placeholder?: string;
  options?: { value: string; label: string }[];
  error?: string | string[];
  readOnly?: boolean;
  multiple?: boolean;
  isLoading?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  type,
  id,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  options,
  error,
  readOnly,
  multiple = false,
  isLoading = false
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  const handleSelectChange = (e: SelectChangeEvent<string | string[]>) => {
    onChange(e);
  };

  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const futureYearLimit = currentYear + 5;
    const years = [];

    for (let year = currentYear; year <= futureYearLimit; year++) {
      years.push({ value: year.toString(), label: year.toString() });
    }

    return years;
  };

  // ... (keep the existing state and functions)

  const renderSelectOptions = () => {
    if (isLoading) {
      return [
        <MenuItem key="loading" disabled>
          <CircularProgress size={20} />
        </MenuItem>
      ];
    }

    const menuItems = [
      <MenuItem key="placeholder" value="" disabled>
        {placeholder}
      </MenuItem>
    ];

    const optionsToRender = type === "year" ? generateYearOptions() : options;

    if (optionsToRender && optionsToRender.length > 0) {
      menuItems.push(
        ...optionsToRender.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))
      );
    }

    return menuItems;
  };

  return (
    <div className={`mb-3 ${error ? "has-error" : ""}`}>
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor={id}>{label}</InputLabel>
        {type === "select" || type === "year" ? (
          <Select
            id={id}
            name={name}
            value={value}
            onChange={handleSelectChange}
            onBlur={onBlur}
            label={label}
            fullWidth
            displayEmpty
            input={<OutlinedInput label={label} />}
            className="bg-[#F7F9FC] rounded-md"
            sx={{ height: "3.2rem" }}
            multiple={multiple}
            renderValue={(selected) => {
              if (multiple) {
                return (selected as string[])
                  .map((value) => options?.find((option) => option.value === value)?.label || value)
                  .join(", ");
              }
              return options?.find((option) => option.value === selected)?.label || (selected as string);
            }}
          >
            {renderSelectOptions()}
          </Select>
        ) : type === "textarea" ? (
          <TextField
            id={id}
            name={name}
            value={value}
            onChange={handleInputChange}
            onBlur={onBlur}
            placeholder={placeholder}
            multiline
            rows={3}
            variant="outlined"
            inputProps={{ maxLength: 120 }}
            fullWidth
            className="bg-[#F7F9FC] w-full rounded-md"
            sx={{ height: "6rem" }}
          />
        ) : (
          <OutlinedInput
            id={id}
            name={name}
            type={showPassword ? "text" : type}
            value={value}
            onChange={handleInputChange}
            onBlur={onBlur}
            placeholder={placeholder}
            readOnly={readOnly}
            endAdornment={
              type === "password" && (
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordVisibility} edge="end">
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )
            }
            label={label}
            fullWidth
            className="bg-[#F7F9FC] w-full rounded-md"
            sx={{ height: "3.2rem" }}
          />
        )}
      </FormControl>
      {error && <div className="text-red-500 text-xs mt-1">{error}</div>}
    </div>
  );
};

export default FormInput;
