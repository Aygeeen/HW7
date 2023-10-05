import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
    return (
        <>
            <div>
                <h1>Добро пожаловать на главную страницу!</h1>
                <Link to="/todo">Перейти к Todo</Link>

            </div>
            <div>
                <Link to="/registration">Перейти к Регистрации</Link>
            </div>
        </>

    );
}

export default Home;