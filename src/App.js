import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'

function App() {
  return (
    <div className="page-wrap">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Register />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
