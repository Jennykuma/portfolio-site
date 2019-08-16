import React from "react"
import { useStaticQuery, Link, graphql, StaticQuery } from "gatsby"
import styled from 'styled-components'

import DynamicImage from "../components/image"

const Div = styled.div`
  margin: 5%;
`;

const TitleText = styled.text`
  font-size: 0.9em;
  line-height: 3em;
`;

const DescText = styled.text`
  font-size: 0.9em;
  line-height: 0.1em;
  color: #a5a5a5;
`;

const Polaroid = styled.button`
  position: relative;
  background: #fff;
  width: 375px;
  padding: 0px 0px 15px 0px;
  margin: 12px;
  text-align: left;
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
              link
            }
          }
        }
      }
    `}
    render={data => (
      <>
        {data.dataJson.projectData.map(projectItem => 
          <Polaroid to={projectItem.project.link}>
            <DynamicImage imageName={projectItem.project.imageName} />

            <Div>
              <TitleText> <b>{projectItem.project.title} </b> </TitleText>
              <br />
              <DescText> {projectItem.project.description} </DescText>
            </Div>
          </Polaroid>
        )}
      </>
    )}
  />
)

export default ProjectPanel;