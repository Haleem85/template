import React from "react";
export const changeNumber = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-xs-12">
          <button
            className="btn btn-default"
            onClick={() => props.changeNumber("25")}>
            Change Number
          </button>
        </div>
      </div>
    </div>
  );
};
