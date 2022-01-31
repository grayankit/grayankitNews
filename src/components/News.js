import React, { Component } from "react";
import Newscompnent from "./Newscompnent";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    console.log(" Hello from News.js");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - Headlines`
  }

  async fetchMoreNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=63f7ed9538ea40359414c6cb5fa0d6b2&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    this.fetchMoreNews();
  }

  previousNews = async () => {
    this.setState({ page: this.state.page - 1 });
    this.fetchMoreNews();
  };

  nextNews = async () => {
    this.setState({ page: this.state.page + 1 });
    this.fetchMoreNews();
  };

  fetchMoreData = async () => {  
    this.setState({page: this.state.page + 1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=63f7ed9538ea40359414c6cb5fa0d6b2&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults
    })
  };
  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">{this.capitalizeFirstLetter(this.props.category)} - Top Headlines</h2>
        {this.state.loading && <Loading />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Loading />}
        >
          <div className="container">
            <div className="row my3">
              {!this.state.loading &&
                this.state.articles.map((element) => {
                  return (
                    <div className="col-md-3" key={element.url}>
                      <Newscompnent
                        title={element.title ? element.title.slice(0, 45) : ""}
                        Description={
                          element.description
                            ? element.description.slice(0, 88)
                            : ""
                        }
                        newsUrl={element.url}
                        imgUrl={element.urlToImage}
                        author={element.author}
                        publishedAt={element.publishedAt}
                        source={element.source.name}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-outline-dark"
            onClick={this.previousNews}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)
            }
            className="btn btn-outline-dark"
            onClick={this.nextNews}
          >
            Next &rarr;
          </button>
        </div> */}
      </div>
    );
  }
}
