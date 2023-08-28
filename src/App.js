import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ListShipping from './page/private/ShippingComps/ListShipping';
import Auth from './page/public/Auth';
import Profile from './page/public/Profile';
import AddShipping from './page/private/ShippingComps/AddShipping';
import EditShipping from './page/private/ShippingComps/EditShipping';
import Dashboard from './page/private/Dashboard';
import NotFound from './components/NotFound';

const PrivateRoute = ({ element, path }) => {
  const auth = useSelector((state) => state.auth);
  return auth.user ? element : <Navigate to="/auth" />;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute element={<Dashboard />} />} />
        <Route path="/shippings" element={<PrivateRoute element={<ListShipping />} />} />
        <Route path="/shippings/add" element={<PrivateRoute element={<AddShipping />} />} />
        <Route path="/shippings/edit/:id" element={<PrivateRoute element={<EditShipping />} />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
