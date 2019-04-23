import React from 'react';
import Schedule from './Schedule';
import PropTypes from 'prop-types';


function DisplaySchedule(props){
  return (
    <div>
      <style jsx>{`
          div{
            padding:10px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 1%;
            max-width:99vw;
          }

      `}

      </style>
      {props.marketSchedule.map((schedule, index) =>
        <Schedule day={schedule.day}
          location={schedule.location}
          hours={schedule.hours}
          booth={schedule.booth}
          key={index}/>
      )}
    </div>
  );
}

DisplaySchedule.propTypes = {
  marketSchedule: PropTypes.array
};

export default DisplaySchedule;
