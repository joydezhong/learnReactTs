import React,  { useState } from 'react';

import FuncCounter  from './FuncCounter'
import ClassCounter from "./ClassComponent"
import FanxiComponent from "./FanxinComponent"
import RenderComponent from "./RenderComponent"
import withState from "./HighComponent"

export interface TestProps {}

export interface IUser {
  name: string;
  age: number;
}

const HomeComponent:React.FC<TestProps> = (props) => {
  const [count, setCount] = useState(0);
  const ILists: IUser[] = [{name:'DF',age: 23},{name: 'Lao', age: 32},{name: 'KO', age: 43}]

  const FCCounterWithState = withState(FuncCounter)

  return <div>
    <br />
    >>>>>>>>>>>
    <br />
    <h4>函数式组件</h4>
    <FuncCounter
      label={"函数式组件一个"}
      count={ count }
      onIncrement={() => setCount(count+1)}
    />
    <br />
    >>>>>>>>>>
    <br />
    <h4>类组件</h4>
    <ClassCounter label={"Class组件一个"} initialCounter={10} />
    <br />
    >>>>>>>>>>
    <br />
    <h4>泛型组件</h4>
    <FanxiComponent
      items={ILists}
      itemRender={(item: IUser)=><p key={item.name}
      >
        name: {item.name}; age: {item.age}</p>}
    />
    <br />
    >>>>>>>>>>
    <br />
    <h4>渲染回调组件</h4>
    <div style={{ height: 80, border: "1px solid #000" }}>
      <RenderComponent render={({ x, y }) => `x: ${x}, y: ${y}`} />
    </div>
    <br />
    >>>>>>>>>>
    <br />
    <h4>高阶组件</h4>
    <FCCounterWithState initialCount = {20} label={"FCCounter withState"} />
  </div>
}

HomeComponent.defaultProps = {}

export default HomeComponent
