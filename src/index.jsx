import React from 'react';
import ReactDOM from 'react-dom';
import AnimatedCursor from 'react-animated-cursor';

import './styles/style.less';

import Page1 from './pages/page1';

function App() {
  return (
    <div className="App">
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color='23, 59, 142'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
      <div className="pages">
        <Page1 />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
