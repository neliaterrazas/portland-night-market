import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewLocationForm from './NewLocationForm';
import PropTypes from 'prop-types';

class NewLocationControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      exampleDay: ' ',
      exampleLocation: ' ',
      exampleHours: ' '

    };
   this.handleFormSubmission = this.handleFormSubmission.bind(this);


  }

  handleFormSubmission(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    console.log(this.props.onNewLocationCreation)
    console.log(this.props.test)
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewLocationForm onNewLocationCreation={this.props.onNewLocationCreation} />;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onFormSubmission={this.handleFormSubmission}/>;
    }
    return(
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewLocationControl.propTypes = {
  onNewLocationCreation: PropTypes.func
};



export default NewLocationControl;
