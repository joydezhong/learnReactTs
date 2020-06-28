import React,  { Component, useState } from 'react';
import { observable, action } from 'mobx'
import {observer, PropTypes as observablePropTypes} from 'mobx-react'

export interface TestProps {
  
}

class Store {
  @observable cache = { queue: [] }
  @action.bound refresh(){
    // @ts-ignore
    this.cache.queue.push(1)
  }
}
const store = new Store();

@observer
class Bar extends Component<any, any>{
  static propTypes = {
    queue: observablePropTypes.observableArray
  }
  render(){
    const queue = this.props.queue
    return <span>{queue.length}</span>
  }
}

class Foo extends Component {
  static propTypes:any = {
    cache: observablePropTypes.observableObject
  }

  render() {
    // @ts-ignore
    const { cache, refresh } = this.props
    return <div>
      <button onClick={refresh}>点击 + 1</button>
      当前数值：<Bar queue={cache.queue}/>
    </div>
  }
}

const MobxComponent:React.FC<TestProps> = (props) => {

  const oprationMobx= () => {

  }

  return <>
    <h4>This is mobx</h4>
    <button onClick={oprationMobx}>button</button>
    <Foo cache={store.cache}
       refresh={store.refresh}
    />
  </>
}

MobxComponent.defaultProps = {

}

export default MobxComponent
