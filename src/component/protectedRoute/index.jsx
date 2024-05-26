import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = (props) => {
  const { Component } = props;
  // console.log(Component);
  const token = Cookies.get("jwtToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (token === undefined) {
      navigate("/login");
    }
  }, []);

  return <Component></Component>;
};

export default ProtectedRoute;
