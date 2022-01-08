import React from 'react';
import {
  MediumOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';

import './style.less';

import Navbar from '../../components/navbar';
import Tower from '../../assets/tower.svg';

function Page1() {
  return (
    <div className="page page1">
      <Navbar />
      <div className="content-area">
        <div className="col">
          <div className="t-wrap">
            <div>
              <h3>hi my name is</h3>
              <h1>stanley lee</h1>
            </div>
            <p>
              i’m a fourth-year at UC San Diego currently studying design
              and interaction. my website is under construction, 
              but feel free to check out my socials!
            </p>
          </div>
        </div>
        <div className="t-col">
          <img className="tower-pic" src={Tower} alt="tower" />
          <div className="icons">
            <a
              href="https://github.com/leestanley"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubOutlined className="icon" />
            </a>
            <a
              href="https://medium.com/@leestanleysg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediumOutlined className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/leestanleysg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinOutlined className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1;
