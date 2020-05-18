import React from "react";
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
          <div className="homec-middle__welcome">
            welcome to my website
          </div>
          <ul className="homec-middle__nav">
            <li>
              <a href="/">博客主页</a>
            </li>
            <li>
              <a href="/blog">所有文章</a>
            </li>
            <li>
              <a href="/tags">标签</a>
            </li>
            <li>
              <a href="/about">关于我</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
