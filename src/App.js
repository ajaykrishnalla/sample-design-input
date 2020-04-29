import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [displayOne, setDisplayOne] = useState(true);

  const handleChange = e => {
    if (e.target.value === "2") {
      setDisplayOne(false);
    } else {
      setDisplayOne(true);
    }
  };

  const handleView = () => {
    if (displayOne) {
      return (
        <div
          style={{
            display: "flex",
            width: "200px",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <div style={{ padding: "0 20px" }}>Label</div>
          <div>
            <input type="text" />
          </div>
        </div>
      );
    }

    return (
      <div
        style={{
          display: "flex",
          width: "200px",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <div style={{ padding: "0 20px" }}>Label</div>
        <div>
          <input type="text" />
        </div>

        <div style={{ padding: "0 20px" }}>Label</div>
        <div>
          <input type="text" />
        </div>
      </div>
    );
  };

  return (
    <div>
      <h4>Some Header</h4>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <select style={{ width: "200px" }} onChange={e => handleChange(e)}>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
        {handleView()}
      </div>
    </div>
  );
}
