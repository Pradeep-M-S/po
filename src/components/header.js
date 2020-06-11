import React, { Component } from 'react'
import Link from 'gatsby-link'
import './Header.css'

class Header extends Component {
  state = {
    hasUserScrolled: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasUserScrolled: true })
    } else {
      this.setState({ hasUserScrolled: false })
    }
  }
  render() {
    return (
      <div
        className={
          this.state.hasUserScrolled ? 'Header HeaderScrolled' : 'Header'
        }
      >
        <div className="HeaderGroup">
          <Link to="/">
            <img src={require('../images/logo-designcode.svg')} width="30" />
          </Link>
          <Link to="/">Skills</Link>
          <Link to="/">Blog</Link>
          <Link to="/">Projects</Link>
          <Link to="/">
            <button>Buy</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Header
