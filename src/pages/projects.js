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
  color: #fe938c;
`;

const Text = styled.text`
    font-size: 0.9em;
    line-height: 1.5em;
`;

const ProjectsPage = () => (
  <Layout>
    <Grid>
      <SEO title="Projects"/>
      <Row start="xs">
        <Name>My Projects.</Name>
      </Row>
    </Grid>
  </Layout>
)

export default ProjectsPage
