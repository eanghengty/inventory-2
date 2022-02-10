import logo from './logo.svg';
import './App.css';

import {Routes, Route ,useNavigate, BrowserRouter as Router} from 'react-router-dom'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import ProductList from './components/ProductList';
import OrderProductList from './components/OrderProduct';
import ProtectedRoute from './ProtectedRoute'
import AddEdit from '../src/components/AddEdit'
import Home from '../src/components/Home'
import View from '../src/components/View'
import Dashboard from './components/Dashboard'
import Header from '../src/components/Header'
import Search from '../src/components/Search'
import AuthPage from './components/AuthPage';
import AddRemove from './components/AddRemove';
function App() {
  // const user = localStorage.getItem('token')
  return (
    <Router>
    
    
    <Routes>
      
    
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/authlogin" element={<AuthPage></AuthPage>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
      <Route path="/search" element={<Search></Search>}></Route>
      <Route path="/list" element={<Home></Home>}></Route>
      <Route path="/*" element={<Dashboard></Dashboard>}></Route>
      <Route path="/update/:id" element={<AddEdit></AddEdit>}></Route>
      <Route path="/view/:id" element={<View></View>}></Route>
      <Route path="/remove" element={<AddRemove></AddRemove>}></Route>
      <Route path="/add" element={<AddEdit></AddEdit>}></Route>
    </Routes>
  
    </Router>
  );
}

export default App;
