import React from 'react'
import './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: '' }
  }

  render() {
    return (
      <div>
        Home
        <input onChange={e => this.setState({ data: e.target.value })}></input>
        { this.state.data}
      </div>
    )
  }
}

export default Home;
