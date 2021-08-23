import React from "react";

export class BMREditor extends React.Component {
    constructor(props) {
        super(props);
        this.age = React.createRef();
        this.height = React.createRef();
        this.weight = React.createRef();
    }

  handleSubmit = (event) => {
      this.props.onCalculate({
      age: this.age.current.value,
      height: this.height.current.value,
      weight: this.weight.current.value,
    });
    event.preventDefault();
        // Reset input
      // this.age.current.value = '';
      // this.height.current.value = '';
      // this.weight.current.value = '';
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="BMREditor">
        <label htmlFor="">
          Age <input type="text" ref={this.age} />
        </label>
        <label htmlFor="">
          Height <input type="text" ref={this.height} />
        </label>
        <label htmlFor="">
          Weight <input type="text" ref={this.weight} />
        </label>
        <button>Calculate</button>
      </form>
    );
  }
}
