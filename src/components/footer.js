import React from "react"
import styled from 'styled-components'

const Text = styled.text`
    color: #333333;
    opacity: 0.8;
    font-size: 0.5em;
    line-height: 1.5em;
    font-family: nunito sans;
`;

const StyledDiv = styled.div`
    bottom: 0;
`;

const Footer = () => (
    <StyledDiv style={{ textAlign: `center` }}>
        <Text>
            Made with a love for coding - by Jenny 
        </Text>
    </StyledDiv>
)

export default Footer