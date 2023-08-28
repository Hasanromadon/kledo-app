import React, { useEffect } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicLayout = ({ children }) => {
  const auth = useSelector((state) => state.auth);  
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.user !== null) {
      navigate('/');
    }
  }, [auth.user, navigate]);

  return <main>
    <Header/>
     {children}
    </main>;
};

export default PublicLayout;
