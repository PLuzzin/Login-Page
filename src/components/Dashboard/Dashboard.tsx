import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './Dashboard.css';

interface Props {
  isLoggedIn: boolean,
}

const Dashboard = ({isLoggedIn}: Props) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    if(!isLoggedIn){
      navigate('/')
    }
    // eslint-disable-next-line
  },[]);

  return(
    <>
      <h1>Dashboard</h1>
    </>
  );
}

export default Dashboard;