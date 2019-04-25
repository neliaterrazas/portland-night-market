import React from 'react';
import Schedule from './Schedule';
import PropTypes from 'prop-types';
import pnm from '../../assets/images/pnm.jpeg';


function DisplaySchedule(props){

  return (
    <div>
      <style jsx>{`
          .grid{
            padding:10px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 1%;
            max-width:99vw;
          }
          img{
            width: 100%;
            max-height: 75vh;
            min-width: 50vw;
          }

      `}

      </style>
      <div>
        <img src={pnm}/>
      </div>
      <div className="grid">
        {props.marketSchedule.map((schedule, index) =>
          <Schedule day={schedule.day}
            location={schedule.location}
            hours={schedule.hours}
            booth={schedule.booth}
            key={index}/>
        )}
      </div>
    </div>
  );
}

DisplaySchedule.propTypes = {
  marketSchedule: PropTypes.array
};

export default DisplaySchedule;
