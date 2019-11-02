import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { Container, Row, Col } from "reactstrap"
import { FaRegEnvelope, FaLinkedin } from 'react-icons/fa'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Headliner = styled.h1`
  font-size: 3em;
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

const StyledLink = styled(props => <a {...props} />)`
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

    &:hover {
        color: #f2afa4;
    }
`;

const AboutPage = () => (
    <Layout>
        <Container fluid>
            <SEO title="About"/>
            <Row style={{ marginTop: `3vw` }}>
                <Headliner>about:</Headliner>
            </Row>

            <Row>
                <Col md="7" style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <Text>
                        My passion for creating websites started back in 2008 when I was 12 years old. 
                        I built my first ever website using <StyledLink target="_blank" href="https://en.wikipedia.org/wiki/Webs_(web_hosting)">Freewebs</StyledLink>. It 
                        had butterflies, music and a ton of links! It was awesome.
                        <br />
                        Later on from that experience, I got into <StyledLink target="_blank" href="https://en.wikipedia.org/wiki/Tumblr">Tumblr</StyledLink> and started making themes.
                        <br />
                        Since then, I've been (and still am) improving the way that I build websites and software.
                        <br />
                        I've been open to looking at things in everyday life with different perspectives and it has helped me grow as a developer and person.
                        <p></p>
                        When I am not building web applications, I am probably using my Sony a6000 to capture moments and putting them 
                        up on <StyledLink target="_blank" href="https://www.instagram.com/jiku.ma/">Instagram</StyledLink>. I also use some of my spare time to do coding 
                        problems, read tech articles, or game. 
                        <p></p>
                        I love to take photos, travel, try new foods, and play sports (team sports & Minesweeper)!
                        <p></p>
                        Send me a message via email or LinkedIn if you ever want to chat!
                        <br />
                        <IconLink href={"mailto:" + "jennyle.dev@gmail.com"}>
                            <FaRegEnvelope style={{marginRight: `10px`}}/>
                        </IconLink>

                        <IconLink target="_blank" href="https://www.linkedin.com/in/jennyle05/">
                            <FaLinkedin />
                        </IconLink>
                    </Text>
                </Col>
            </Row>
        </Container>
    </Layout>
)

export default AboutPage