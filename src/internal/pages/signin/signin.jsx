/* eslint-disable */
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './signin.css';
import { authUser, getToken } from '../../../api';
import { useTokenContext } from '../../../hooks/token';
import { userNameFunction } from '../../../store/sliceUserName';

export const Signin = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState();
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  const { setToken } = useTokenContext();
  const dispatch = useDispatch();

  const getAuthUser = async () => {
    try {
      setDisabled(true);
      const user = await authUser(login, password);
      const token = await getToken(login, password);
      localStorage.setItem('user', user.username);
      localStorage.setItem('refresh', token.refresh);
      localStorage.setItem('access', token.access);

      if (user.detail) {
        setErrorMessage(user.detail);
      }

      if (user.id && token.refresh) {
        dispatch(userNameFunction(user.username));
        setToken(token.refresh);
        navigate('/');
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setDisabled(false);
    }
  };

  const loginClick = () => {
    if (login?.length === 0) {
      setErrorMessage('Введите логин');
    } else if (password?.length === 0) {
      setErrorMessage('Введите пароль');
    } else {
      getAuthUser();
    }
  };

  return (
    <div className="container-enter">
      <div className="modal__block">
        <form className="modal__form-login" id="formLogIn" action="#">
          <div className="modal__logo">
            <NavLink to="/">
              <img src="/music/img/logo_modal.png" alt="logo" />
            </NavLink>
          </div>
          <input
            className="modal__input login"
            type="text"
            name="login"
            id="formlogin"
            placeholder="Логин"
            onInput={(e) => {
              setLogin(e.target.value);
            }}
          />
          <input
            className="modal__input password"
            type="password"
            name="password"
            id="formpassword"
            placeholder="Пароль"
            onInput={(e) => {
              setPassword(e.target.value);
            }}
          />
          <p style={{ color: 'red' }}>{errorMessage}</p>
          <button
            type="button"
            className="modal__btn-enter"
            id="btnEnter"
            disabled={disabled}
            onClick={() => loginClick()}
          >
            Войти
          </button>
          <button type="button" className="modal__btn-signup" id="btnSignUp">
            <NavLink to="/signup">Зарегистрироваться</NavLink>
          </button>
        </form>
      </div>
    </div>
  );
};
