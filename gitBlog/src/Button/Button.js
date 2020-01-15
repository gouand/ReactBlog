import React from 'react';

class Button extends React.Component{
        // eslint-disable-next-line
    constructor(props){
        super(props);
    }


    render(){
        return(
            <button className={this.props.class ? this.props.class : ''} tabIndex={this.props.id ? this.props.id : ''}>{this.props.text}</button>
        )
    }
}

export default Button;