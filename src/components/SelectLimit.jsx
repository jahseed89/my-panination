import React from "react";

const SelectLimit = (props) => {
  return (
    <select onChange={(e) => props.onLimitChange(e.target.value)} className="select">
      {/* <option value="5">5</option> */}
      <option value="10">10</option>
      <option value="50">50</option>
      <option value="100">100</option>
    </select>
  );
};

export default SelectLimit;
