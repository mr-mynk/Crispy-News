import React from "react";

const NewsItem = (props) => {
  let { title, desc, imgUrl, url, author, publishedAt, source } = props;
  return (
    <>
      <div className="card " style={{ width: "fit-content" }}>
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{ zIndex: 1, left: "90%" }}
        >
          {source.name}
        </span>
        <a
          style={{ textDecoration: "none", color: "black" }}
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          <img src={imgUrl} className="card-img-top" alt="img..!" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <p
              style={{
                fontSize: "12px",
                textAlign: "right",
                marginTop: "30px",
                marginBottom: 0,
              }}
            >
              {author} - {new Date(publishedAt).toGMTString()}
            </p>
          </div>
        </a>
      </div>
    </>
  );
};

export default NewsItem;

// 9ac2e647af8b457e9682e1361f14b057
// https://newsapi.org/v2/top-headlines?country=in&apiKey=9ac2e647af8b457e9682e1361f14b057
// d093053d72bc40248998159804e0e67d
