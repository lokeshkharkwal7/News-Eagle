import React from "react";

function SlideShow(news) {
  // only showing top 3 news in slideshow
  const newsSlides = news.news.slice(4, 6);
  const getInfo = () => {
    console.log(news.news[7].url);
  };

  return (
    <div className="mb-4">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={news.news[7].urlToImage}
              className="d-block "
              alt="..."
              style={{ height: "30rem", width: "100%" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>{news.news[7].title}</h5>
              {/* <p>{news.news[0].title}</p> */}
              <a
                target="_blank"
                className="btn btn-success"
                onClick={getInfo}
                href={news.news[7].url}
              >
                {" "}
                Read More
              </a>
            </div>
          </div>

          {newsSlides.map((articles) => {
            return (
              <div className="carousel-item">
                <img
                  src={articles.urlToImage}
                  className="d-block w-100"
                  alt="..."
                  style={{ height: "30rem", width: "100%" }}
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{articles.title}</h5>
                  <p>
                    For More Information Please Click on the button Below to
                    show the full content of the slide.
                  </p>
                  <a
                    target="_blank"
                    className="btn btn-success"
                    onClick={getInfo}
                    href={articles.url}
                  >
                    {" "}
                    Read More
                  </a>
                </div>
              </div>
            );
          })}

          {/* <div className="carousel-item">
            <img
              src="https://picsum.photos/id/237/200/300"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div> */}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default SlideShow;
