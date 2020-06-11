import React from 'react'
import PropTypes from 'prop-types'

import Header from '../components/header'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Header />
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
