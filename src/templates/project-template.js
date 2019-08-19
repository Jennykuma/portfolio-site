// From https://www.gatsbyjs.org/docs/adding-markdown-pages/

import React from "react"
import { graphql, Link } from "gatsby"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

import Layout from "../components/layout"
import Img from "gatsby-image"

import styled from 'styled-components'

const Title = styled.h1`
  text-align: left;
  font-family: varela round;
  font-weight: 500;
  color: #333333;
`;

const Date = styled.h6`
  text-align: left;
  font-family: varela round;
  font-weight: 500;
  color: #333333;
`;

const StyledLink = styled(props => <Link {...props} />)`
	font-family: nunito sans;
  font-size: 0.9em;
  font-weight: 500;
	color: #333333;

	&:hover {
		color: #f2afa4;
		text-decoration: none;
	}
`;

const Text = styled.text`
    font-size: 1em;
    line-height: 1.5em;
    font-family: nunito sans;
`;

export default function Template({
  data, pageContext // this prop will be injected by the GraphQL query below.
}) {
  const { next, prev } = pageContext
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
    <div className="blog-post-container">
      <div className="blog-post">
        <Title>{frontmatter.title}</Title>
        <Date>{frontmatter.date}</Date>
        <Img fluid={frontmatter.featuredImage.childImageSharp.fluid} />
        <Text
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        ></Text>

        <br />

        <p style={{ textAlign: `center` }}>
          {next && <StyledLink to={next.frontmatter.path}> <FaAngleLeft /> Prev Project </StyledLink>}
          &nbsp;
          {prev && <StyledLink to={prev.frontmatter.path}> Next Project <FaAngleRight /> </StyledLink>}
        </p>

      </div>
    </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`