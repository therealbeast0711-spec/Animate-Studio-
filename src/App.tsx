import React from "react";

export default function App() {
  return (
    <div style={{
      background: "#071b10",
      color: "white",
      minHeight: "100vh",
      padding: "30px",
      fontFamily: "Arial"
    }}>
      <h1 style={{ color: "#39ff14" }}>
        AN — Animate Studio
      </h1>

      <h2>Welcome to Animate Studio</h2>

      <p>Your creative universe starts here.</p>

      <button style={{
        background: "#39ff14",
        color: "#071b10",
        padding: "15px 25px",
        border: "none",
        borderRadius: "12px",
        fontWeight: "bold"
      }}>
        Open the app
      </button>
    </div>
  );
}
