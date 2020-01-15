import React from 'react';


class ErrorMessage extends React.Component{
// eslint-disable-next-line
    constructor(props){
      super(props);
    //   this.state = {
    //     isShow: true
    // }
    }

    // componentDidMount(){
    //     setInterval(() => (this.setState({isShow: false})), 4000);
    // }


    // componentWillUnmount(){
    //     this.setState({
    //         isShow: true
    //     })
    // }




    // render(){
    //     return(
    //     <div>
    //         {this.state.isShow ? <div className="alert alert-danger">{this.props.message}</div> : ''}
    //    </div>
    //     )
    // }

    render(){
            return(
             <div className="alert alert-danger">{this.props.message}</div>
            )
        }
}


export default ErrorMessage;