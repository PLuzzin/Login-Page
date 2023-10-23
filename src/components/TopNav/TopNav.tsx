import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  handleLogout: () => void
}

const TopNav = ({handleLogout}: Props) => {
  
  return (
    <>
      
      <Link to="dashboard">Dashboard</Link>
      <Link to="about">About</Link>
      <Link to="/" onClick={handleLogout}>Logout</Link>
      
    </>
  );
}

export default TopNav;