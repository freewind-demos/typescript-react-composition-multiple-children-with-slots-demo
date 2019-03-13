import React, {ReactNode} from 'react'

type Props = {
  header: ReactNode,
  body: ReactNode
}

class Panel extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    return <div style={{border: '3px solid red'}}>
      <div style={{backgroundColor: '#DDDDDD'}}>{this.props.header}</div>
      <div style={{padding: '10px'}}>{this.props.body}</div>
    </div>
  }
}

export default Panel
