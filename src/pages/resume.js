import React from "react"
import Layout from "../components/layout"

import { Container, Row, Col } from "reactstrap"
import { Document, Page } from "react-pdf"
import resume from "../pdfs/jenny-le-resume.pdf"
import styled from 'styled-components'

import SEO from "../components/seo"

const PDFDocumentWrapper = styled.div`
    canvas {
        width: 100% !important;
        height: auto !important;
    }
`;

const ResumePage = () => (
    <Layout>
        <Container>
            <SEO title="Resume"/>
            <Row>
                <Col xs="12">
                    <PDFDocumentWrapper>
                        <Document file={resume}> 
                            <Page pageNumber={1} scale={1.2} renderTextLayer={false} />
                        </Document>
                    </PDFDocumentWrapper>
                </Col>
            </Row>
        </Container>
    </Layout>
)

export default ResumePage