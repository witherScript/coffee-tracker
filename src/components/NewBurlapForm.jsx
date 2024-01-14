import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReuseableForm from './ReusableForm';

function NewBurlapForm(props) {
  function handleNewProductFormSubmission(event) {
    event.preventDefault();
    props.onProductCreation({
      name: event.target.name.value,
      roast: event.target.roast.value,
      origin: event.target.origin.value,
      price: parseFloat(event.target.price.value),
      quantity: 130,
      id: v4()
    });
  }
  return (
    <>
      <ReuseableForm
        formSubmissionHandler={handleNewProductFormSubmission}
        buttonText="Submit New Product" />
    </>
  );
}

NewBurlapForm.propTypes = {
  onProductCreation: PropTypes.func.isRequired
};

export default NewBurlapForm;
