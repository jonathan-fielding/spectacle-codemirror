// Import React
import React from 'react';

import CodeMirror from 'react-codemirror';

export default class Presentation extends React.Component {
  render() {
    return (
      <CodeMirror {...this.props} />
    );
  }
}
