import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const PrivateRoute = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('papersToken');

  useEffect(() => {
    if (!accessToken) {
      navigate('/');
    }
  }, []);

  return <Outlet />;
};

export default PrivateRoute;
