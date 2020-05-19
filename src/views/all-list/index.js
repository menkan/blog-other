import React from "react";
import "./index.scss";

export default class AllList extends React.Component {
  render() {
    return (
      <div className="all-listbox" style={{ color: "#FFF" }}>
        <ul>
          <li>20200202 <a href="/x">xxxxxxxxxxx</a></li>
          <li>20200202 >> <a href="/1">xxxxxxxxxxx</a></li>
          <li>20200202 >> <a href="/2">xxxxxxxxxxx</a></li>
          <li>20200202 >> <a href="/3">xxxxxxxxxxx</a></li>
          <li>20200202 >> <a href="/4">xxxxxxxxxxx</a></li>
        </ul>
      </div>
    );
  }
}
