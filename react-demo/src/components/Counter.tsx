
// type url = "VAlue"

import { Component } from "react"

// interface URL{
//   url: string
// }

type Props = {}

type State = {
  count: number
}

class Counter extends Component<Props, State> {

  state = {
    count: 0
  }

  handleClick(inc: number) {
    this.setState(prevState => ({ count: prevState.count + inc }))
  }

  render() {
    return (
      <div className="card">
        <button onClick={() => this.handleClick(1)}>
          count is {this.state.count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    );
  }
}

export default Counter