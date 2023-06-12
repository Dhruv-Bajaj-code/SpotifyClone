import React from "react";
import "../public/style.css";

export default function () {
  function playAnimation() {}
  return (
    <div onMouseOverCapture={playAnimation} className="tile">
      <div className="tile2">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdsRA0wIA0UjHCDxuP3yhRS5V1D9yeZh8nog&usqp=CAU"
            height="100%"
          />
        </div>
        <h2>Moodey Mix</h2>
      </div>
    </div>
  );
}
