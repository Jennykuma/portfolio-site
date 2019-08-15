import React from "react"
import { StaticQuery, useStaticQuery, Link, graphql } from "gatsby"
import styled from 'styled-components'
import { Container, Row, Col } from "reactstrap"

import DynamicImage from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"

// Create a Title component that'll render an <h1> tag with some styles
const Name = styled.h1`
  font-size: 3em;
  text-align: left;
  font-family: montserrat;
  font-weight: 500;
  color: #e87461;
`;

const ContactPage = () => (
  <Layout>
    <Container> 
      <SEO title="Contact Me"/>
      <Row>
        <Name>contact me.</Name>
      </Row>
    </Container>
  </Layout>
)

export default ContactPage
