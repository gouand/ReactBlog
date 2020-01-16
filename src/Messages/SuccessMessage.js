import React from 'react';

/*
 * Компонент вывода успешного сообщения на странице
 * props:
 *  message
*/
class SuccessMessage extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        }
    }


    componentDidMount() {
        setInterval(() => (this.setState({ isShow: false })), 4000);
    }




    render() {
        return (
            <div>
                {this.state.isShow ? 
                        <div className="alert alert-success">{this.props.message}</div> : ''}
            </div>
        )
    }
}


export default SuccessMessage;