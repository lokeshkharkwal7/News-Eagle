import React from "react";

export default function NewsCard({
  title,
  description,
  author,
  publishedAtDate,
  publishedAtTime,
  url,
  fullArticle,
  cardColor,
}) {
  console.log("The color that you wish to enter in the card is : ", cardColor);

  // let cardBackground = cardColor ==="black" ? "black" : "white"
  // let cardTextColor = cardColor ==="black" ? "white" : "black"
  return (
    // <div>      <div className="card" style={{ width: "24rem" , backgroundColor:color==='black'?'white':'black , color : color==='black' ? 'white' : 'black'   }}>
    <div>
      <div
        className="card"
        style={{
          width: "18rem",

          backgroundColor: cardColor,
          color: cardColor === "black" ? "white" : "black",
        }}
      >
        {/* <div className="card" style={{ width: "24rem", backgroundColor:   cardBackground , color:   cardTextColor }}> */}

        <img
          src={url}
          className="img-fluid"
          style={{ width: "425px ", height: "180px" }}
          alt="News"
        />
        <div className="card-body fs-6">
          <h5 className="card-title" style={{ fontSize: "0.9rem" }}>
            {" "}
            {title}
          </h5>
          <p className="card-text" style={{ fontSize: "0.7rem" }}>
            {description}
          </p>
          <a
            href={fullArticle}
            target="blank"
            className="btn btn-sm btn-primary bt-round mb-2"
          >
            Read More
          </a>

          <div className="card-footer d-flex justify-content-between">
            <small
              className={`text-body-${
                cardColor === "black" ? "light" : "secondary"
              }`}
            >
              {publishedAtDate}
            </small>
            <small
              className={`text-body-${
                cardColor === "black" ? "light" : "secondary"
              }`}
            >
              {publishedAtTime}
            </small>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <p className="card-text my-2 d-flex  ">
              <small
                className={`text-body-${
                  cardColor === "black" ? "light" : "secondary"
                }`}
                style={{ fontSize: "0.7rem" }}
              >
                Author : {author}
              </small>
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}
