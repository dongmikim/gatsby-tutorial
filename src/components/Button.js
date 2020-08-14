import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { text } = this.props;
    return (
      <>
        <button type="button">{text}</button>
      </>
    )
  }
}

Button.defaultProps = {
  text: ''
}

export default Button;