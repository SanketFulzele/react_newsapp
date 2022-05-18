import React from 'react';

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className='my-3'>
      <div className="card" style={{ borderRadius: "10px" }}>
        <div style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: "0" }} >
          <span className='badge rounded bg-primary'> {source} </span>
        </div>

        <img src={imageUrl ? imageUrl : "https://cdn.cnn.com/cnnnext/dam/assets/220305160723-amtrak-logo-file-super-tease.jpg"}
          className="card-img-top" style={{ borderRadius: "10px 10px 0 0" }} />
        <div className="card-body">
          <h5 className="card-title" style={{ overflow: "hidden", textOverflow: "ellipsis" }}> {title} </h5>

          <p className="card-text" style={{
            overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box",
            webkitLineClamp: "2", webkitBoxOrient: "vertical",
          }}> {description} </p>

          <p className='card-text'> <small className='text-muted'>
            By {author ? author : "Unknown"} on {new Date(date).toGMTString()} </small></p>
          <a href={newsUrl} target="_blank" className="btn btn-danger">Read More...</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
