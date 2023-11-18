import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase'; 

const Dashboard = () => {
  const navigate = useNavigate(); 

  const handleSignOut = async () => {
    try {
      // Sign out the user using Firebase
      await auth.signOut();
      // After signing out, navigate to the login page
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div style={pageStyle}>

      <header style={navbarStyle}>
        <div style={logoStyle}>React Dashboard</div>

        <nav>
          <ul style={navStyle}>
            <li style={menuItemStyle}>Home</li>
            <li style={menuItemStyle}>Products</li>
            <li style={menuItemStyle}>Contact us</li>
          </ul>
        </nav>

        <button onClick={handleSignOut} style={logoutButtonStyle}>Sign Out</button>
      </header>

      <div style={welcomeBackContainerStyle}>
        <div style={welcomeBackStyle}><h1>Welcome Back! 😊</h1></div>
      </div>

    </div>
  );
};


const pageStyle = {
    backgroundColor: '#860188',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
};

const navbarStyle = {
  backgroundColor: 'black',
  color: 'white',
  padding: '10px 20px',
  display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.25)',
};

const logoStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
};

const navStyle = {
  listStyle: 'none',
  display: 'flex',
  gap: '20px',
};

const menuItemStyle = {
  fontSize: '18px',
  cursor: 'pointer',
  padding: '0px 10px',
};

const logoutButtonStyle = {
  backgroundColor: 'red',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  padding: '10px 10px',
  cursor: 'pointer',
  width: '110px',
};

const welcomeBackContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: '1',
};

const welcomeBackStyle = {
  fontSize: '36px',
  textAlign: 'center',
  fontWeight: 'bold',
  color: 'white',
};

export default Dashboard;
