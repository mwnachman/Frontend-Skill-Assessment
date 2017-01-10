import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { togglePopupVisibility, resetInput, updateInput, addTagAction } from '../../actions/tagMenuActions';
import NewTagField from '../NewTagField';
import Dropdown from '../Dropdown';
import ColorSelectorButton from '../ColorSelectorButton';
import Popup from '../Popup';
import AddTagButton from '../AddTagButton';
import './TagAdder.css';


const mapStateToProps = (state) => {
  return {
    newTagInfo: state.tagMenu
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({ togglePopupVisibility: togglePopupVisibility, 
                              updateInput: updateInput, 
                              addTagAction: addTagAction, 
                              resetInput: resetInput 
                            }, dispatch);
};


class TagAdder extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tagName: ""
    };
  }

  handleInputChange(e) {
    const inputChange = {};
    inputChange[e.target.name] = e.target.value;
    this.setState(inputChange);
    this.props.updateInput(e.target.value);
  }

  addTag(label, color) {
    this.props.addTagAction(label, color);
    this.props.resetInput();
    this.setState({tagName: ""})
  }

  render() {
    return (
      <div className="tag-adder">
        <div className="tag-picker">
          <NewTagField handleInputChange={this.handleInputChange.bind(this)}
            inputText={this.state.tagName}
          />
          <Dropdown />
        </div>
        <div className="color-picker">
          <ColorSelectorButton />
          <Popup />
        </div>
        <div className="add-tag-button-div">
          <AddTagButton addTag={this.addTag.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(TagAdder);

