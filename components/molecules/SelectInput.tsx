import { cn } from "@/libs/utils";
import { ChangeEvent } from "react";

interface Props {
  placeholder?: string;
  options: Option[];
  className?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const SelectInput = ({
  className = "",
  placeholder = "",
  options = [],
  value,
  onChange,
}: Props) => {
  return (
    <select
      defaultValue={value}
      onChange={onChange}
      className={cn("select rounded-lg font-inter h-10", className)}
    >
      {options.length > 0 ? (
        <>
          {placeholder !== "" && <option disabled={true}>{placeholder}</option>}
          {options.map((option) => (
            <option key={String(option.label)} value={option.value}>
              {option.label}
            </option>
          ))}
        </>
      ) : (
        <span>No data found</span>
      )}
    </select>
  );
};

export default SelectInput;
