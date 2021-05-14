import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
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
    this.setState({count : this.state.count + 1});
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
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const count = this.state.count === 0 ? "Zero" : this.state.count;
    return count;
  }
}

export default Counter;
