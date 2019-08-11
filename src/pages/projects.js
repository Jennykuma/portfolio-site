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
  width: 300px;
  padding: 15px;
  margin: 15px;
  text-align: center;
  border: 1px;	
  -moz-box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.10);
  -webkit-box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.10);
  box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.10);
`;

const ProjectsPage = () => (
  <Layout>
    <Grid>
      <SEO title="Projects"/>
      <Row start="xs">
        <Name>my projects.</Name>
      </Row>
      <Row start="xs">
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

      </Row>
    </Grid>
  </Layout>
)

export default ProjectsPage
