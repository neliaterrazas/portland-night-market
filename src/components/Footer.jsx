import React from 'react';
import { Link } from 'react-router-dom';
import Links from './Links';
import Icon from './Icon';



function Footer(){
  const whiteTest = {
    border: '1px solid blue'
  };
  return (
    <div>
      <style jsx>{`
        .links {
          display: flex;
          flex-direction: row;
          color: white;
          align-items: center;
        }
        h2 {
          position: relative;
          color: white;
          bottom: -15px;
          font-family: 'Allerta', sans-serif;
          font-size: 1rem;
        }
        h3 {
          padding-top: 20px;
        }
        h2:hover{
          color: #42e8de;
        }

      `}</style>

      <div className="links">
        <Links/>
        <Link to="/newlocationcontrol"><h2>NLC</h2></Link>
        <h3><Icon/></h3>
      </div>

    </div>
  );
}

export default Footer;
