import React from "react"
import Layout from "../components/layout"
import { device } from "../components/device"

import { Container, Row, Col } from "reactstrap"
import { Document, Page } from "react-pdf"
import resume from "../pdfs/jenny-le-resume.pdf"
import styled from 'styled-components'

import SEO from "../components/seo"

const PDFDocumentWrapper = styled.div`
    canvas {
        @media ${device.mobileS} {
            width: 100% !important;
            height: auto !important;
        }

        @media ${device.laptop} {
            width: 45% !important;
            height: auto !important;
        }
    }
`;

const ResumePage = () => (
    <Layout>
        <Container>
            <SEO title="Resume"/>
            <Row>
                <Col xs="12" md={{ size: 12, offset: 3}}>
                    <PDFDocumentWrapper>
                        <Document file={resume}> 
                            <Page pageNumber={1} scale={1} size={"A4"} renderTextLayer={false} />
                        </Document>
                    </PDFDocumentWrapper>
                </Col>
            </Row>
        </Container>
    </Layout>
)

export default ResumePage