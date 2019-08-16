import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import DynamicImage from "../components/image"
import SEO from "../components/seo"
import { Container, Row, Col } from 'reactstrap'
import { FaRegEnvelope, FaLinkedin } from 'react-icons/fa'

// Create a Title component that'll render an <h1> tag with some styles
const Name = styled.h1`
  font-size: 3.5em;
  text-align: left;
  font-family: varela round;
  font-weight: 500;
  color: #e87461;
`;

const Text = styled.text`
    font-size: 0.9em;
    line-height: 1.5em;
    font-family: nunito sans;
`;

const StyledLink = styled(props => <Link {...props} />)`
    background: linear-gradient(180deg, rgba(255,255,255,0) 65%, #e87461 85%);
    color: #333333; 

    &:hover {
        color: #333333;
        text-decoration: none;
        background: linear-gradient(180deg, rgba(255,255,255,0) 65%, #f2afa4 85%);
  }
`;

const IconLink = styled.a`
    color: #e87461;

    &:hover {
        color: #f2afa4;
    }
`;

const Hero = () => (
    <Container fluid>
        <SEO title="Jenny's Portfolio"/>
        <Row style={{ marginTop: `0%` }}>
            <Col xs="0" s="0" md="4" lg="4">
                <DynamicImage imageName={"jennykumaImage"}></DynamicImage>
            </Col>

            <Col xs="12" s="12" md="8" lg="8" style={{ marginTop: `1%`, padding: `3%` }}>
                <Row>
                    <Text>hey there! I'm</Text>
                </Row>
                <Row>
                    <Name>Jenny Le.</Name>
                </Row>
                <Row style={{ marginBottom: `1%` }}>
                    <Text>
                        I am a fifth-year Computer Science student who is also concentrating in Human-Computer Interaction 
                        at the University of Calgary.
                    </Text>
                </Row>
                
                <Row style={{ marginBottom: `1%` }}>
                    <Text>
                        I love creating beautiful experiences for others through websites or software. <br />
                        I also enjoy capturing special moments with my Sony a6000.
                    </Text>
                </Row>
                
                <Row>
                    <Text>
                        Feel free to check out my&nbsp;
                        <StyledLink to={/projects/}>
                            projects
                        </StyledLink>
                        .
                    </Text>
                </Row>
                <Row>
                    <IconLink href={"mailto:" + "jennycantcode@gmail.com"}>
                        <FaRegEnvelope style={{marginRight: `10px`}}/>
                    </IconLink>

                    <IconLink target="_blank" href="https://www.linkedin.com/in/jennyle05/">
                        <FaLinkedin />
                    </IconLink>
                </Row>
            </Col>
        </Row>
    </Container>
)

export default Hero