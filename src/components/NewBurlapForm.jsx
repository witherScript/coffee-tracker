import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewBurlapForm(props) {
  function handleNewProductFormSubmission(event) {
    event.preventDefault();
    props.onProductCreation({
      name: event.target.name.value,
      roast: event.target.roast.value,
      origin: event.target.origin.value,
      price: event.target.price.value,
      quantity: 130,
      id: v4()
    });
  }

  return (
    <form onSubmit={handleNewProductFormSubmission}>
      <label htmlFor="name">Name</label>
      <input
        type='text'
        name='name'
        placeholder='Product Name'
        id="name" />
      <label htmlFor="price">Price</label>
      <input 
        type='number'
        name='price'
        placeholder='Price'
        id="price" />
      <label htmlFor="origin">Origin</label>
      <input
        type='text'
        name='origin'
        placeholder='origin'
        id="origin" />
      <label htmlFor="Roast">Roast</label>
      <input
        type='text'
        name='roast'
        placeholder='roast'
        id="roast" />
      <button type='submit'>Add</button>
    </form>
  );
}

NewBurlapForm.propTypes = {
  onProductCreation: PropTypes.func.isRequired
};

export default NewBurlapForm;
