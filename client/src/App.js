import Header from './components/Header/Header';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import UsersList from './pages/Users/UsersList';
import PostsList from './pages/Posts/PostsList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} exact />
        <Route path='/login' element={<LoginPage />} exact />
        <Route path='/register' element={<RegisterPage />} exact />
        <Route path='/users' element={<UsersList />} exact />
        <Route path='/posts' element={<PostsList />} exact />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
