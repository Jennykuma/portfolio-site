import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const DynamicImage = (props) => {
  const data = useStaticQuery(graphql`
    query {
      jennykumaImage: file(relativePath: { eq: "jennykuma.png" }) {
        childImageSharp {
          fluid(maxWidth: 350) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lisasButtonImage: file(relativePath: { eq: "lisasButton.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      quickCommsImage: file(relativePath: { eq: "physicalComputing.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ikeaBuilderImage: file(relativePath: { eq: "ikeaBuilder.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      plantingHyggeImage: file(relativePath: { eq: "plantingHygge.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      temperatureAnomaliesImage: file(relativePath: { eq: "tempAnomalies.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mySpotifyDataImage: file(relativePath: { eq: "mySpotifyData.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      smartphoneMarketSharesImage: file(relativePath: { eq: "smartphoneMarketShares.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  let imageName = props.imageName;
  if (imageName == "jennykumaImage") {
    return <Img fluid={data.jennykumaImage.childImageSharp.fluid} />
  } else if (imageName == "lisasButtonImage") {
    return <Img fluid={data.lisasButtonImage.childImageSharp.fluid} />
  } else if (imageName == "quickCommsImage") {
    return <Img fluid={data.quickCommsImage.childImageSharp.fluid} />
  } else if (imageName == "ikeaBuilderImage") {
    return <Img fluid={data.ikeaBuilderImage.childImageSharp.fluid} />
  } else if (imageName == "plantingHyggeImage") {
    return <Img fluid={data.plantingHyggeImage.childImageSharp.fluid} />
  } else if (imageName == "temperatureAnomaliesImage") {
    return <Img fluid={data.temperatureAnomaliesImage.childImageSharp.fluid} />
  } else if (imageName == "mySpotifyDataImage") {
    return <Img fluid={data.mySpotifyDataImage.childImageSharp.fluid} />
  } else if (imageName == "smartphoneMarketSharesImage") {
    return <Img fluid={data.smartphoneMarketSharesImage.childImageSharp.fluid} />
  }
}
export default DynamicImage