import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleDropdown } from '../../actions/tagMenuActions';
import './NewTagField.css'; 


const mapStateToProps = (state) => {
  return {
    newTagInfo: state.tagMenu
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({ toggleDropdown: toggleDropdown }, dispatch);
};


class NewTagField extends Component {

  render() {
    return (
      <div className="tag-name">
        <input type="text" name="tagName" placeholder="Type to add a tag." 
          value={this.props.inputText}
          onChange={(e) => this.props.handleInputChange(e)}
          onFocus={() => this.props.toggleDropdown()} 
          onBlur={() => setTimeout(this.props.toggleDropdown.bind(this), 100)} />
      </div>
    );
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(NewTagField);
