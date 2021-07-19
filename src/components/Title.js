import React from "react";

function Title() {
  console.log("title");
  return (
    <div>
      <h2>title</h2>
    </div>
  );
}

export default React.memo(Title);
