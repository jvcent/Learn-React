import React, { Component } from "react"; // imported using imrc shortcut from simple react snippets Extension
// use CMD + D for multicursor editing

class Counter extends Component {
  // cc shortcut from simple react snippets Extension
  state = {
    // state is a special object in components that hold any data the component needs
    // holds data local/private to this component

    // every react component has a props attribute, which is a javascript object with all the attributes set when rendering the component
    // props passed in are READ-ONLY, they can't be changed inside this component
    value: this.props.counter.value,
    tags: [],
    // imageUrl: "https://picsum.photos/200",
  };

  styles = {
    // object to hold 'css' style values. Values should be in camelcase notation
    fontSize: 20,
    fontWeight: "bold",
  };

  /* Must be used if arrow functions not used
  constructor() {
    super(); // must first call instructor of parent class
    // called when a Counter object is created, helps event handlers access <this>
    this.handleIncrement = this.handleIncrement.bind(this); // bind method used to set value of <this>
    // returns a new instance of handleIncrement function where <this> is referencing the current object
  } */

  renderTags() {
    // conditional rendering
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrement = (product) => {
    // arrow function syntax to avoid having to use bind functions
    // create function for each Event to be Handled
    // event handlers don't have access to <this> using default syntax, need arrow syntax
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      // use <React.Fragment> instead of <div> to avoid unecessary wrapping by <div>
      // <React.Fragment> renders horizontally, <div> renders vertically
      <div>
        {/* render images dynamically 
          <img src={this.state.imageUrl} alt="" />
        */}

        {/* this.props.children */}

        <span style={this.styles} className={this.getBadgeClass()}>
          {/* use className attribute to assign class */}
          {/* badge-primary gives blue backgroud */}
          {this.formatCount()}
        </span>

        {/* double curly brackets for inline css*/}
        {/* inline arrow functions to pass in arguemnts through event handlers */}
        <button
          style={{ fontSize: 20 }}
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>

        {/* rendering lists & conditional rendering 
        {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClass() {
    // rendering classes dynamically
    let classes = "badge m-2 badge-"; // classes that all should possess
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state; // destructure the this.state object's count attribute
    return count === 0 ? "ZERO" : count;
  }
}

export default Counter;

// Writing functions outside component makes it easier to define, read, and test
// if the function does not rely on props.
