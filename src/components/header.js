import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

require("typeface-varela-round")

const Header = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <div>
      <nav>
        <ul
          style={{
            display: `flex`,
            justifyContent: `flex-end`
          }}
        >
          {menuLinks.map(link => (
            <li
              key={link.name}
              style={{
                listStyleType: `none`,
                padding: `1rem`
              }}
            >
              <Link style={{ color: `#333333` }} to={link.link}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
