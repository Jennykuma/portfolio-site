import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { Grid, Col, Row } from 'react-styled-flexboxgrid' 

import DynamicImage from "../components/image"
import SEO from "../components/seo"

// Create a Title component that'll render an <h1> tag with some styles
const Name = styled.h1`
  font-size: 3.5em;
  text-align: left;
  font-family: montserrat;
  font-weight: 500;
  color: #e87461;
`;

const Text = styled.text`
    font-size: 0.9em;
    line-height: 1.5em;
`;

const Hero = () => (
    <Grid>
        <SEO title="Jenny's Portfolio"/>

        <Row>
            <Col xs={12} md={6} lg={6} mdOffset={1} style={{ marginTop: `10%` }}>
                
                <Row start="xs">
                    <Text>hey there! I'm </Text>
                </Row>
                <Row start="xs">
                    <Name>Jenny Le.</Name>
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
                        I love creating beautiful experiences for others by creating websites or software. <br />
                        I also enjoy capturing special moments with my Sony a6000.
                    </Text>
                </Row>
                <br></br>
                <Row>
                    <Text>
                        Feel free to check out my&nbsp;
                        <Link style={{ color: `#515151`, display: `inline`, backgroundImage: `linear-gradient(#fff 60%, #f2afa3 35%)` }} to={/projects/}>
                            projects
                        </Link>
                        .
                    </Text>
                </Row>
                
            </Col>
        </Row>

    </Grid>
)

export default Hero