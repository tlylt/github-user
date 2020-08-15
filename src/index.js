import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function GitHubUser() {
  const [data, setData] = useState(null);
  const [name, setName] = useState("github");
  function updateName() {
    let val = document.querySelector("input[type=text]").value;
    setName(val);
  }
  useEffect(() => {
    fetch(`https://api.github.com/users/${name}`)
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, [name]);

  if (data) {
    return (
      <div className="main">
        <h2>Name:{data.login}</h2>
        <img src={data.avatar_url} />
        <label>
          Next:
          <input type="text" placeholder="Enter A Github Username" />
          <input type="button" value="GO" onClick={updateName} />
        </label>
      </div>
    );
  }

  return (
    <div className="main">
      <h1>Loading</h1>
    </div>
  );
}

function App() {
  return <GitHubUser />;
}

ReactDOM.render(<App />, document.getElementById("root"));
