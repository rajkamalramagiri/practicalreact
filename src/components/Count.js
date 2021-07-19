import React from "react";

function Count({ count, handleCount }) {
  console.log("count ");
  return (
    <div>
      <h2 onClick={handleCount}>count{count}</h2>
    </div>
  );
}

export default React.memo(Count);
