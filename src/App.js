import React from 'react';
import './styles/App.css';
import {BrowserRouter, Route} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";


function App() {
   return(
       <BrowserRouter>
           
           <Route path="/about">
               <About/>
           </Route>
           <Route path="/posts">
               <Posts/>
           </Route>
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

