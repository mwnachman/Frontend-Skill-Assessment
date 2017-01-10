import React, { Component } from 'react';
import { connect } from 'react-redux';

import './DropdownItem.css';

const mapStateToProps = (state) => {
  return {
    newTagInfo: state.tagMenu
  };
};


class DropdownItem extends Component {

  render () {
    return (
      <div className="item" onClick={this.props.addTag}>
        <div className="item-color" style={{backgroundColor: this.props.color}}></div>
        <div className="item-label">{this.props.label}</div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(DropdownItem);