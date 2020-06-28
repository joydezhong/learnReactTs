import * as React from "react"

interface IMouseProviderState {
  readonly x: number;
  readonly y: number;
}

export interface IMouseProviderProps {
  render: (state: IMouseProviderState) => React.ReactNode;
}

class MouseProvider extends React.Component<IMouseProviderProps, IMouseProviderState>{
  readonly state: IMouseProviderState = {
    x: 0,
    y: 0
  };

  handleMousemove = (evt: React.MouseEvent<HTMLDivElement>) => {
    this.setState({
      x: evt.clientX,
      y: evt.clientY
    })
  }

  render() {
    return (
      <div style={{height: "100%"}} onMouseMove={this.handleMousemove}>
        {this.props.render(this.state)}
      </div>
    );
  }

}

export default MouseProvider
