import React, { Component, PropTypes } from 'react'
import { prefixLink } from 'gatsby-helpers'

import Container from 'muicss/lib/react/container'
import Col from 'muicss/lib/react/col'

import IconDecentralised from 'react-icons/lib/ti/arrow-maximise'
import IconFinality from 'react-icons/lib/ti/link'

import ContentBlock from '../content-block'
import IconPanel from '../icon-panel'

import whatCanDoElastic from '../../contents/why/what-can-do-elastic.md'
import soWeHave from '../../contents/why/so-we-have.md'
import otherDesignFeatures from '../../contents/why/other-design-features.md'


export default class WhatCanDoElastic extends Component {
  render () {
    return (
      <Container className="padded">
        <Col md="4" >
          <div dangerouslySetInnerHTML={{ __html: whatCanDoElastic.body }} />
          
        </Col>
        <Col md="8">
          <IconPanel Icon={IconFinality} >
            <ContentBlock body={otherDesignFeatures} />
          </IconPanel>
          <IconPanel Icon={IconDecentralised} >
            <ContentBlock body={soWeHave} />
          </IconPanel>
		  
          
		  
		  
          <br />
          <a
            className="mui-btn mui-btn mui-btn--raised mui-btn--primary"
            href={'/blog/2017-04-05-elastic-compared-to-other-competitors/'}
            target="_blank"
          >
            Elastic Compared to Other Competitors
          </a> 
		  
          <a
            className="mui-btn mui-btn mui-btn--raised mui-btn--primary"
            href={'http://localhost:8000/blog/2017-06-11-bitcoin-mining-with-decentralized-supercomputer/'}
            target="_blank"
          >
            Bitcoin Mining with Elastic PL (therotical)
          </a>
		  
        </Col>
		
      </Container>
    )
  }
}

whatCanDoElastic.contextTypes = {
  blogPosts: PropTypes.array.isRequired,
}
