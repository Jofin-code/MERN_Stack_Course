import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{marginLeft: "5em"}}>
      <h1>Home Page</h1>
      <Link to="/userlist">Go to User List</Link>
    </div>
  );
};

export default Home;