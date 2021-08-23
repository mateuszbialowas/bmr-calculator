import React from "react";

export function BMRResult({ age = 0, height = 0, weight = 0 }) {
  function calculateResult() {
    const ageInt = parseInt(age);
    const heightInt = parseInt(height);
    const weightInt = parseInt(weight);
    return (9.99 * weightInt) + (6.25 *  heightInt) + (4.92 * ageInt) + 5;
  }

  return (
    <div className="BMRResult">
      <span>Age: {age}</span>
      <span>Height: {height}</span>
      <span>Weight: {weight}</span>
      <p>{"Result:" + calculateResult() + "kcal"}</p>
    </div>
  );
}
