// import React, { useMemo, useState, useEffect } from "react";
// import axios from "axios";
// import apiClient from "./Services/api";

// import Table from "./Table";
// import "./App.css";

// const Genres = ({ values }) => {
//   return (
//     <>
//       {values.map((genre, idx) => {
//         return (
//           <span key={idx} className="badge">
//             {genre}
//           </span>
//         );
//       })}
//     </>
//   );
// };

// function App() {
//   const columns = useMemo(
//     () => [
//       {
//         Header: "Message information",
//         columns: [
//           {
//             Header: "Name",
//             accessor: "messages.firstName",
//           },
//           {
//             Header: "Type",
//             accessor: "messages.id",
//           },
//         ],
//       },
//       {
//         Header: "Details",
//         columns: [
//           {
//             Header: "Language",
//             accessor: "messages.lastName",
//           },
//           {
//             Header: "Genre(s)",
//             accessor: "messages.msg",
//             Cell: ({ cell: { value } }) => <Genres values={value} />,
//           },
//           {
//             Header: "Runtime",
//             accessor: "messages.email",
//             Cell: ({ cell: { value } }) => {
//               const hour = Math.floor(value / 60);
//               const min = Math.floor(value % 60);
//               return (
//                 <>
//                   {hour > 0 ? `${hour} hr${hour > 1 ? "s" : ""} ` : ""}
//                   {min > 0 ? `${min} min${min > 1 ? "s" : ""}` : ""}
//                 </>
//               );
//             },
//           },
//           {
//             Header: "Status",
//             accessor: "message.msg",
//           },
//         ],
//       },
//     ],
//     []
//   );

//   const [data, setData] = useState([]);

//   useEffect(() => {
//     (async () => {
//       const result = await axios("http://localhost:81/api/message");
//       setData(result.data);
//     })();
//   }, []);

//   return (
//     <div className="App">
//       <Table columns={columns} data={data} />
//     </div>
//   );
// }

// export default App;
import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";
import Table from "./Table";
import "./App.css";

function App() {
  
  const [loadingData, setLoadingData] = useState(true);
  const columns = useMemo(() => [
    {
      Header: "State",
      accessor: "show.state",
    },
    {
      Header: "Positive Cases",
      accessor: "show.positive",
    },
    {
      Header: "Recovered Cases",
      accessor: "show.recovered",
      

    },
    {
      Header: "Deaths",
      accessor: "show.death",
    },
    {
      Header: "Total Tested",
      accessor: "show.total",
    }
  
  ]);

  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      await axios("http://localhost:81/api/message")
        .then((response)) => {
      
          console.log(response.data);
          setData(response.data);
          setLoadingData(false);
        });
    }
    if (loadingData) {
      getData();
    };

  return (
    <div className="App">
      {loadingData ? (
      ) : (
        <Table columns={columns} data={data} />
      )}
    </div>
  );
}

export default App;