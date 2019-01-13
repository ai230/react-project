import React, { PropTypes } from "react";

const RadioButton = ({ selectedOption, onChange }) => {
  return (
    <div>
      <form>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="option1"
              checked={selectedOption === "option1"}
              onChange={onChange}
            />
            Fetch from an in-memory array
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={onChange}
            />
            Fetch from CSV file
          </label>
        </div>
      </form>
    </div>
  );
};

RadioButton.propTypes = {
  selectedOption: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
export default RadioButton;
