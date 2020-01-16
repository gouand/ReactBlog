import React from 'react';
import Buttom from '../Button/Button';
import './Post.css';

/*
 * Компонент вывода постов на странице
 * props:
 *  id
 *  title
 *  text
*/

class Post extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
        this.state = { 
            data: localStorage.getItem('localData')
         }
        this.removeOnClick = this.removeOnClick.bind(this);
    }

    removeOnClick(e) {
        this.props.removeOnClick(this.props.id)
    }
    
    render() {
        return (
            <article>
                <header>
                    <h3>{this.props.title}</h3>
                </header>
                <section>
                    <p>{this.props.text}</p>
                </section>
                <footer>
                    <div className="tags">
                        {this.props.tags.map((tag, i) => {
                            return (<Buttom 
                            class="btn btn-xs btn-default" 
                            text={tag} 
                            key={i} />)
                        })
                        }

                    </div>
                </footer>
                <div className="controls">
                    <button 
                    onClick={(e) => this.removeOnClick(e)} 
                    className="btn btn-danger btn-mini">удалить</button>
                </div>
            </article>
        )
            ;
    }
}

export default Post;