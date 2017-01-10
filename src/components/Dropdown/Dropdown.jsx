import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Dropdown.css';
import DropdownItem from '../DropdownItem';
import { selectTagAction } from '../../actions/tagActions';

const mapStateToProps = (state) => {
  const tags = state.tags.filter(tag => !tag.selected);
  return {
    remainingTags: tags,
    newTagInfo: state.tagMenu
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectTagAction: selectTagAction }, dispatch);
};


class Dropdown extends Component {

  render() {
    return (
      <div>
        {!!this.props.newTagInfo.focused && 
          <div className="dropdown-tags">
            {this.props.remainingTags.map((tag) => (<DropdownItem
              key={tag.label}
              label={tag.label}
              color={tag.color}
              addTag={() => this.props.selectTagAction(tag.label)}
              />
            ))}
          </div>
        }
      </div>
    );
  }
}


export default connect(mapStateToProps, matchDispatchToProps)(Dropdown);
