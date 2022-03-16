/** @format */

import React, { Component, useState } from "react";
import PropTypes from "prop-types";



const Counter = () => {
    const[const, setCount]= useState(0);
    const countState= useSelector(state => state.count);
    console(countState)
return (
<div>



<p>{count }</p>

 
</div>
    
)
};
