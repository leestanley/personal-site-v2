import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.less';

import Navbar from './components/navbar';

import Page1 from './pages/page1';

const App = () => {
  return (
    <div className="App">
      <div className="pages">
        <Navbar />

        <Page1 />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
