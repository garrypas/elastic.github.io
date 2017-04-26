import React, { Component } from 'react'

try { require('particles.js') } catch (e) { console.warn(e) }

import Container from 'muicss/lib/react/container'
import Dropdown from 'muicss/lib/react/dropdown'
import DropdownItem from 'muicss/lib/react/dropdown-item'

import xelLogo from '../../assets/xel_logo.png'
import particlesConfig from './particles-config.json'
import SocialLinks from '../social-links'
import PriceTicker from '../price-ticker'
import BannerAd from './banner-ad'


export default class Header extends Component {
  componentDidMount () {
    setTimeout(() => {
      window.particlesJS('particles', particlesConfig)
    }, 0)
  }
  render () {
    return (
      <Container fluid className="mui--text-center main-header">
        <div id="particles" />
        <Container className="inner">
          <img src={xelLogo} alt="Elastic Project Logo" className="logo" />
          <h1>
            elastic
            <br />
            project
          </h1>
          <h2>
            <span>decentralized</span>
            {' '}<span>super</span>
            {' '}<span>computer</span>
          </h2>
          <Dropdown label="Information">
            <DropdownItem target="_blank" link="//github.com/elastic-coin/whitepaper">Whitepaper (Outdated / Will be revised)</DropdownItem>
            <DropdownItem target="_blank" link="//github.com/elastic-coin/faq">Elastic FAQ</DropdownItem>
          </Dropdown>
          &nbsp;{' '}&nbsp;
          <Dropdown label="XEL Wallets">
            <DropdownItem target="_blank" link="http://ec2-52-28-123-208.eu-central-1.compute.amazonaws.com:6876/">TestNet Wallet</DropdownItem>
          </Dropdown>
          &nbsp;{' '}&nbsp;
          <Dropdown label="XEL Nodes">
            <DropdownItem target="_blank" link="http://ec2-52-28-123-208.eu-central-1.compute.amazonaws.com:6876/">TestNet Node</DropdownItem>
          </Dropdown>
          <br />
          <Dropdown label="Explorers">
            <DropdownItem target="_blank" link="//elasticexplorer.org">elasticexplorer.org</DropdownItem>
          </Dropdown>
          &nbsp;{' '}&nbsp;
          <Dropdown label="Exchanges">
            <DropdownItem target="_blank" link="javascript:void">Elastic is on The TestNet</DropdownItem>
          </Dropdown>
          &nbsp;{' '}&nbsp;
          <SocialLinks />
          <br/>
          Donate: <code>ELASTIC_FOUNDATION_WALLET</code>
        </Container>
      </Container>
    )
  }
}
