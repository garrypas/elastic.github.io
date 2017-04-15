import React, { Component } from 'react'

import Heart from 'react-icons/lib/fa/heart'

export default class Credits extends Component {
  render () {
    return (
      <div className="credits">
        <p>
          This website was created by Elastic Community.
          If you'd like to support similar developments, please consider donating in XEL:
        </p>
        <ul>
          <li>
            <b>DaxClassix</b> Web Development
            <br />
            <code className="wallet-address">ELASTIC_COMMUNITY_WALLET</code>
          </li>
          {/* TODO
          
          */}
        </ul>
        <div className="mui--text-center">
          Much <Heart />
        </div>
      </div>
    )
  }
}
