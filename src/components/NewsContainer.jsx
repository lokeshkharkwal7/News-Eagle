import React, { Suspense, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import Spinner from "./spinner";

import NewsCard from "./NewsCard";
import SlideShow from "./SlideShow";

export default function NewsContainer({
  category,
  pageSize,
  apikey,
  cardColor,
}) {
  const [page, setPage] = useState(1);

  const [articles, setArticle] = useState([]);
  // const[loading, setLoading] = setState(false)

  console.log(
    "The value of card color inside the news container is ",
    cardColor
  );

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  async function updatePages() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apikey}&page=${page}&pageSize=${pageSize}`;
    // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apikey}&pageSize=${pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
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

  // const NewsCard = React.lazy(() => import("./NewsCard"));

  const loadMoreContent = async () => {
    setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apikey}&page=${page}&pageSize=${pageSize}`;
    // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apikey}&pageSize=${pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();

    // concatinating the articles so that we can get the total items

    setArticle(articles.concat(parsedData.articles));
  };

  useEffect(() => {
    async function fetchData() {
      await updatePages();
    }
    fetchData();
  }, []);

  return (
    <div>
      {/* <Suspense fallback={<Spinner />}> */}

      {!articles || articles.length < 1 ? (
        <Spinner />
      ) : (
        <InfiniteScroll
          dataLength={articles.length} // kitni items tak wait karna hea
          next={loadMoreContent} // agar items khatam hoon gayee fir
          hasMore={true} // kab tak true means infnite
          loader={<Spinner />} // loading mei kya chaiye
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b> // agar items khatam hoonn gayee
            </p>
          }
        >
          {/* // {!articles || 
          //   (articles.length > 0 && ( */}
          <>
            <SlideShow news={articles} />

            <h1 className=" text-center mt-3 my-5  ">
              <i className="fa-solid fa-dove mx-3"></i>
              {`Today's ${capitalizeFirstLetter(category)} Highlights`}
            </h1>

            <div
              className="container-fluid" // d-flex justify-content-center
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "stretch",
              }}
            >
              {articles.map((news) => {
                return (
                  <div className="px-1" key={!news.url ? "key" : news.url}>
                    <NewsCard
                      // key={news.url}
                      cardColor={cardColor}
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
          </>
        </InfiniteScroll>

        // ))}
      )}

      {/* </Suspense> */}
    </div>
  );
}

{
  /* <div className="container d-flex justify-content-around my-4">
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
</div> */
}
