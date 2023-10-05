import React from 'react';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import Home from './pages/Home';
import TodoList from './pages/TodoList';
import RegistrationForm from './pages/RegistrationForm';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/todo" element={<TodoList/>}/>
                <Route path="/registration" element={<RegistrationForm/>}/>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;