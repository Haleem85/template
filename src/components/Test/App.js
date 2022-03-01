// class UserNameForm extends React.Component {
//   render() {
//     return (
//       <div>
//         <input type="text" />
//       </div>
//     );
//   }
// }

// class CreateUserName extends UserNameForm {
//   render() {
//     const parent = super.render();

//     return (
//       <div>
//         {parent}
//         <button>Create</button>
//       </div>
//     );
//   }
// }

// class UpdateUserName extends UserNameForm {
//   render() {
//     const parent = super.render();
//     return (
//       <div>
//         {parent}
//         <button>Update</button>
//       </div>
//     );
//   }
// }

// class UserNameForm extends React.Component {
//   render() {
//     return (
//       <div>
//         <input type="text" />
//       </div>
//     );
//   }
// }
// class CreateUserName extends React.Component {
//   render() {
//     return (
//       <div>
//         <UserNameForm />
//         <button>Create</button>
//       </div>
//     );
//   }
// }
// class UpdateUserName extends React.Component {
//   render() {
//     return (
//       <div>
//         <UserNameForm />
//         <button>Update</button>
//       </div>
//     );
//   }
// }

import {
  useState,
  useCallback,
  useMemo,
  createContext,
  useContext,
} from "react";
import { FaIcons } from "react-icons/fa";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
const AccordionHeader = ({ children }) => {
  const { toggleExpanded } = useContext(AccordionContext);

  return (
    <button onClick={toggleExpanded}>
      {children}{" "}
      <AccordionIcon
        opened={<FaIcons icon={FaAngleUp} />}
        closed={<FaIcons icon={FaAngleDown} />}
      />
    </button>
  );
};
const AccordionContent = ({ children }) => {
  const { expanded } = useContext(AccordionContext);
  return <>{expanded && children}</>;
};

const useToggle = () => {
  const [status, setStatus] = useState(false);

  const toggleStatus = useCallback(() => {
    setStatus((prevStatus) => !prevStatus);
  }, []);

  const values = useMemo(
    () => ({
      status,
      toggleStatus,
    }),
    [status, toggleStatus]
  );

  return values;
};
const AccordionContext = createContext();
const { Provider } = AccordionContext;

const AccordionIcon = ({ opened = "-", closed = "+" }) => {
  const { expanded } = useContext(AccordionContext);

  return <span> {expanded ? opened : closed}</span>;
};
const Accordion = ({ header, children }) => {
  const { status: expanded, toggleStatus: toggleExpanded } = useToggle();
  const value = {
    expanded,
    toggleExpanded,
  };
  return (
    <Provider value={value}>
      <div>
        <AccordionHeader>{header}</AccordionHeader>
        <AccordionContent>{header}</AccordionContent>
      </div>
    </Provider>
    // <div>
    //   <AccordionHeader expanded={expanded} toggleExpanded={toggleExpanded}>
    //     {header}
    //   </AccordionHeader>
    //   <AccordionContent expanded={expanded}>{children}</AccordionContent>
    // </div>
  );
};
const Editable = () => {
  const { status: editable, toggleStatus: toggleEditable } = useToggle();
  const [inputValue, setInputValue] = useState("Title");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      {editable ? (
        <label htmlFor="title">
          Title:
          <input
            type="text"
            id="title"
            value={inputValue}
            onChange={handleInputChange}
          />
        </label>
      ) : (
        <>Title: {inputValue}</>
      )}
      <button onClick={toggleEditable}>{editable ? "Cancel" : "Edit"}</button>
    </div>
  );
};
const App = () => {
  return (
    <>
      <Accordion header="Accordion 1">
        <div>Content for Accordion 1</div>
      </Accordion>
      <Accordion header="Accordion 2">
        <div>Content for Accordion 2</div>
      </Accordion>
      <Accordion header="Accordion 3">
        <div>Content for Accordion 3</div>
      </Accordion>
    </>
  );
};

export default App;
