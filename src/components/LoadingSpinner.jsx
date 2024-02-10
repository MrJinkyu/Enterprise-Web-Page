import React from "react";
import { Triangle } from "react-loader-spinner";
export default function LoadingSpinner() {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      <Triangle
        visible={true}
        height="100"
        width="100"
        color="var(--color-accent)"
        ariaLabel="triangle-loading"
      />
    </div>
  );
}
