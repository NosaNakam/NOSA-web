import React from "react";

function Loading() {
  return (
    <div>
      {" "}
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f9f9f9",
        }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <div
            style={{
              width: "50px",
              height: "50px",
              border: "5px solid #ccc",
              borderTop: "5px solid #4f46e5",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
            }}></div>
          <h1 style={{ marginTop: "1rem", color: "#4f46e5", fontSize: "1.5rem" }}>Loading...</h1>
        </div>
        <style>
          {`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
        </style>
      </div>
    </div>
  );
}

export default Loading;
