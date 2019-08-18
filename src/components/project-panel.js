import React from "react"
import { useStaticQuery, Link, graphql, StaticQuery } from "gatsby"
import styled from 'styled-components'
import { Badge } from 'reactstrap'

import DynamicImage from "../components/image"

const Div = styled.div`
  margin: 1% 5% 5% 5%;
`;

const TitleText = styled.text`
  font-size: 1em;
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
  width: 330px;
  padding: 0px 0px 0px 0px;
  margin: 3%;
  text-align: left;
  border: 1px solid #f4f4f4;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.05);
  font-family: nunito sans;

  &:hover {
    -moz-box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
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
              tags
              link
            }
          }
        }
      }
    `}
    render={data => (
      <>
        {data.dataJson.projectData.map(projectItem => 
          <Link to={projectItem.project.link}>
            <Polaroid to={projectItem.project.link}>
              <DynamicImage imageName={projectItem.project.imageName} />
              <Div>
                <TitleText> <b>{projectItem.project.title} </b> </TitleText>
                <br />
                <DescText> {projectItem.project.description} </DescText>
                <p></p>
                {projectItem.project.tags.map(tagItem =>
                  <Badge color="light"> {tagItem} </Badge>
                )}
              </Div>
            </Polaroid>
          </Link>
        )}
      </>
    )}
  />
)

export default ProjectPanel;