import React from "react";
import {BMREditor} from "./BMREditor";
import {BMRResult} from "./BMRResult";

export class BMRCalculator extends React.Component {
    state = {
        age: "",
        height: "",
        weight: "",
    };

    handleCalculate = (data) => {
        this.setState({age: data.age});
        this.setState({height: data.height});
        this.setState({weight: data.weight});
    }

    render() {
        const {age, height, weight} = this.state;
        return (
            <div className="BMRCalculator">
                <React.Fragment>
                    <BMREditor
                        onCalculate={this.handleCalculate}
                    />
                    <BMRResult age={age} height={height} weight={weight}/>
                </React.Fragment>
            </div>
        );
    }
}