import React, {useState} from 'react';
import './styles/App.css';
import {BrowserRouter, Link, Route, Switch, Redirect} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Nawbar from "./components/UI/Nawbar/Nawbar";
import Error from "./pages/Error";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./contex/context";



function App() {
    const [isAuth, setIsAuth] = useState(false)


   return(
       <AuthContext.Provider value={{
           isAuth,
           setIsAuth
       }}>
           <BrowserRouter>
               <Nawbar/>
               <AppRouter/>
           </BrowserRouter>
       </AuthContext.Provider>


   )
}

export default App;







// Тайминг 1:15:00
// Тайминг 1:22:00
// Тайминг 1:30:00
// Тайминг 1:36:00
// Тайминг 1:45:00  22.10.21
// Тайминг 2:06:00  23.10.21
// Тайминг 2:12:00  23.10.21
// Тайминг 2:22:00  23.10.21
// Тайминг 2:29:00  30.10.21
// Тайминг 2:35:00  30.10.21
// Тайминг 2:42:00  30.10.21

