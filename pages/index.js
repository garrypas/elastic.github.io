import React, { Component } from 'react'

import Header from '../components/home/header'
import WhyElastic from '../components/home/why-elastic'
import Community from '../components/home/community'
import ForkTimeline from '../components/home/fork-timeline'
import News from '../components/home/news'

export default class Homepage extends Component {
  render () {
    return (
      <article className="homepage">
        <Header />
		<WhyElastic />
        <News />
      </article>
    )
  }
}
