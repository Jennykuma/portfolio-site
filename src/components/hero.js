import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import { FaRegEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import { device } from "../components/device"

import TypedDescription from "../components/typed-description"
import DynamicImage from "../components/image"
import SEO from "../components/seo"

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
    background: linear-gradient(180deg, rgba(255,255,255,0) 65%, #f2afa4 75%);
    color: #333333; 
    
    &:hover {
        color: #333333;
        text-decoration: none;
        background: linear-gradient(180deg, rgba(255,255,255,0) 65%, #e87461 75%);
  }
`;

const StyledExtLink = styled(props => <a {...props} />)`
    background: linear-gradient(180deg, rgba(255,255,255,0) 65%, #f2afa4 75%);
    color: #333333; 

    &:hover {
        color: #333333;
        text-decoration: none;
        background: linear-gradient(180deg, rgba(255,255,255,0) 65%, #e87461 75%);
  }
`;

const IconLink = styled.a`
    color: #e87461;
    margin-right: 10px;

    &:hover {
        color: #f2afa4;
    }
`;

const StyledDiv = styled.div`
    @media screen and (max-width: 767px) {
        display: none !important;
    }

    @media screen and (min-width: 768px) {
        display: block !important;
    }
`;

const Hero = () => (
    <Container fluid>
        <SEO title="Home"/>
        <Row style={{ marginTop: `3vw` }}>
            
            <Col xs="0" s="1" md="4" lg="4">
                <StyledDiv>
                    <DynamicImage imageName={"jennykumaImage"}></DynamicImage>
                </StyledDiv>
            </Col>
        
            <Col xs="12" s="12" md="8" lg="8" style={{ marginTop: `1%`, padding: `3%` }}>
                <Row>
                    <Text>hey there! I am</Text>
                </Row>
                <Row>
                    <Name>
                        Jenny Le.
                    </Name>
                </Row>
                <Row>
                    I am&nbsp;<TypedDescription />
                </Row>
                <Row>
                    <Text>
                        <br/>
                        I love to create beautiful <StyledLink to={/projects/}>experiences</StyledLink> for others through web applications and various technologies <br />
                        & enjoy capturing special <StyledExtLink target="_blank" href="https://www.instagram.com/jiku.ma/">moments</StyledExtLink> with my Sony a6000.
                    </Text>
                </Row>
                <Row>
                    <div>
                        <IconLink href={"mailto:" + "jennyle.dev@gmail.com"}>
                            <FaRegEnvelope />
                        </IconLink>

                        <IconLink target="_blank" href="https://github.com/Jennykuma">
                            <FaGithub />
                        </IconLink>

                        <IconLink target="_blank" href="https://www.linkedin.com/in/jennyle05/">
                            <FaLinkedin />
                        </IconLink>
                    </div>
                </Row>
            </Col>
        </Row>
    </Container>
)

export default Hero