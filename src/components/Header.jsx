import React from 'react';
import Links from './Links';
import Icon from './Icon';



function Header(){
  return (
    <div>
      <style jsx>{`
        h1{
          font:100px/.5em monoton;
          color: #FCFD46;
          text-transform:uppercase;
          margin-left: 2rem;

        }
        .portland {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-direction: row;
          width: 50%;

        }
        .nightMarket {
          color: #FCFD46;
          font-family: Allerta;
          text-transform: uppercase;
          margin: 0;
          margin-left: 1.2rem;
        }
        h4 {
          letter-spacing:.2rem;
          font-size: 2.5rem;
          margin-bottom: 0;
        }
        h5 {
          margin-top: -2px;
          font-size: 2.2rem;
        }
     `}</style>
      <Links/>
      <Icon/>
      

    </div>
  );
}

export default Header;
