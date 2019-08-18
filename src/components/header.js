import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import Headroom from "react-headroom"
import DynamicImage from '../components/image'

import "../styles/header.css"
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const StyledLink = styled(props => <Link {...props} />)`
	font-family: nunito sans;
  font-size: 0.9em;
  font-weight: 500;
	color: #333333;

	&:hover {
		color: #f2afa4;
		text-decoration: none;
	}
`;

const Header = ({ siteTitle, menuLinks }) => (
  <Headroom>
    <header
      style={{
        background: `white`,
        marginBottom: `2rem`,
        paddingTop: `1rem`,
      }}
    >
      <div style={{ margin: `0 auto`, maxWidth: 1280 }}>
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
                <StyledLink to={link.link} activeStyle={{ color: `#e87461`}}>
                  {link.name}
                </StyledLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  </Headroom>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
