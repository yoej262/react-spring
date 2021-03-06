import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

function Toggle() {
  const [isToggle, setToggle] = useState(false);
  const { opacity, y } = useSpring({
    opacity: isToggle ? 1 : 0,
    y: isToggle ? 0 : 1
  });
  return (
    <div>
      <animated.h1
        style={{
          transform: y
            .interpolate({
              range: [0, 0.25, 0.5, 0.75, 1],
              output: [0, 10, 0, -25, -50]
            })
            .interpolate(y => `translate3d(0, ${y}px, 0)`),
          opacity
        }}
      >
        Hello
      </animated.h1>
      <button onClick={() => setToggle(!isToggle)}>Toggle</button>
    </div>
  );
}

export default Toggle;
