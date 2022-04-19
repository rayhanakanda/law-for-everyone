import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import CheckOut from './Components/CheckOut/CheckOut';
import Home from './Components/Home/Home';
import Services from './Components/Home/Services/Services';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Register from './Components/Register/Register';
import RequiredAuth from './Components/RequitredAuth/RequiredAuth';
import Footer from './Components/Shared/Footer/Footer';
import Navbar from './Components/Shared/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={
          <RequiredAuth>
            <CheckOut></CheckOut>
          </RequiredAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer/>
    </div>
  );
}

export default App;
