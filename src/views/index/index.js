import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <div className="homec-middle">
          <div className="homec-middle__head"></div>
          <div className="homec-middle__introduce">
            <div className="homec-middle__introduce__name">徐同泽</div>
            <div className="homec-middle__introduce__desc">我的博客</div>
          </div>
          <div className="homec-middle__welcome">welcome to my website</div>
          <ul className="homec-middle__nav">
            <li>
              <Link to="/">博客主页</Link>
              {/* <a href="/">博客主页</a> */}
            </li>
            <li>
              <Link to="/blog">所有文章</Link>

              {/* <a href="/blog">所有文章</a> */}
            </li>
            <li>
              <Link to="/tags">标签</Link>

              {/* <a href="/tags">标签</a> */}
            </li>
            <li>
              <Link to="/about">关于我</Link>

              {/* <a href="/about">关于我</a> */}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
