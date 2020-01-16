import React from 'react';

/*
 * Компонент вывода сообщения об ошибках на странице
 * props:
 *  message
*/
class ErrorMessage extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="alert alert-danger">{this.props.message}</div>
    )
  }
}


export default ErrorMessage;