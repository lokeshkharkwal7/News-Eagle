import React, { Component } from "react";

export class NewsCard extends Component {
  static propTypes = {};

  render() {
    const {
      title,
      url,
      description,
      fullArticle,
      publishedAtDate,
      publishedAtTime,
      author,
    } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "25rem" }}>
          <img src={url} className="img-fluid" alt="News" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              href={fullArticle}
              target="blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
            <p class="card-text my-2 d-flex justify-content-end">
              <small className="text-body-secondary">By {author}</small>
            </p>

            <div class="card-footer text-body-secondary d-flex justify-content-between">
              <small class="text-body-secondary">{publishedAtDate}</small>
              <small class="text-body-secondary">{publishedAtTime}</small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsCard;
