import * as React from "react";

interface IProps {
  label: string;
  initialCounter: number;
}

type IState = { count:  number } // type定义类型 缺点：不能实现继承

class StatefulCounter extends React.Component<IProps, IState>{
  static defaultProps = {
    initialCounter: 0
  }
  readonly state: IState = {
    count: this.props.initialCounter
  }
  componentWillReceiveProps({ initialCounter }: IProps) {
    this.setState({ count: initialCounter })
  }
  onIncrement = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    const { label } = this.props
    const { count } = this.state

    return (
      <div>
        <span>{label}: {count}</span>
        <button onClick={this.onIncrement}>Increment</button>
      </div>
    );
  }
}

export default StatefulCounter