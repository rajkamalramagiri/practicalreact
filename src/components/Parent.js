import React, { useState, useCallback } from "react";
import Age from "./Age";
import Count from "./Count";
import Title from "./Title";

function Parent() {
  const [count, setCount] = useState(5);
  const [age, setAge] = useState(20);
  const incrementCount = useCallback(() => {
    console.log("increment count function");
    setCount(count + 1);
  }, [count]);

  const incrementAge = useCallback(() => {
    console.log("increment age function");
    setAge(age + 1);
  }, [age]);

  return (
    <div>
      <Title />
      <h2>parent</h2>
      <Age age={age} handleClick={incrementAge} />
      <Count count={count} handleCount={incrementCount} />
    </div>
  );
}

export default Parent;
