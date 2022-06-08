import React from "react";
import PropTypes from "prop-types";

const FormImg = ({ handleSubmit }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="w-75">
          {" "}
          Buscar: <input className="w-100" type="text" name="inputText" />{" "}
        </label>
        <button type="submit" className="btn btn-warning  mx-2">
          <span className="material-icons">travel_explore</span>
        </button>
      </form>
    </>
  );
};

FormImg.propTypes = {
  handleSubmit: PropTypes.func,
};

export default FormImg;
