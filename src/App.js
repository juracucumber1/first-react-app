import React from 'react';
import './styles/App.css';
import {BrowserRouter, Link, Route, Switch, Redirect} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Nawbar from "./components/UI/Nawbar/Nawbar";
import Error from "./pages/Error";
import AppRouter from "./components/AppRouter";



function App() {
   return(
       <BrowserRouter>
           <Nawbar/>
           <AppRouter/>
       </BrowserRouter>
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
// Тайминг 2:29:00  23.10.21

