import React from 'react';
import './index.scss';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <div className="home-container__middle">
          <div className="home-container__head"></div>
          <div className="home-container__name">徐同泽</div>
          <div className="home-container__desc">我的博客</div>
          <ul className="home-container__nav">
            <li>博客主页</li>
            <li>所有文章</li>
            <li>标签</li>
            <li>关于我</li>
          </ul>
        </div>
      </div>
    )
  }
}