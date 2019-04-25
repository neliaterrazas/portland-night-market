import React from 'react';
import PropTypes from 'prop-types';

function Schedule(props){

  let locationStyles = {
    textTransform: 'uppercase'
  };
  return (
    <div>
      <style jsx>{`
        div {
          border: 1px dotted #1c3144;
          text-align: center;
          font-family: Allerta;
        }

      `}</style>
      <h3 style={locationStyles}>{props.day}</h3>
      <h4>{props.location}</h4>
      <p>{props.hours}</p>
    </div>
  );
}

Schedule.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired
};

export default Schedule;
