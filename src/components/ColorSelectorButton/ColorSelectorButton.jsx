import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { togglePopupVisibility } from '../../actions/tagMenuActions';

import './ColorSelectorButton.css';


const mapStateToProps = (state) => {
  return {
    newTagInfo: state.tagMenu
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({ togglePopupVisibility: togglePopupVisibility }, dispatch);
};



class ColorSelectorButton extends Component {

  render() {
    return (
      <div className="color-selector" style={{backgroundColor: this.props.newTagInfo.colorSelected}}
        onClick={this.props.togglePopupVisibility}>
        <span className="new-color-text">NEW</span>
      </div>
    );
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(ColorSelectorButton);