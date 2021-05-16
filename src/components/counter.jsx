import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: ["tag1", "tag2", "tag3"],
  };

  renderTags() {
    if (this.state.tags.lenght !== 0)
      return this.state.tags.map((tag) => <li key={tag}>{tag}</li>);
  }

//   constructor() {
//       super();
//       this.handleIncrement = this.handleIncrement.bind(this);
//   }

  handleIncrement = product => {
    console.log(product);
    this.setState({value : this.state.value + 1});
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({id:1})}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const value = this.state.value === 0 ? "Zero" : this.state.value;
    return value;
  }
}

export default Counter;
