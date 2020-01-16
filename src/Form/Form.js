import React from 'react';
import Input from './Input';
import ErrorMessage from '../Messages/ErrorMessage';
import SuccessMessage from '../Messages/SuccessMessage';


/*
 * Компонент формы добавления статей в блог
*/

class Form extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            data: JSON.stringify(localStorage.getItem('localData')),
            id: '',
            title: '',
            body: '',
            tags: '',
            errorMessage: '',
            successMessage: '',
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                successMessage: ''
            });
        }, 3000)
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    async onSubmit(e) {
        e.preventDefault();
        if (!this.state.title) {
            this.setState({
                errorMessage: "Укажите название статьи!",
                successMessage: ''
            });
            await setTimeout(async () => (this.setState({ errorMessage: '' })), 8000);
            return;
        }

        if (!this.state.body) {
            this.setState({
                errorMessage: "Укажите текст статьи!",
                successMessage: ''
            });
            await setTimeout(async () => (this.setState({ errorMessage: '' })), 6000);
            return;
        }

        if (!this.state.tags) {
            this.setState({
                errorMessage: "Добавьте теги к статье!",
                successMessage: ''
            });
            await setTimeout(async () => (this.setState({ errorMessage: '' })), 7000);
            return;
        }




        var data = [];
        data.push(JSON.parse(localStorage.getItem('localData')));
        data[0].push({
            id: data[0].length + 1,
            title: this.state.title,
            body: this.state.body,
            tags: this.state.tags.toString().split(',')
        });
        this.setState({
            data: data
        });
        this.props.updateData(data);
        this.setState({
            successMessage: "Запись успешно добавлена",
            errorMessage: ''
        })
    }

    render() {
        return (
            <form id="post-add" className="col-lg-4">
                {this.state.errorMessage === '' ? '' : <ErrorMessage message={this.state.errorMessage} />}
                {this.state.successMessage === '' ? '' : <SuccessMessage message={this.state.successMessage} />}
                <Input type="text" name="title" value={this.state.title} placeholder="Заголовок" onChange={e => this.handleChange(e)} />
                <Input type="text" name="body" value={this.state.body} placeholder="запись" onChange={e => this.handleChange(e)} />
                <Input type="text" name="tags" value={this.state.tags} placeholder="тег, еще тег" onChange={e => this.handleChange(e)} />
                <button type="submit" onClick={(e) => this.onSubmit(e)} className="btn btn-primary">Добавить</button>
            </form>
        );
    }
}

export default Form;