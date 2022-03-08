import React from "react";
export const displayNumber = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-xs-12">
          <p>The number is: {props.numberDisplayed}</p>
        </div>
      </div>
    </div>
  );
};
