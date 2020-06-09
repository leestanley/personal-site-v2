import React from 'react';
import { useTrail, animated } from 'react-spring';

import './style.less';

const items = ['STAN', 'LEY', 'LEE'];
const config = { mass: 5, tension: 2000, friction: 200 };

function Page1() {

  const trail = useTrail(items.length, {
    config,
    opacity: 1 ,
    x: 0,
    height: 200,
    from: { opacity: 0, x: 150, height: 0 },
  });

  return (
    <div className="page page1">
      <div className="home_items">
        <div>
          {trail.map(({ x, height, ...rest }, index) => (
            <animated.div
              key={items[index]}
              className="trails-text"
              style={{
                ...rest,
                transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
              }}
            >
              <animated.div style={{ height }}>{items[index]}</animated.div>
            </animated.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page1;
