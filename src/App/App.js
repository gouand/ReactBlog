import React from 'react';
import './App.css';
import Post from '../Posts/Post';
import Form from '../Form/Form';
import Posts from './posts.json'



/*
 * Главный компонет всего приложения
*/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: JSON.parse(localStorage.getItem('localData'))
    };
    this.initDefaultData();
    this.updateData = this.updateData.bind(this);
  }

  initDefaultData() {
    localStorage.setItem('localData', JSON.stringify(Posts));
  }

  updateData = (value) => {
    localStorage.setItem('localData', JSON.stringify(value[0]));
    this.setState({ 
      data: JSON.parse(localStorage.getItem('localData'))
    });
  }
  /*
   * Удаление записей
   */
  removeOnClick = (id) => {
    var data = this.state.data;
    data = data.filter((data) => {
      return data.id !== id;
    });

    localStorage.setItem('localData', JSON.stringify(data));
    this.setState({ 
      data: JSON.parse(localStorage.getItem('localData')) 
    });
  }
  render() {
    // Генерация постов из localStorage
    return (
      <div>
        <div id="posts" className="well">
          {this.state.data.map((post, i) => {
            return (
              <Post 
                title={post.title} 
                removeOnClick={this.removeOnClick} 
                text={post.body} 
                tags={post.tags} 
                key={i} 
                id={post.id} />
            )
          })}
        </div>
        <Form 
          updateData={this.updateData} />
      </div>
    );
  }
}

export default App;
