import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase'; // Ensure you have firebase configured
import './home.css';

const Home = () => {
  const [user, setUser] = useState(null); // State to hold the authenticated user
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser); // Set user if logged in, otherwise null
    });

    return () => unsubscribe(); // Clean up the listener
  }, []);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      console.log('User signed out');
      navigate('/login'); // Redirect to login page after signing out
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <div className="home-container">
      <header>
        <h1>Parth@Deakin</h1>
        <input type="text" placeholder="Search" className="search-bar" />
        <div className="button-container">
          <button className="post-button" onClick={() => navigate('/post')}>Post</button>
          {user ? (
            <button className="signout-button" onClick={handleSignOut}>Sign Out</button>
          ) : (
            <button className="login-button" onClick={() => navigate('/login')}>Login</button>
          )}
        </div>
      </header>
    </div>
  );
};

export default Home;
