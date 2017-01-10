import React, { Component } from 'react';

import './Tag.css';


class Tag extends Component {

  render () {
    return (
      <div className="tag" style={{backgroundColor: this.props.color}}>
        <div className="label">{this.props.label}</div>
        <div className="x-div">
          <div className="x" onClick={this.props.removeTag}>x</div>
        </div>
      </div>
    )
  }
}

export default Tag;