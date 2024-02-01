import React from "react";
import PropTypes from "prop-types";

function ReuseableForm(props) {
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required />
        <br />
        <label htmlFor="origin">Origin:</label>
        <input
          type="text"
          id="origin"
          name="origin"
          placeholder="Origin"
          required />
        <br />
        <label htmlFor="price">Price:</label>
        <input
          type='number'
          id="price"
          name="price"
          placeholder="Price"
          step={.01}
          required />
        <br />
        <label htmlFor="roast">Roast:</label>
        <input
          type="text"
          id="roast"
          name="roast"
          placeholder="Roast"
          required />
        <br />
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          placeholder="Quantity"
          required />
        <br />
        <button type="submit">{props.buttonText}</button>
      </form>
    </>
  )
}

ReuseableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}


export default ReuseableForm;