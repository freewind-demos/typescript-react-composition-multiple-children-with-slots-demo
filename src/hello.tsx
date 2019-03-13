//import * as React from 'react'
import React from 'react'
import Panel from "./panel";

class Hello extends React.Component {
  render() {
    return <Panel header={
      <div>Hello React</div>
    } body={
      <div>typescript-react-composition-multiple-children-with-slots-demo</div>
    }/>
  }
}

export default Hello
