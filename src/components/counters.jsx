import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          // attributes containing data are passed to component through a javascript object called props
          // anything passed in between opening & closing tags of element will be received as a children attribute of prop

          // key is used internally by react
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter} // passes in id & values from counters:[]
          />
        ))}
      </div>
    );
  }
}

export default Counters;
