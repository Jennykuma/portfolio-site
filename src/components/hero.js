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
  color: #fe938c;
`;

const Text = styled.text`
    font-size: 0.9em;
    line-height: 1.5em;
`;

const Highlight = styled.text`
    display: inline;
    background-image: linear-gradient(#fff 60%, #FFC5C1 55%);
`;

const Hero = () => (
    <Grid>
        <SEO title="Jenny's Portfolio"/>

        <Row style={{ marginTop: `10%`}}>
            <Col xs={12} md={6} mdOffset={1}>
                <Row start="xs">
                    <Name>I'm Jenny.</Name>
                </Row>

                <Col xs={12} md={false} lg={false} xl={false} style={{ marginBottom: `5%` }}>
                    <Image />
                </Col>

                <Row>
                    <Text>
                        I am a fifth-year Computer Science student who is also concentrating in Human-Computer Interaction 
                        at the University of Calgary.
                    </Text>
                </Row>

                <br></br>

                <Row>
                    <Text>
                        I love creating beautiful experiences for others by creating websites or software. 
                        I also enjoy capturing special moments with my Sony a6000.
                    </Text>
                </Row>

                <br></br>

                <Row>
                    <Text>
                        Feel free to check out my&nbsp;
                        <Link style={{ color: `#515151`, display: `inline`, backgroundImage: `linear-gradient(#fff 60%, #FFC5C1 55%)` }} to={/projects/}>
                            projects
                        </Link>
                        .
                    </Text>
                </Row>
            </Col>

            <Col xs={false} mdOffset={1} md={3}>
                <Image />
            </Col>
        </Row>

    </Grid>
)

export default Hero