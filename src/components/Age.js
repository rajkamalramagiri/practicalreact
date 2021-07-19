import React from "react";

function Age({ age, handleClick }) {
  console.log("age");
  return (
    <div>
      <h2 onClick={handleClick}>Age {age}</h2>
    </div>
  );
}

export default React.memo(Age);
