import React from "react";

export default function SearchInput({ value, onChange }) {
  return (
    <div>
      <label>
        Search
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </div>
  );
}
