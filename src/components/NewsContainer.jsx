import React, { useEffect, useState } from "react";
import Spinner from "./spinner";

import NewsCard from "./NewsCard";

export default function NewsContainer({ category, pageSize, apikey, cardColor }) {
  // all the states in the program  page articles

  // using the state variable

  // using the setState since we are using function components

  const [page, setPage] = useState(1);

  const [articles, setArticle] = useState([]);
  // const[loading, setLoading] = setState(false)

  console.log("The value of card color inside the news container is ",cardColor)

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  async function updatePages() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apikey}&page=${page}&pageSize=${pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    // this is same as const [text, setText] = useState("");
    // this.setState = ({ articles: parsedData.articles })

    // setting the state of this variable to a different value
    setArticle(parsedData.articles);
    console.log(parsedData.articles);
  }

  async function nextPage() {
    setPage(page + 1);

    updatePages();
  }

  async function prevPage() {
    setPage(page - 1);

    updatePages();
  }

  // This function componentDidMount is like a destructor which will be calling in the end of the program making sure that calling this function is not required and our value of state will be updated at the end of the program

  useEffect(() => {
    async function fetchData() {
      await updatePages();
    }
    fetchData();
  }, []);

  return (
    <div>
      {!articles || articles.length < 1 ? (
        <Spinner />
      ) : (
        <>
          <h1 className=" text-center mt-3 my-5 fs-1">{`Today's Top ${capitalizeFirstLetter(
            category
          )} Highlights`}</h1>

          <div
            className="container" // d-flex justify-content-center
            style={{
              display: "flex",

              flexWrap: "wrap",
              // justifyContent: "space-around",
              justifyContent: "center",
              // alignItems: "center",
              alignItems: "stretch",
            }}
          >
            {articles.map((news) => {
              return (
                <div className="my-2" key={!news.url ? "key" : news.url}>
                  <NewsCard
                    // key={news.url}
                    cardColor = {cardColor}
                    fullArticle={!news.url ? "" : news.url}
                    url={
                      !news.urlToImage
                        ? "https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw"
                        : news.urlToImage
                    }
                    description={
                      !news.description
                        ? ""
                        : news.description.slice(0, 120) + "..."
                    }
                    title={!news.title ? "" : news.title.slice(0, 80) + "..."}
                    publishedAtDate={
                      !news.publishedAt ? "" : news.publishedAt.split("T")[0]
                    }
                    publishedAtTime={
                      !news.publishedAt
                        ? ""
                        : news.publishedAt.split("T")[1].slice(0, 8)
                    }
                    author={!news.author ? "Unknown" : news.author}
                  />
                </div>
              );
            })}
          </div>

          <div className="container d-flex justify-content-around my-4">
            <button
              type="button"
              className="btn btn-success text-light"
              onClick={() => {
                prevPage();
              }}
            >
              <b className="btn btn-sm text-light">Back &#8592;</b>
            </button>
            <button
              type="button"
              className="btn btn-success text-light"
              onClick={() => {
                nextPage();
              }}
            >
              <b className="btn btn-sm text-light">Next &#x2192;</b>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
