// Bibliography.js

import React from "react";
import "./Bibliography.css";

function Bibliography() {
  return (
    <div className="bibliography">
      <h2>Bibliography</h2>
      <ul>
        <li>
          Author, A. A. (Year of Publication). Title of work: Capital letter
          also for subtitle. Publisher.
        </li>
        <li>
          Author, B. B. (Year of Publication). Title of work: Capital letter
          also for subtitle. Publisher.
        </li>
        {/* Add more bibliography entries here */}
      </ul>
    </div>
  );
}

export default Bibliography;
