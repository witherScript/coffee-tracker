import React from "react";
import PropTypes from "prop-types";
import ReuseableForm from "./ReusableForm";

function EditProductForm(props) {  
  const { product } = props;

  function handleEditFormSubmission(event) {
    event.preventDefault();
    props.onEditProduct({
      name: event.target.name.value,
      origin: event.target.origin.value,
      roast: event.target.roast.value,
      price: parseFloat(event.target.price.value),
      quantity: product.quantity,
      id: product.id
    })
  }
  return (
    <>
      <ReuseableForm 
        formSubmissionHandler={handleEditFormSubmission}
        buttonText="Update Product" />
    </>
  )
}

EditProductForm.propTypes = {
  product: PropTypes.object,
  onEditProduct: PropTypes.func
}

export default EditProductForm;