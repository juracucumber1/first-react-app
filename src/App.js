import React, {useRef, useState} from 'react';
import './styles/App.css';
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'w', body: 'апа'},
        {id: 2, title: 'g 2', body: 'ии'},
        {id: 3, title: 'sdfsaf 3', body: 'ррр'},
    ])
    const [selectedSort, setSelectedSort] = useState('')

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }
// Получаем post из дочернего компонента
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort);
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

  return (
    <div className="App">
        <PostForm create={createPost}/>
        <hr style={{margin: '15px 0'}}/>
        <div>
            <MySelect
            value={selectedSort}
            onChange={sortPosts}
            defaultValue="Сортировка"
            options={[
                {value: 'title', name: 'По названию'},
                {value: 'body', name: 'По описанию'},
            ]}
            />
        </div>
        {posts.length
            ?
            <PostList remove={removePost} posts={posts} title="Посты про JS"/>
            :
            <h1 style={{textAligh: 'center'}}>
                Посты не найдены !
        </h1>
        }
    </div>
  );
}

export default App;

// Тайминг 50:00
// Тайминг 55:00
// Тайминг 57:00
// Тайминг 1:03:00
// Тайминг 1:09:00

