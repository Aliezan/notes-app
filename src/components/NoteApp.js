import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home';
import DetailedPage from '../pages/DetailedPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import { getUserLogged, putAccessToken } from '../utils/api';
import NoteAppHeader from './NoteAppHeader';
import NoteAppHeaderLogin from './NoteAppHeaderLogin';
import { ThemeProvider } from '../Contexts/ThemeContext';

class NoteApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
      theme: localStorage.getItem('theme') || 'light',
      toggleTheme: () => {
        this.setState((prevState) => {
          const newTheme = prevState.theme === 'light' ? 'dark' : 'light';
          localStorage.setItem('theme', newTheme);
          return {
            theme: newTheme
          };
        });
      }
    };

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  async componentDidMount() {
    document.documentElement.setAttribute("data-theme", this.state.theme);
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
        initializing: false
      };
    });
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevState.theme !== this.state.theme) {
      document.documentElement.setAttribute('data-theme', this.state.theme);
    }
  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged()

    this.setState(() => {
      return {
        authedUser: data
      };
    });
  }

  onLogout() {
    this.setState(() => {
      return {
        authedUser: null
      }
    });

    putAccessToken('');
  }


  render() {
    if (this.state.initializing) {
      return null;
    }

    if (this.state.authedUser === null) {
      return <div>
        <NoteAppHeaderLogin title='Notes App' />
        <Routes>
          <Route path="/*" element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>;
    }

    return (
      <>
        <ThemeProvider value={this.state}>
          <NoteAppHeader title='Notes App' logout={this.onLogout} />
        </ThemeProvider>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detailed/:id' element={<DetailedPage />} />
        </Routes>

      </>

    );
  }

}

export default NoteApp;
