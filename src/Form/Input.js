import React from 'react';


/*
 * Компонент полей ввода для фоомы
 * props:
 *  type
 *  name
 *  placeholder
 *  Обработчик onChange для формы
*/
class Input extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form-group">
                <input 
                type={this.props.type} 
                onChange={this.props.onChange} 
                className="form-control" 
                name={this.props.name} 
                placeholder={this.props.placeholder} />
            </div>
        )
    }
}


export default Input;