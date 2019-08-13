import React from "react"
import { StaticQuery, useStaticQuery, Link, graphql } from "gatsby"
import styled from 'styled-components'
import { Grid, Col, Row } from 'react-styled-flexboxgrid' 

import DynamicImage from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectPanel from "../components/project-panel"

// Create a Title component that'll render an <h1> tag with some styles
const Name = styled.h1`
  font-size: 3em;
  text-align: left;
  font-family: montserrat;
  font-weight: 500;
  color: #e87461;
`;

let projectPanelDiv = <ProjectPanel/>

const ProjectsPage = () => (
  <Layout>
    <Grid> 
      <SEO title="Projects"/>
      <Row>
        <Name>my projects.</Name>
      </Row>

      <Row>
        <Col xs={12} md={12} lg={12} style={{ marginTop: `0%` }}>
          
          {projectPanelDiv}

        </Col>
      </Row>
    </Grid>
  </Layout>
)

export default ProjectsPage
