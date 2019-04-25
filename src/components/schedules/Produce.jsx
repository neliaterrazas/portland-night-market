import React from 'react';
import PropTypes from 'prop-types';

function Produce(props){



  return (
    <div>
      <style jsx>{`
        div {
          text-align: center;
          font-family: Allerta;
          max-width: 100vw;
          overflow:hidden;
        }
        h3{
          text-align:center;
          color: #1c3144;
          text-transform: uppercase;
          font-size: 125%;
        }

        .divStyles {
          display: flex;
          flex-flow: row wrap;
          text-align:center;
          width: 100%;
          // background-color: red;
          justify-content: center;
          margin: 10px 35px 0 0;
          border: none;
        }

        `}
      </style>
      <h3>{props.month}</h3>
      <div className='divStyles'>
        <ul >
          {
            props.selection.map((produce,i)=>{
              return <p key={i}>{produce}</p>;
            })
          }
        </ul>
      </div>

    </div>
  );
}

Produce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array
};

export  default Produce;
