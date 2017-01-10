import React, { Component } from 'react';
import { connect } from 'react-redux';

import './AddTagButton.css';


const mapStateToProps = (state) => {
  return {
    newTagInfo: state.tagMenu
  };
};


class AddTagButton extends Component {

  render() {
    return (
      <div className="add-tag-button" 
        onClick={() => this.props.addTag(this.props.newTagInfo.input, this.props.newTagInfo.colorSelected)}>
        <span className="add-tag-text">
          Add Tag
        </span> 
      </div>
    );
  }

}

export default connect(mapStateToProps)(AddTagButton);
