import React from "react"
import { useStaticQuery, Link, graphql, StaticQuery } from "gatsby"
import styled from 'styled-components'

import DynamicImage from "../components/image"

const Text = styled.text`
  font-size: 0.9em;
  line-height: 1.5em;
`;

const Polaroid = styled.button`
  position: relative;
  background: #fff;
  width: 294px;
  padding: 0px 0px 15px 0px;
  margin: 4px;
  text-align: center;
  border: 1px solid #f4f4f4;

  &:hover {
    -moz-box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.10);
    -webkit-box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.10);
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.10);
  }
`;

const ProjectPanel = (props) => (
  <StaticQuery
    query={graphql`
      query projectQuery {
        dataJson {
          projectData {
            project {
              title
              imageName
              description
            }
          }
        }
      }
    `}
    render={data => (
      <>
        {data.dataJson.projectData.map(projectItem => 
          <Polaroid>
            <DynamicImage imageName={projectItem.project.imageName} />
            <p></p>
            <Text> {projectItem.project.description} </Text>
          </Polaroid>
        )}
      </>
    )}
  />
)

export default ProjectPanel;