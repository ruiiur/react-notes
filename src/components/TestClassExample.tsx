import React, { Component } from "react";

class Example extends Component
 {
  constructor(props:any) {
    super(props);
    this.state = {
      count: 0
    }
  }
  changeCount = () => {
    let count = (this.state as any).count + 1;
    this.setState({
      count
    })
  }
  componentDidMount() {
    console.log('mount');
    document.title = `${(this.state as any).count}这是标题呀`
  }
  componentDidUpdate() {
    console.log('update');
    document.title = `${(this.state as any).count}这是标题呀`
  }
  render() {
    return (
      <div>
        <p>这是class组件 {(this.state as any).count}</p>
        <button onClick={this.changeCount}>class按钮</button>
      </div>
    )
  }
}

export default Example;