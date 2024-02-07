import React, { Component } from "react";
import PropTypes from "prop-types";

export class NewsCard extends Component {
  static propTypes = {};

  render() {
    const { title, url, description, key , fullArticle } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={url} className="card-img-top" alt="News" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={fullArticle} target="blank" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsCard;
