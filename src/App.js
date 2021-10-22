import React, {useEffect, useMemo, useRef, useState} from 'react';
import './styles/App.css';
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import {usePosts} from "./hooks/usePosts";
import axios from "axios";
import PostService from "./API/PostService";







function App() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [isPostLoading, setIsPostLoading] = useState(false);


    useEffect(() => {
        fetchPosts()
    }, [])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }
    
    async function fetchPosts() {
        setIsPostLoading(true);
        setTimeout(async () => {
            const posts = await PostService.getAll()
            setPosts(posts)
            setIsPostLoading(false);
        }, 1000)
    }
    
// Получаем post из дочернего компонента
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }




  return (
    <div className="App">
        {/*<button onClick={fetchPosts}>GET POSTS</button>*/}
        <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
            Создать пост
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
            <PostForm create={createPost}/>
        </MyModal>
        <hr style={{margin: '15px 0'}}/>
        <PostFilter
            filter={filter}
            setFilter={setFilter}
        />
        {isPostLoading
            ? <h1>Идет загрузка....</h1>
            : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про Что-то"/>
        }

    </div>
  );
}

export default App;







// Тайминг 1:15:00
// Тайминг 1:22:00
// Тайминг 1:30:00
// Тайминг 1:36:00
// Тайминг 1:45:00  22.10.21

