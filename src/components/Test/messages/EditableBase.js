// import { useState, useEffect } from "react";

// const CountExample = () => {
//   // initialize our count state
//   const [count, setCount] = useState(0);

//   // add 5 to to the count previous state
//   const handleClick = () => {
//     setCount((prevCount) => prevCount + 5);
//   };
//   return (
//     <div>
//       <h1>{count} </h1>
//       <button onClick={handleClick}>Add Five</button>
//     </div>

//   );
// };

// export default CountExample;
// import React, { useState } from "react";

// const StateExample = () => {
//   //initialize our array and object states
//   const [arr, setArr] = useState([2, 4]);
//   const [obj, setObj] = useState({ num: 1, name: "Desmond" });

//   // set arr to the new array values
//   const handleArrClick = () => {
//     const newArr = [1, 5, 7];
//     setArr([...arr, ...newArr]);
//     console.log(arr);
//   };

//   // set obj to the new object values
//   const handleObjClick = () => {
//     const newObj = { name: "Ifeanyi", age: 25 };
//     setObj({ ...obj, ...newObj });
//     console.log(obj);
//   };

//   return (
//     <div>
//       <button onClick={handleArrClick}>Set Array State</button>
//       <button onClick={handleObjClick}>Set Object State</button>
//     </div>
//   );
// };

// export default StateExample;

// const App = () => {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     setCount(count + 1);
//   }, []);

//   return (
//     <div>
//       <h1>{count}</h1>
//       ...
//     </div>
//   );
// };
// export default App;
// import { useState, useEffect } from "react";
// const App = () => {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     console.log(count);
//   }, [count]);
//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// };
// export default App;
// import { createContext } from "react";

//Here, we set the initial fontSize as 16.
import React, { useState } from "react";

import {
  Form as BTForm,
  FormGroup,
  Input,
  Label,
  Col,
  Button,
} from "reactstrap";

const Form = ({
  name,
  amount,
  handleName,
  handleAmount,
  handleSubmitForm,
  handleClearExpenses,
}) => (
  <BTForm style={{ margin: 10 }} onSubmit={handleSubmitForm}>
    <FormGroup className="row">
      <Label for="exampleEmail" sm={2}>
        Name of Expense
      </Label>
      <Col sm={4}>
        <Input
          type="text"
          name="name"
          id="expenseName"
          placeholder="Name of expense?"
          value={name}
          onChange={handleName}
        />
      </Col>
    </FormGroup>
    <FormGroup className="row">
      <Label for="exampleEmail" sm={2}>
        $ Amount
      </Label>
      <Col sm={4}>
        <Input
          type="number"
          name="amount"
          id="expenseAmount"
          placeholder="0.00"
          value={amount}
          onChange={handleAmount}
        />
      </Col>
    </FormGroup>
    <Button type="submit" color="primary">
      Add
    </Button>{" "}
    <Button type="submit" color="danger" onClick={handleClearExpenses}>
      Delete
    </Button>
  </BTForm>
);

const App = () => {
  // initialize our count state
  const [count, setCount] = useState(0);

  // add 5 to to the count previous state
  const handleClick = () => {
    setCount((prevCount) => prevCount + 5);
  };
  const handleThree = () => {
    setCount((prevCount) => prevCount + 3);
  };
  return (
    <div>
      <div>
        <h1>{count} </h1>
        <button onClick={handleClick}>Add Five</button>
      </div>
      <br />
      <div>
        <button onClick={handleThree}>Add Three</button>
      </div>
      <br />
      <div>
        <Form />
      </div>
    </div>
  );
};
export default App;
