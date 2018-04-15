import React, { Component } from 'react'
import { connect } from 'react-redux';

class News extends Component {
  constructor(props) {
    super(props)
    this.state={}
  }
  render() {
    return (
      <div className="App">
        {this.props.news.map((n, i)=>
          <div key={i}>
            <h5>{n.title}</h5>
            <a href={n.url}>{n.url}</a>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    news: state.news,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(News)
