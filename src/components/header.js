import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

import "../styles/header.css"
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const StyledLink = styled(props => <Link {...props} />)`
	font-family: varela round;
	font-size: 0.8em;
	color: #333333;

	&:hover {
		color: #e87461;
		text-decoration: none;
	}
`;

const Header = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `2rem`,
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
              <StyledLink to={link.link}>
                {link.name}
              </StyledLink>
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
