import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    // Whichever component owns the piece of the state should be the one modifying it
    // Modifying states from outside component can be done by raising & Handling events.
    // A reference to these methods are passed via props to external components
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters }); // can simplify to ({ counters })
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map((counter) => (
          // attributes containing data are passed to component through a javascript object called props
          // anything passed in between opening & closing tags of element will be received as a children attribute of prop

          // key is used internally by react
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            counter={counter} // passes in id & values from counters:[]
          />
        ))}
      </div>
    );
  }
}

export default Counters;
