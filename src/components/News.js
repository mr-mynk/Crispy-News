import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from 'react-top-loading-bar';

const News = (props, country = "in", pageSize = 5, category = "general") => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [progress,setProgress] = useState(0);

  const updateNews = async () => {
    setPage(page + 1);
    setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    setProgress(35);
    let parsedData = await data.json();
    setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    setProgress(100);
  };

  useEffect(() => {
    document.title =`CrispyNews | ${props.category.charAt(0).toUpperCase() + props.category.slice(1)
    }`;
    updateNews();
    //eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  return (
    <>
      <LoadingBar color='#f11946' height={5} progress={progress} />
      <h1 className="text-center my-3 pt-5 mt-5">
        TopHeadlines of the Day - {' '}
        {props.category.charAt(0).toUpperCase() + props.category.slice(1)}
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
        style={{ overflow: "hidden" }}
      >
        <div className="container">
          <div className="row">
            {articles.map((ele) => {
              return (
                <div className="col-md-4 my-3" key={ele.url}>
                  <NewsItem
                    author={ele.author ? ele.author : "Unknown"}
                    publishedAt={ele.publishedAt ? ele.publishedAt : null}
                    content={ele.content ? ele.content : null}
                    title={ele.title ? ele.title : null}
                    desc={ele.description ? ele.description : null}
                    imgUrl={ele.urlToImage ? ele.urlToImage : "https://yt3.ggpht.com/a/AGF-l7-uNFGm7dGcZFaB4OyUdgMVwTR087cV_ea_9Q=s900-c-k-c0xffffffff-no-rj-mo"}
                    url={ele.url ? ele.url : null}
                    source={ele.source ? ele.source : null}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};
// News.defaultProps = {
//   country: "in",
//   pageSize: 5,
//   category: "general",
// };
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
