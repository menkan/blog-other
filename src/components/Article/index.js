import React, { Component } from 'react'
import './index.scss'

export default class Article extends Component {
  // title
  rendeTitle = () => {
    const data = this.props.data
    const title = data && data.title
    return title ? <h1 className="article-wrap__title">{ title }</h1> : null
  }

  // tips
  rendeOnlyTips = () => {
    const data = this.props.data
    const time = data && data.time
    return time ? <div className="article-wrap__tips">Created tim: { time }</div> : null
  }

  rendeArticle = _ => {
    const data = this.props.data
    const article = data && data.article
    if(!Array.isArray(article)) return null
    return <div className="article-wrap__main">
      {
        article.map(item => {
          return <p className="article-wrap__main__paragraph" key={item}>{ item }</p>
        })
      }
    </div>
  }

  render() {
    return <div className="article-wrap">
      { this.rendeTitle() }
      { this.rendeOnlyTips() }
      { this.rendeArticle() }
    </div>
  }
}
