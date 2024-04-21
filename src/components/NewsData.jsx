import React from "react";

export default function NewsData(props) {
  return (
    <>
      <div className="col" key={props.key}>
        <div
          className="card"
          style={{ width: "15rem", border: "2px solid black" }}
        >
          <img
            className="card-img-top"
            src={props.urlImg}
            alt="Card image cap"
            style={{ height: "150px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <a href={props.url} className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
