import { Outlet, useNavigate } from 'react-router-dom';

const PrivateRoute = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('papersToken');

  if (!accessToken) {
    navigate('/login');
  }

  return <Outlet />;
};

export default PrivateRoute;
