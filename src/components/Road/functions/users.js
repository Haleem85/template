// import React from "react";
import React, { useState, useEffect } from "react";

// function ProfilePage() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     fetchUser().then((u) => setUser(u));
//   }, []);

//   if (user === null) {
//     return <p>Loading profile...</p>;
//   }
//   return (
//     <>
//       <h1>{user.name}</h1>
//       <ProfileTimeline />
//     </>
//   );
// }

// function ProfileTimeline() {
//   const [posts, setPosts] = useState(null);

//   useEffect(() => {
//     fetchPosts().then((p) => setPosts(p));
//   }, []);

//   if (posts === null) {
//     return <h2>Loading posts...</h2>;
//   }
//   return (
//     <ul>
//       {posts.map((post) => (
//         <li key={post.id}>{post.text}</li>
//       ))}
//     </ul>
//   );
// }

const Example = (props) => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState();
  //   const number = props.number;

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + props.number)}>Click me</button>
    </div>
  );
};
export default Example;
