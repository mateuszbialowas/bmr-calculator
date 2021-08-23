import React from "react";
import { BMREditor } from "./BMREditor";
import { BMRResult } from "./BMRResult";

export class BMRCalculator extends React.Component {
  state = {
    age: "",
    height: "",
    weight: "",
  };

  handleCalculate = (data) => {
    this.setState({ age: data.age });
    this.setState({ height: data.height });
    this.setState({ weight: data.weight });
  };

  render() {
    const { age, height, weight } = this.state;
    return (
      <div className="BMRCalculator">
        <React.Fragment>
          <h1>BMR Calculator</h1>
          <span>
            The Basal Metabolic Rate (BMR) Calculator estimates your basal
            metabolic rate—the amount of energy expended while at rest in a
            neutrally temperate environment, and in a post-absorptive state
            (meaning that the digestive system is inactive, which requires about
            12 hours of fasting).
            <a target="_blank" href="https://www.calculator.net/bmr-calculator.html">Source</a>
          </span>
          <BMREditor onCalculate={this.handleCalculate} />
          <BMRResult age={age} height={height} weight={weight} />
        </React.Fragment>
      </div>
    );
  }
}
