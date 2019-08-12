import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { Grid, Col, Row } from 'react-styled-flexboxgrid' 

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

const Text = styled.text`
  font-size: 0.9em;
  line-height: 1.5em;
`;

const Polaroid = styled.button`
  position: relative;
  background: #fff;
  width: 294px;
  padding: 0px 0px 15px 0px;
  margin: 15px;
  text-align: center;
  border: 1px solid #f4f4f4;

  &:hover {
    -moz-box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.10);
    -webkit-box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.10);
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.10);
  }
`;

const ProjectsPage = () => (
  <Layout>
    <Grid> 
      <SEO title="Projects"/>
      <Row start="xs">
        <Name>my projects.</Name>
      </Row>

      <Row start="xs">
        <Col xs={12} md={12} style={{ marginTop: `0%` }}>

          <Polaroid>
            <DynamicImage imageName={"lisasButtonImage"} />
            <br />
            <Text> Test Polaroid </Text>
          </Polaroid>

          <Polaroid>
            <DynamicImage imageName={"quickCommsImage"} />
            <br />
            <Text> Test Polaroid </Text>
          </Polaroid>

          <Polaroid>
            <DynamicImage imageName={"ikeaBuilderImage"} />
            <br />
            <Text> Test Polaroid </Text>
          </Polaroid>

          <Polaroid>
            <DynamicImage imageName={"plantingHyggeImage"} />
            <br />
            <Text> Test Polaroid </Text>
          </Polaroid>
        </Col>
      </Row>
    </Grid>
  </Layout>
)

export default ProjectsPage
