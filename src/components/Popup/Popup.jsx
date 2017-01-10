import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { colors } from '../../api/colors';
import { selectColor } from '../../actions/tagMenuActions';
import './Popup.css';

const mapStateToProps = (state) => {
  return {
    newTagInfo: state.tagMenu
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectColor: selectColor }, dispatch);
};
 

class Popup extends Component {

  createPopup(colors) {
    return colors.map(color =>
      (<span className='color-option' onClick={() => this.props.selectColor(color)} 
        key={color} style={{backgroundColor: color}}></span>
    ))
  }

  render () {
    return (
      <div>
        {!!this.props.newTagInfo.popupVisible && 
          <div className='color-popup'>
            {this.createPopup(colors)}
          </div>
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Popup);
