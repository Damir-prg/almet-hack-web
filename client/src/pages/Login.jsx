import React from 'react';
import '../styles/App.css'
import Header from '../components/Header';
import HeaderButton from '../components/UI/HeaderButton/HeaderButton'
import MyButton from '../components/UI/Button/MyButton';
import PostService from '../API/PostService'

const Login = () => {
    const [login, setLogin] = React.useState('')
    const [password, setPassword] = React.useState('')

    const auth = event => {
        event.preventDefault();
        async function fetchData() {
            const response = await PostService.postAdminLogin(login, password);
            console.log(response.data)
        }
        fetchData()
    }

    return (
        <div>
            <Header>Назад</Header>
            <div className="login-page">
                <div className="form">
                    <form className="login-form" onSubmit={auth}>
                        <input type="text" placeholder="Логин" onChange={e => setLogin(e.target.value)}/>
                        <input type="password" placeholder="Пароль" onChange={e => setPassword(e.target.value)}/>
                        <MyButton>Войти</MyButton>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;