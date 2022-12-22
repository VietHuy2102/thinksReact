import React from "react";

export default function CategotyItem({ name, onClick, isActive }) {
  return (
    <span style={{ color: isActive ? "red" : "black" }}>
      <h1 onClick={onClick}>{name}</h1>
    </span>
  );
}
