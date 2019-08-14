import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { Grid, Col, Row } from 'react-styled-flexboxgrid' 

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

const Text = styled.text`
    font-size: 0.9em;
    line-height: 1.5em;
`;

const ContactPage = () => (
  <Layout>
    <Grid style={{ marginTop: `-4%` }}>
      <SEO title="Contact Me"/>

      <Row>
        <Name>contact me.</Name>
      </Row>

    </Grid>
  </Layout>
)

export default ContactPage
