import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { Grid, Col, Row } from 'react-styled-flexboxgrid' 

import Image from "../components/image"
import SEO from "../components/seo"

// Create a Title component that'll render an <h1> tag with some styles
const Name = styled.h1`
  font-size: 3.5em;
  text-align: left;
  font-family: montserrat;
  font-weight: 500;
  color: #F99581;
`;

const Text = styled.text`
    font-size: 0.9em;
`;

const Hero = () => (
    <Grid>
        <SEO title="Jenny's Portfolio"/>

        <Col xs={12} md={6}>
            <Row>
                <Name>I'm Jenny.</Name>
            </Row>

            <Row>
                <Text>
                    I am a fifth-year Computer Science student who is also concentrating in Human-Computer Interaction 
                    at the University of Calgary.
                </Text>
            </Row>
            <br></br>
            <Row>
                <Text>
                    I love creating beautiful experiences for others through developing websites or software. 
                    I also enjoy capturing special moments with my Sony a6000.
                </Text>
            </Row>
        </Col>

    </Grid>
)

export default Hero