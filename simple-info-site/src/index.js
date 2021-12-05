import React from "react"
import ReactDOM from "react-dom"

const root = document.getElementById('root');

const contents = (
  <div>
    <img src="./logo192.png" width="40px" alt="" />
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on Github</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </div>
);

ReactDOM.render(contents, root);