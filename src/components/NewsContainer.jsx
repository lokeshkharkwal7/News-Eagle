import React, { Component } from "react";
import PropTypes from "prop-types";
import NewsCard from "./NewsCard";
import NavBar from "./NavBar";

export class NewsContainer extends Component {
  static propTypes = {};

  constructor() {
    super();

    // using the state variable
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async nextPage() {
    this.setState({ page: this.state.page + 1 }, () => {
      console.log("Next Page");
    });
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      this.props.category
    }&apiKey=3f33e52910804eb8982c94b4d56444a8&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;

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

  async prevPage() {
    this.setState({ page: this.state.page - 1 }, () => {
      console.log("Previous Page");
    });
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      this.props.category
    }&apiKey=3f33e52910804eb8982c94b4d56444a8&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;

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
    const { pageSize } = this.props;

    return (
      <div>
        <h1 className=" text-center mb-4 mt-3">Today's Top Highlights</h1>

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
              <div className="my-2">
                <NewsCard
                  // key={news.url}
                  fullArticle={!news.url ? "" : news.articles}
                  url={
                    !news.urlToImage
                      ? "https://editorial.fxstreet.com/images/Markets/Commodities/Metals/Gold/gold-nuggets-7636265_Large.jpg"
                      : news.urlToImage
                  }
                  description={
                    !news.description
                      ? ""
                      : news.description.slice(0, 120) + "..."
                  }
                  title={!news.title ? "" : news.title.slice(0, 80) + "..."}
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
      </div>
    );
  }
}

export default NewsContainer;
