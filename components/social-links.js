import React, { Component } from 'react'

import Dropdown from 'muicss/lib/react/dropdown'
import DropdownItem from 'muicss/lib/react/dropdown-item'

import Github from 'react-icons/lib/fa/github-alt'
import Bitcoin from 'react-icons/lib/fa/bitcoin'
import Twitter from 'react-icons/lib/fa/twitter'
import Slack from 'react-icons/lib/fa/slack'
import Reddit from 'react-icons/lib/fa/reddit-alien'
import Telegram from 'react-icons/lib/fa/paper-plane'
import Irc from 'react-icons/lib/fa/terminal'
import Forum from 'react-icons/lib/fa/comments'
import Linkedin from 'react-icons/lib/fa/linkedin-square'

export default class SocialLinks extends Component {
  render () {
    return (
      <Dropdown label="Social Links" className="social-links">
        <DropdownItem link="https://bitcointalk.org/index.php?topic=1957064" target="_blank"><Bitcoin className="icon" /> Announcement - Bitcointalk Forum</DropdownItem>
        <DropdownItem link="https://elasticfans.herokuapp.com/" target="_blank"><Slack className="icon" /> Slack</DropdownItem>
        <DropdownItem link="https://twitter.com/elastic_coin" target="_blank"><Twitter className="icon" /> Twitter</DropdownItem>
        <DropdownItem link="https://www.reddit.com/r/elasticproject/" target="_blank"><Reddit className="icon" /> Reddit</DropdownItem>
        <DropdownItem link="https://github.com/elastic-coin" target="_blank"><Github className="icon" /> Github</DropdownItem>
        <DropdownItem link="https://talk.elasticexplorer.org" target="_blank"><Forum className="icon" /> Elastic Talk Forums</DropdownItem>
        <DropdownItem link="http://webchat.freenode.net?channels=elasticproject&uio=d4" target="_blank"><Irc className="icon" /> IRC</DropdownItem>
      </Dropdown>
    )
  }
}
