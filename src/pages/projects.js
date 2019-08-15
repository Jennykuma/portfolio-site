import React from "react"
import { StaticQuery, useStaticQuery, Link, graphql } from "gatsby"
import styled from 'styled-components'
import { Container, Row, Col } from "reactstrap"

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
    <Container fluid> 
      <SEO title="Projects"/>
      <Row>
        <Name>my projects.</Name>
      </Row>

      <Row>
        <Col xs={12} s={12} md={12} lg={12} style={{ paddingLeft: `0`, paddingRight: `0` }}>
          
          {projectPanelDiv}

        </Col>
      </Row>
    </Container>
  </Layout>
)

export default ProjectsPage
