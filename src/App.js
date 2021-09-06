import React, {useState} from 'react';
import './styles/App.css';
import PostItem from "./components/PostItem";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Javascript 2', body: 'Description'},
        {id: 3, title: 'Javascript 3', body: 'Description'},
    ])

  return (
    <div className="App">
        <h1 style={{textAlign: 'center'}}>
            Список постов
        </h1>
        {posts.map((post) =>
            <PostItem post={post} ket={post.id}/>
        )}
    </div>
  );
}

export default App;






