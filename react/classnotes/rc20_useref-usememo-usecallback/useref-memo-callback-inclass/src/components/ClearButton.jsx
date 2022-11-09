import React, { memo } from "react";

const ClearButton = ({ handleClear }) => {
  return (
    <button className="btn btn-warning" onClick={handleClear}>
      ClearButton
    </button>
  );
};

export default memo(ClearButton);
