import React from "react"
import { StaticQuery, useStaticQuery, Link, graphql } from "gatsby"
import styled from 'styled-components'
import { Container, Row, Col } from "reactstrap"

import DynamicImage from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectPanel from "../components/project-panel"

// Create a Title component that'll render an <h1> tag with some styles
const Headliner = styled.h1`
  font-size: 3em;
  text-align: left;
  font-family: varela round;
  font-weight: 500;
  color: #e87461;
`;

let projectPanelDiv = <ProjectPanel/>

const ProjectsPage = () => (
  <Layout>
    <Container fluid> 
      <SEO title="Projects"/>
      <Row>
        <Headliner>projects:</Headliner>
      </Row>

      <Row>
        <Col xs={{ size: 'auto', offset: 1 }} s={{ size: 'auto', offset: 0 }} md={{ size: 'auto', offset: 0 }} lg={{ size: 'auto', offset: 0 }} style={{ paddingLeft: 0, paddingRight: 0 }}>
          {projectPanelDiv}
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default ProjectsPage
