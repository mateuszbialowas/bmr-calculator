import React from "react";

export class BMREditor extends React.Component {

  handleSubmit = (event) => {
      this.props.onCalculate({
      age: this.age.value,
      height: this.height.value,
      weight: this.weight.value,
    });
    event.preventDefault();
      this.age.value = '';
      this.height.value = '';
      this.weight.value = '';
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="BMREditor">
        <label htmlFor="">
          Age <input type="text" ref={age => this.age = age} />
        </label>
        <label htmlFor="">
          Height <input type="text" ref={height => this.height = height} />
        </label>
        <label htmlFor="">
          Weight <input type="text" ref={weight => this.weight = weight} />
        </label>
        <button>Calculate</button>
      </form>
    );
  }
}
