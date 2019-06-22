import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Image from "../components/image"
import SEO from "../components/seo"

// Create a Title component that'll render an <h1> tag with some styles
const Name = styled.h1`
  font-size: 5.0em;
  text-align: left;
  font-family: varela round;
  color: #F99581;
`;



const Hero = () => (
    <>
        <SEO title="Jenny's Portfolio"/>
        <p>Hey! I'm</p>
        <Name>Jenny Le</Name>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
        </div>
    </>
)

export default Hero