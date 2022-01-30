import React, { Component } from "react";

export default class Newscompnent extends Component {
  render() {
    let { title, Description, imgUrl, newsUrl, author, publishedAt, source} =
      this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {source}
        <span class="visually-hidden">unread messages</span>
        </span>
          <img
            src={
              !imgUrl
                ? "https://images.hindustantimes.com/img/2022/01/26/1600x900/itbp-ladakh_1643168616129_1643168622996.jpg"
                : imgUrl
            }
            className="card-img-top"
            alt="Failed to load"
          />
          <div className="card-body">
            <h5 className="card-title">{title}....</h5>
            <p className="card-text">{Description}....</p>
            <p className="card-text"><small class="text-muted">By {!author ? "Unknown" : author} on  {new Date(publishedAt).toGMTString()}</small></p>
            <a
              href={newsUrl}
              className="btn btn-primary btn-sm"
              target={"blank"}
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
