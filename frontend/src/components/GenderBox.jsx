import React from "react";

const GenderBox = ({ onGenderChange }) => {
  const handleGenderChange = (event) => {
    const gender = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      onGenderChange(gender);
    }
  };

  return (
    <div className="flex">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Male</span>
          <input
            type="radio"
            name="gender"
            value="male"
            className="radio size-6"
            onChange={handleGenderChange}
          />
        </label>
      </div>

      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Female</span>{" "}
          <input
            type="radio"
            name="gender"
            value="female"
            className="radio size-6"
            onChange={handleGenderChange}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderBox;
