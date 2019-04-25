import React from 'react';
import vendor from '../../assets/images/lady.jpg';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props){

  return(
    <div>
      <style jsx>{`
        * {
          font-family: Allerta;
          text-align: center;
        }
        button {
          background-color: #FCFD46;

        }
        `}</style>
      <h2>Are you sure you want to add a new location?</h2>
      <button onClick={props.onFormSubmission}>Yes</button>
      <br/>
      <br/>
      <img src={vendor}/>

    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onFormSubmission: PropTypes.func
};

export default ConfirmationQuestions;
