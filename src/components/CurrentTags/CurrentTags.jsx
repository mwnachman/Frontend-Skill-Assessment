import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './CurrentTags.css';
import Tag from '../Tag';
import { removeTagAction } from '../../actions/tagActions';

const mapStateToProps = (state) => {
  const tags = state.tags.filter(tag => tag.selected);
  return {
    currentTags: tags
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({ removeTagAction: removeTagAction }, dispatch);
};


class CurrentTags extends Component {

  render() {
    return (
      <div className="current-tags">

        {this.props.currentTags.map((tag) => (<Tag
          key={tag.label}
          label={tag.label}
          color={tag.color}
          removeTag={() => this.props.removeTagAction(tag.label)}
          />
        ))}

      </div>
    );
  }
}


export default connect(mapStateToProps, matchDispatchToProps)(CurrentTags);
