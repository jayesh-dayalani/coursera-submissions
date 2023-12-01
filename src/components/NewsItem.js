import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, url, imageUrl} = this.props 
    return (


        <div className="card m-2" style={{width: "18rem"}}>
        <img src={imageUrl} className="card-img-top mt-2" />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={url} target='_blank' className="btn btn-primary mt-auto" >More Info</a>
        </div>
      </div>
      
    )
  }
}

export default NewsItem
