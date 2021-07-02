import "./App.css";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";
import React, { forwardRef } from "react";

const ColoredToolTip = () => {
  return <span style={{ color: "yellow" }}>component tool tip</span>;
};

const CustomChild = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div>First line</div>
      <div>Second line</div>
    </div>
  );
});

function App() {
  return (
    <div className="App">
      <div style={{ padding: "20px" }}>
        <Tippy
          arrow={false}
          delay={1000}
          placement="right"
          content="Basic Tooltip"
        >
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{ padding: "20px" }}>
        <Tippy content={<span style={{ color: "red" }}>Coloured</span>}>
          <button>Hover</button>
        </Tippy>
      </div>

      <div style={{ padding: "20px" }}>
        <Tippy content={<ColoredToolTip></ColoredToolTip>}>
          <button>Hover</button>
        </Tippy>
      </div>

      <div style={{ padding: "20px" }}>
        <Tippy content={<ColoredToolTip></ColoredToolTip>}>
          <CustomChild />
        </Tippy>
      </div>
    </div>
  );
}

export default App;
