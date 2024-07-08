import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isAuthenticated } from './redux/selector/isAuthenticated';

const PrivateRoot = ({ children, root }) => {
    const isUserAuthenticated = useSelector(isAuthenticated);
  
    return isUserAuthenticated ? children : <Navigate to={root} replace />;
  };

export default PrivateRoot;
