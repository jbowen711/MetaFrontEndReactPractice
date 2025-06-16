import React from "react";
import {useState, useEffect } from "react";

function App() {
  // destructing the useState array as user and setUser
  const [user, setUser] = useState([]);


  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then((data) => setUser(data))
  };

  // Run fetchData inside useEffect to fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div>
      <h1>Customer data</h1>
      <h2>
        Name: {user.results[0].name.first}
      </h2>
      <img src={user.results[0].picture.large} alt="User" />

    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}

export default App;
