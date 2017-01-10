import React, { Component } from 'react';

import './TagEditor.css';
import CurrentTags from '../CurrentTags';
import TagAdder from '../TagAdder';

class TagEditor extends Component {

  render() {
    return (
      <div className="tag-editor">
        <h5 className="tag-editor-title">TAGS</h5>
        <br />
        <CurrentTags />
        <hr />
        <TagAdder />
      </div>
    );
  }
}

export default TagEditor;
