import React, { Component } from "react";
import Spinner from "./spinner";

import NewsCard from "./NewsCard";

export class NewsContainer extends Component {
  constructor() {
    super();

    // using the state variable
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  async updatePages(){
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=3f33e52910804eb8982c94b4d56444a8&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    // this is same as const [text, setText] = useState("");
    // this.setState = ({ articles: parsedData.articles })

    // setting the state of this variable to a different value
    this.setState({ articles: parsedData.articles }, () => {
      console.log("Given Articles : ");
      console.log(this.state.articles);
    });
  }

  async nextPage() {
    this.setState({ page: this.state.page + 1 }, () => {
      console.log("Next Page");
    });

    this.updatePages()
 
  }

  async prevPage() {
    this.setState({ page: this.state.page - 1 }, () => {
      console.log("Previous Page");
    });

    this.updatePages()

  }

  // This function componentDidMount is like a destructor which will be calling in the end of the program making sure that calling this function is not required and our value of state will be updated at the end of the program
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=3f33e52910804eb8982c94b4d56444a8&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    // this is same as const [text, setText] = useState("");
    // this.setState = ({ articles: parsedData.articles })

    // setting the state of this variable to a different value
    this.setState({ articles: parsedData.articles }, () => {
      console.log("Given Articles : ");
      console.log(this.state.articles);
    });
  }

  render() {
    // const { pageSize } = this.props;

    return (
      <div>
        {!this.state.articles || this.state.articles.length < 1 ? (
          <Spinner />
        ) : (
          <>
            <h1 className=" text-center mb-4 mt-3">{`Today's Top ${this.capitalizeFirstLetter(
              this.props.category
            )} Highlights`}</h1>

            <div
              className="container"
              style={{
                display: "flex",
                flexWrap: "wrap",
                // justifyContent: "space-around",
                alignItems: "center",
                gap: "1px",
              }}
            >
              {this.state.articles.map((news) => {
                return (
                  <div className="my-2" key={!news.url ? "key" : news.url}>
                    <NewsCard
                      // key={news.url}
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
                  this.prevPage();
                }}
              >
                <b className="btn btn-sm text-light">Back &#8592;</b>
              </button>
              <button
                type="button"
                className="btn btn-success text-light"
                onClick={() => {
                  this.nextPage();
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
}

export default NewsContainer;
