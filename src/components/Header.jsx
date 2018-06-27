import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div className='header'>
      <style jsx>{`
          .header {
            background-image: url(https://images.unsplash.com/44/Y51aFguqRcGTgsYRYBXV_20140104_085932.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjF9&s=dc74ccca6456b12d150cb316762b14aa&auto=format&fit=crop&w=1189&q=80);
            height: 150px;
            background-size: cover;
            font-size: 2vw;
          }
          h1 {
            color: #4f4f4f;
            margin-top: 0;
          }
      `}
      </style>
      <h1>Welcome to the Farmer's Market</h1>
      <Link to='/'>Schedule</Link> | <Link to='/selection'>Seasonal Selections</Link>
    </div>
  );
}

export default Header;
