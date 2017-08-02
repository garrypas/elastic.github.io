import React, { Component } from 'react'

try { require('particles.js') } catch (e) { console.warn(e) }

import Container from 'muicss/lib/react/container'
import Dropdown from 'muicss/lib/react/dropdown'
import DropdownItem from 'muicss/lib/react/dropdown-item'

import xelLogo from '../../assets/xel_logo.png'
import particlesConfig from './particles-config.json'
import Newsletter from '../newsletter'
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
          <a href="https://www.elastic.pw" title="First Decentralized Super Computer"><img src={xelLogo} alt="Elastic Project" className="logo" /></a>
		  <h1 className="dnone">
			<span>elastic</span>
			<span>project</span>
		  </h1>
		  <h2 className="dnone">
			<span>decentralized</span>
			{' '}<span>super</span>
			{' '}<span>computer</span>
		 </h2>
		  <br/>
          <br/>
		  <br/>
          
		  <h2>
			<span>Join</span>
			<span>Our</span>
			<span>Revolution</span>
		  </h2>
          <Dropdown label="Information">
            <DropdownItem target="_blank" link="https://github.com/elastic-coin/whitepaper">Whitepaper (Outdated / Will be revised)</DropdownItem>
            <DropdownItem target="_blank" link="https://github.com/elastic-coin/elastic-documents/blob/master/elasticPL/README.md">Elastic Programming Language</DropdownItem>
            <DropdownItem target="_blank" link="https://github.com/elastic-coin/elastic-documents/blob/master/faq/README.md">FAQ</DropdownItem>
            <DropdownItem target="_blank" link="https://github.com/elastic-coin/elastic.github.io/tree/source/assets">Media</DropdownItem>
          </Dropdown>
          &nbsp;{' '}&nbsp;
          <Dropdown label="XEL Wallets">
            <DropdownItem target="_blank" link="https://wallet.elastic.pw/">Online Wallet (#1)</DropdownItem>
            <DropdownItem target="_blank" link="https://wallet.elasticexplorer.org/">Online Wallet (#2)</DropdownItem>
          </Dropdown>
          &nbsp;{' '}&nbsp;
          <Dropdown label="XEL Nodes">
            <DropdownItem target="_blank" link="http://node1.elastic.pw/">Community XEL Node (#1)</DropdownItem>
            <DropdownItem target="_blank" link="http://node2.elastic.pw/">Community XEL Node (#2)</DropdownItem>
            <DropdownItem target="_blank" link="http://node1.elasticexplorer.org/">Dev XEL Node (#1)</DropdownItem>
            <DropdownItem target="_blank" link="http://node2.elasticexplorer.org/">Dev XEL Node (#2)</DropdownItem>
          </Dropdown>
          <br />
          <Dropdown label="Explorers">
            <DropdownItem target="_blank" link="http://elasticexplorer.org">elasticexplorer.org</DropdownItem>
          </Dropdown>
          &nbsp;{' '}&nbsp;
          <Dropdown label="Exchanges">
            <DropdownItem target="_blank" link="https://bittrex.com/Market/Index?MarketName=BTC-XEL">bittrex.com</DropdownItem>
            <DropdownItem target="_blank" link="https://heatwallet.com">heatwallet.com</DropdownItem>
          </Dropdown>
          &nbsp;{' '}&nbsp;
          <SocialLinks />
          
		  <br/>
		  <br/>
		  <br/>
		  
		  <Newsletter />
        </Container>
      </Container>
    )
  }
}
