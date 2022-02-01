import React, {useState,useEffect} from "react";
import Newscompnent from "./Newscompnent";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles,setArticles] = useState([])
  const [loading,setLoading] = useState(false)
  const [page,setPage] = useState(1)
  const [totalResults,setTotalResults] = useState(0)

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const fetchMoreNews = async ()=> {
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=63f7ed9538ea40359414c6cb5fa0d6b2&page=${page}&pageSize=${props.pageSize}`;
      setLoading(true)
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      setArticles(parsedData.articles)
      setTotalResults(parsedData.totalResults)
      setLoading(false)
  }

    useEffect(() => {
      document.title = `${capitalizeFirstLetter(props.category)} - Headlines`;
      fetchMoreNews();
       // eslint-disable-next-line
    },[])

    const fetchMoreData = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=63f7ed9538ea40359414c6cb5fa0d6b2&page=${page+1}&pageSize=${props.pageSize}`;
      setPage(page+1)
      let data = await fetch(url);
      let parsedData = await data.json()
      setArticles(articles.concat(parsedData.articles))
      setTotalResults(parsedData.totalResults)
      setLoading(false)
    };

      return(
        <>
          <h2 className="text-center">{capitalizeFirstLetter(props.category)} - Top Headlines</h2>
          {loading && <Loading />}
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Loading />}
          >
            <div className="container">
              <div className="row my3">
                {articles.map((element) => {
                    return <div className="col-md-3" key={element.url}>
                        <Newscompnent title={element.title ? element.title.slice(0, 45) : ""} Description={element.description? element.description.slice(0, 88): ""} newsUrl={element.url} imgUrl={element.urlToImage} author={element.author} publishedAt={element.publishedAt} source={element.source.name}
                        />
                      </div>
                  })}
              </div>
            </div>
          </InfiniteScroll>
        </>
      )
}

export default News;
