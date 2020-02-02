import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButton, setIdFromButton] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        console.log(res);
        setPost(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [idFromButton]);

  const handleClick = () => {
    setIdFromButton(id);
  };
  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <button onClick={handleClick}> Update</button>
      {/* <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title} </li>
        ))}
      </ul> */}
      <p>{post.title}</p>
    </div>
  );
}

export default DataFetching;
