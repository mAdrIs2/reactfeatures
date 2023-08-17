import { useState, useEffect } from "react";

const Api = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="card-container">
      {data &&
        data.map((element) => (
          <div className="card" key={element.id}>
            <h2 className="card-title">Id : {element.id}</h2>
            <h6 className="card-subtitle ">Name : {element.name}</h6>
            <h6 className="card-subtitle ">Email : {element.email}</h6>
            <p className="card-text">About : {element.body}</p>
          </div>
        ))}
    </div>
  );
};

export default Api;
