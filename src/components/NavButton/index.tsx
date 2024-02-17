import React from 'react';
import { useNavigate } from 'react-router';
import './NavButton.css';

const NavButton: React.FC = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <div>
      <button className='nav-button' onClick={navigateToHome}>
        Return to List
      </button>
    </div>
  );
};

export default NavButton;
