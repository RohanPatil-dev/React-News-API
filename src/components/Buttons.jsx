import React from "react";

export default function Buttons(props) {
  async function handlePrevBtn() {
    console.log("previous");

    const url = `https://newsapi.org/v2/everything?q=tesla&from=2024-03-21&sortBy=publishedAt&apiKey=c564d4ccf5724eecbb13435af1159605&page=${props.pages}`;

    await fetch(url)
      .then((data) => data.json())
      .then((data) => {
        props.set({ newsApi: data.articles, page: props.pages - 1 });
        console.log(data);
      });
  }

  async function handleNextBtn() {
    console.log("next");

    const url = `https://newsapi.org/v2/everything?q=tesla&from=2024-03-21&sortBy=publishedAt&apiKey=c564d4ccf5724eecbb13435af1159605&page=${props.pages}`;

    await fetch(url)
      .then((data) => data.json())
      .then((data) => {
        props.set({ newsApi: data.articles, page: props.pages + 1 });
        console.log(data);
      });
  }
  return (
    <>
      <div
        className="mt-4"
        style={{ display: "grid", gridTemplateColumns: "auto auto" }}
      >
        <button
          disabled={props.pages <= 1}
          class="btn btn-dark"
          style={{ width: "200px", marginLeft: "150px" }}
          onClick={handlePrevBtn}
          href="#"
          role="button"
        >
          Previous
        </button>
        <button
          class="btn btn-dark"
          style={{ width: "200px", marginLeft: "200px" }}
          onClick={handleNextBtn}
          href="#"
          role="button"
        >
          Next
        </button>
      </div>
    </>
  );
}
