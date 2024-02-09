import React from "react";

function App(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2  className="name">{props.name}</h2>
          <img className="circle-img"
            src={props.image}
            alt={props.alt}
          />
        </div>
        <div className="bottom">
          <p className="info">{props.number}</p>
          <p className="info">{props.email}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
