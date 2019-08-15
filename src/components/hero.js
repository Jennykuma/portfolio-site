import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import DynamicImage from "../components/image"
import SEO from "../components/seo"
import { Container, Row, Col } from 'reactstrap'

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
    <Container>
        <SEO title="Jenny's Portfolio"/>
        <Row>
            <Col xs="12" s="12" md="6" lg="6" style={{ marginTop: `0%`, paddingLeft: `0`, paddingRight: `0` }}>
                <Row>
                    <Text>hey there! I'm</Text>
                </Row>
                <Row>
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
                        <Link style={{ color: `#515151`, display: `inline`, backgroundImage: `linear-gradient(#fff 60%, #f2afa3 75%)` }} to={/projects/}>
                            projects
                        </Link>
                        .
                    </Text>
                </Row>
            </Col>
        </Row>
    </Container>
)

export default Hero