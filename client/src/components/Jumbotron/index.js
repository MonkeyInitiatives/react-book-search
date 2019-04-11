import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center", backgroundImage: "url('https://purewows3.imgix.net/images/articles/2017_12/best-books-2017-header.jpg?auto=format,compress&cs=strip')", backgroundSize: "cover", color:"white", textShadow:
      "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"}}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
