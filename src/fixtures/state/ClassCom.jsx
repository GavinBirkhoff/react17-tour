import React from "react";

class ClassCom extends React.Component {
  state = {
    count: 0,
  };
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
  };
  handleSyncClick = () => {
    this.setState({ count: this.state.count + 1 }, () => {
      console.log("count is now", this.state.count);
    });
    console.log(this.state.count);
    this.setState({ count: this.state.count + 1 }, () => {
      console.log("count is now", this.state.count);
    });
    console.log(this.state.count);
    this.setState({ count: this.state.count + 1 }, () => {
      console.log("count is now", this.state.count);
    });
    console.log(this.state.count);
  };
  handleSyncClick2 = () => {
    setTimeout(() => {
      let i = 1;
      this.setState({ count: ++i }, () => {
        console.log("count is now", this.state.count);
      });
      console.log(this.state.count);
      this.setState({ count: ++i }, () => {
        console.log("count is now", this.state.count);
      });
      console.log(this.state.count);
      this.setState({ count: ++i }, () => {
        console.log("count is now", this.state.count);
      });
      console.log(this.state.count);
      console.log(i, "i");
    }, 0);
  };
  render() {
    return (
      <div>
        <h1>类组件</h1>
        <button onClick={this.handleClick}>异步{this.state.count}</button>
        <button onClick={this.handleSyncClick}>同步{this.state.count}</button>
        <button onClick={this.handleSyncClick2}>
          同步out{this.state.count}
        </button>
      </div>
    );
  }
}

export default ClassCom;
