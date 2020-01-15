import React from 'react';
import './App.css';
import Post from '../Posts/Post';
import Form from '../Form/Form';
import Posts from './posts.json'

class App extends React.Component {
  constructor(props){
    super(props);
    this.initDefaultData();
    this.updateData = this.updateData.bind(this);
    this.state = {data: JSON.parse(localStorage.getItem('localData'))};
    console.log(localStorage.getItem('localData'));
  }
  
  initDefaultData(){
        localStorage.setItem('localData', JSON.stringify(Posts));
  }

  updateData = (value) => { 
    localStorage.setItem('localData',  JSON.stringify(value[0]));
    this.setState({  data: JSON.parse(localStorage.getItem('localData')) });
    console.log(this.state.data);
    console.log(value)
    //console.log(this.state.data)
  }

  removeOnClick = (id) => {
    var data = this.state.data;
    const userForRemoveId = id; // get this somehow
data = data.filter((data) => {
  return data.id !== userForRemoveId;
});

    localStorage.setItem('localData', JSON.stringify(data));
    this.setState({data: JSON.parse(localStorage.getItem('localData'))});
  }
  render(){
  return (
    <div>
  <div id="posts" className="well">
  {this.state.data.map((post, i) => {
    return( 
      <Post title={post.title} removeOnClick={this.removeOnClick} text={post.body} tags={post.tags} key={i} id={post.id}/> 
      ) //tags={post.tags}
  })}
  </div>
  <Form updateData={this.updateData} />
  </div>
  );
}
}

export default App;
