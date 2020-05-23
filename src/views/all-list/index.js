import React from "react";
import "./index.scss";

export default class AllList extends React.Component {
  render() {
    return (
      <div className="all-listbox" style={{ color: "#FFF" }}>
        <div>article</div>
        <div className="allist-year-railing">
          <span>2020</span>
        </div>
        <ul>
          <li>
            <span>20200202</span> &gt;&gt;
            <a href="/x">ios a something bugs</a>
          </li>
          <li>
            <span>20200202</span> &gt;&gt;
            <a href="/x">xcode in version 9.2; crash logs</a>
          </li>
          <li>
            <span>20200202</span> &gt;&gt;
            <a href="/x">load and initialize event in oc</a>
          </li>
          <li>
            <span>20200202</span> &gt;&gt;
            <a href="/x">node + express chagnes</a>
          </li>
        </ul>
      </div>
    );
  }
}
