import React from "react";

function GlobalFilter({ filter, setFilter }) {
  return (
    <span
      style={{
        display: "flex",
        justifyContent: "flex-end",
        margin: "10px",
        padding: "5px",
      }}
    >
      Search:{`    `}
      <input value={filter || ""} onChange={(e) => setFilter(e.target.value)} />
    </span>
  );
}

export default GlobalFilter;
